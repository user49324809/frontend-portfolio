type Project = {
    id: number
    title: string
    description: string
    stack: string[]
    status: string
    sourceUrl: string
    demoUrl?: string
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Трекер расходов',
        description: 'Приложение для учёта расходов с фильтрацией, диаграммами и сохранением данных в браузере.',
        stack: ['React', 'JavaScript', 'Chart.js', 'localStorage'],
        status: 'Опубликован',
        sourceUrl: 'https://github.com/user49324809/tracker',
        demoUrl: 'https://user49324809.github.io/tracker/',
    },
    {
        id: 2,
        title: 'Интеграция отзывов Яндекса',
        description: 'Full-stack интерфейс для подключения компании и просмотра рейтинга и отзывов. Для демонстрации используется mock-провайдер данных.',
        stack: ['Laravel', 'Vue 3', 'Inertia', 'MySQL'],
        status: 'Full-stack · mock data',
        sourceUrl: 'https://github.com/user49324809/yandex_integrations',
    },
    {
        id: 3,
        title: 'Короткие ссылки и QR-коды',
        description: 'Сервис сокращения ссылок с генерацией QR-кодов, статистикой переходов и Docker-окружением.',
        stack: ['PHP', 'Yii2', 'MySQL', 'Docker'],
        status: 'Backend-проект',
        sourceUrl: 'https://github.com/user49324809/shortlink',
    },
]

function Projects(){
    return(
        <section className="projects" id="projects">
            <div className="container">
                <p className="section-label">Проекты</p>
                <h2 className="projects__title">Приложения, над которыми я работала</h2>
                <div className="projects__grid">
                    {projects.map((project) =>(
                        <article className="project-card" key={project.id}>
                            <p className="project-card__status">{project.status}</p>
                            <h3 className="project-card__title">{project.title}</h3>
                            <p className="project-card__description">
                                {project.description}
                            </p>
                            <ul className="project-card__stack">
                                {project.stack.map((technology) => (
                                    <li key={technology}>{technology}</li>
                                ))}
                            </ul>
                            <div className="project-card__links">
                                {project.demoUrl && (
                                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                                        Демо
                                    </a>
                                )}
                                <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                                    Код на GitHub
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
