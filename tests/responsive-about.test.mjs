import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const scssUrl = new URL('../src/App.scss', import.meta.url);

test('mobile about layout override comes after the base about rule', async () => {
  const source = await readFile(scssUrl, 'utf8');

  const mediaPosition = source.lastIndexOf('@media (max-width: 700px)');
  const baseAboutPosition = source.lastIndexOf('\n.about {');

  assert.ok(mediaPosition > baseAboutPosition, 'mobile media query must come after the base .about rule');

  const mobileSource = source.slice(mediaPosition);
  assert.match(mobileSource, /grid-template-columns:\s*1fr;/);
});
