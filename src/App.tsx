import './App.scss'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'

function App() {
  return (
    <div className='portfolio'>
      <header className="header">
        <div className="container header__container">
          <a href="#" className="header__logo">
            Natalia
          </a>
          <nav className="header__nav" aria-label='Основная навигация'>
            <a href="#about">About me</a>
            <a href="#projects">Project</a>
            <a href="#skills">Skills</a>
            <a href="#contacts">Contacts</a>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="container">
            <p className="hero__label">Frontend developer</p>
            <h1 className="hero__title">Создаю удобные и современные веб-интерфейсы</h1>
            <p className="hero__description">
              Разрабатываю приложения на React, Vue, работаю с TypeScript, RESTAPI,
              формами, маршрутизацией и управлением состоянием.
            </p>
            <a href="#projects" className='hero__button'>Посмотреть проекты</a>
          </div>
        </section>
        <section className="about" id='about'>
          <div className="container about__container">
            <div className="about__header">
              <p className="section-label">Обо мне</p>
              <p className="about__title">Разрабатываю интерфейсы и связываю их с серверной частью</p>
            </div>
            <div className="about__content">
              <p>
                Я frontend-разработчик. Создаю веб приложения на React, Vue, работаю с TypeScript, REST API,
                формами, маршрутизацией и управлением состоянием.
              </p>
              <p>
                Могу пройти путь от структуры интерфейса до работающего приложения:
                разбить страницу на компоненты, подключить данные, обработать загрузку и ошибки,
                а также сделать адаптивную верстку.
              </p>
            </div>
          </div>
        </section>
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </div>
  )
}

export default App
