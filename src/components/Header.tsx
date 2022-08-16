import logo from "../images/logo.svg";
import header_arrow_menu from "../images/header_arrow_menu.svg";

export function Header() {
  return (
    <>
      <div className="header__background"></div>
      <ul className="menu menu_mob">
        <a className="menu__link active" href="#">
          <li className="menu__item">Главная</li>
        </a>
        <a className="menu__link" href="#step-block">
          <li className="menu__item">Твой путь</li>
        </a>
        <a className="menu__link" href="#roadmap">
          <li className="menu__item">Roadmap</li>
        </a>
        <a className="menu__link" href="#dblock">
          <li className="menu__item">Метавселенная</li>
        </a>
        <a className="menu__link" href="#values">
          <li className="menu__item">Идеология</li>
        </a>
        <a className="menu__link" href="#bali">
          <li className="menu__item">Недвижимость</li>
        </a>
        <a className="menu__link" href="#command">
          <li className="menu__item">Команда</li>
        </a>
        <a className="menu__link" href="#partner">
          <li className="menu__item">Партнерство</li>
        </a>
        <a className="menu__link" href="#round">
          <li className="menu__item">Достижения</li>
        </a>
        <a className="menu__link" href="#job">
          <li className="menu__item">Начать с нами</li>
        </a>
      </ul>
      <header className="header">
        <div className="header__top-line">
          <img src={logo} className="header__logo" />
          <ul className="menu">
            <li className="menu__item active">
              <a className="menu__link" href="#">
                Главная
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#step-block">
                Твой путь
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#roadmap">
                Roadmap
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#dblock">
                Метавселенная
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#values">
                Идеология
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#bali">
                Недвижимость
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#command">
                Команда
              </a>
            </li>
            <li className="menu__arrow">
              <a className="menu__link" href="#">
                <img src={header_arrow_menu} />
              </a>
            </li>
            <ul className="menu__hide">
              <li className="menu__item">
                <a className="menu__link" href="#partner">
                  Партнерство
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#round">
                  Достижения
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#job">
                  Начать с нами
                </a>
              </li>
            </ul>
          </ul>
          <a className="menu__topButton">Купить QCT</a>
          <a className="menu__button">
            <div className="menu__line"></div>
            <div className="menu__line"></div>
            <div className="menu__line"></div>
          </a>
        </div>
        <h1 className="header__h1">
          <i className="header__h1_blue">Создай</i> свой образовательный продукт
          в <i className="h1_blue">метавселенной с технологией Learn to Earn</i>
        </h1>
        <h1 className="header__h1 header__h1__mob">
          <i className="header__h1_blue">Создай</i>
          <br />
          свой продукт в <i className="h1_blue">метавселенной</i>
        </h1>
        <span className="header__text">
          Интуитивно понятное комплексное инновационное решение для образования
          со встроенным конструктором методологии продуктов и запусков, с
          тренажером по выработки навыков в Метавселенной и с возможностью
          работы в любых валютах из любой точки Земли
        </span>
        <div className="header__butBlock">
          <a className="header__button">Начать пользоваться</a>
          <span className="header__button_text">Стать инвестором</span>
        </div>
      </header>
    </>
  );
}
