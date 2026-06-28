type SkillGroup = {
    id: number
    title: string
    skills: string[]
}

const SkillGroups: SkillGroup[] = [
    {
        id: 1,
        title: 'Основные технологии',
        skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript'],
    },
    {
        id: 2,
        title: 'Frontend',
        skills: ['React', 'Vue3', 'React Router', 'Pinia', 'Material UI'],
    },
    {
        id: 3,
        title: 'Работа с данными',
        skills: ['REST API', 'Axios', 'fetch API', 'localStorage', 'JSON'],
    },
    {
        id: 4,
        title: 'Инструменты',
        skills: ['Git', 'GitHub', 'Vite', 'npm', 'figma'],
    },
]

function Skills(){
    return(
        <section className="skills" id="skills">
            <div className="container">
                <p className="section-label">Навыки</p>
                <h2 className="skills__title">
                    Технологии, которые я использую в разработке
                </h2>
                <div className="skills_grid">
                    {SkillGroups.map((group) => (
                        <article className="skill-group" key={group.id}>
                            <h3 className="skill-group__title">{group.title}</h3>
                            <ul className="skill-group__list">
                                {group.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills