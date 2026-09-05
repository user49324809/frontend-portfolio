function Contacts(){
    return(
        <footer className="contacts" id="contacts">
            <div className="container">
                <div className="contacts__container">
                  <div className="contacts__content">
                    <p className="section-label">Контакты</p>
                    <h2 className="contacts__title">
                        Готова обсудить работу и новые проекты
                    </h2>
                    <p className="contacts__description">
                        Связаться со мной можно по электронной почте или через GitHub.
                    </p>
                  </div>
                  <div className="contacts__links">
                    <a href="mailto:inna6903zaharova@yandex.ru" className="contacts__button contacts__button--primary">
                        Написать мне
                    </a>
                    <a href="https://github.com/user49324809" target="_blank" rel="noreferrer" className="contacts__button">
                        GitHub
                    </a>
                  </div>
                </div>
                <div className="contacts__bottom">
                    © 2026 Наталья. Frontend-разработчик.
                </div>
            </div>
        </footer>
    )
}

export default Contacts
