type Project = {
    id: number
    title: string
    description: string
    stack: string[]
    status: string
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Менеджер задач на Vue',
        description: 'Приложение для создания и выполнения задач с сохранением в localStorage',
        stack: ['Vue3', 'TypeScript', 'Pinia', 'SCSS'],
        status: 'Готовится к публикации'
    },
    {
        id: 2,
        title: 'Менеджер задач на React',
        description: 'Приложение с регистрацией, авторизацией и уапрвления личными задачами',
        stack: ['React', 'JavaScript', 'RestApi', 'MongoDB'],
        status: 'Готовится к публикации'
    },
    {
        id: 3,
        title: 'Панель отзывов',
        description: 'Интерфейс для отображения рейтинга компании и списка отзывов пользователей',
        stack: ['Vue3', 'Axios', 'Inertia', 'Tailwind CSS'],
        status: 'Готовится к публикации'
    },
]

function Projects(){
    return(
        <section className="projects" id="projects">
            <div className="container">
                <p className="section-label">Проекты</p>
                <h2 className="project__title">Приложения, над которыми я работала</h2>
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
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects