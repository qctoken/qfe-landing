import form_logo from "../images/form_logo.svg";
import job_img_1 from "../images/job_img_1.svg";
import job_img_2 from "../images/job_img_2.svg";
import form_button from "../images/form_button.svg";
import jobAvatar_1 from "../images/jobAvatar_1.png";
import jobAvatar_2 from "../images/jobAvatar_2.png";
import jobAvatar_3 from "../images/jobAvatar_3.png";
import jobAvatar_4 from "../images/jobAvatar_4.png";
import jobAvatar_5 from "../images/jobAvatar_5.png";
import jobAvatar_6 from "../images/jobAvatar_6.png";

export function Job() {
  return (
    <div id="job" className="job">
      <div className="job__content">
        <h2 className="job__head">
          Нам <i className="job__textBlue">нужны</i>{" "}
          <i className="job__textBlue_mob">в команду</i>
        </h2>
        <span className="job__text">
          Вы жаждите приключений и хотите найти свое место в этом необъятном
          мире?
          <br />
          Мы создали для вас прекрасное пространство которое одновременно
          находится в реальном и виртуальном мире. Это сосредоточие творческих
          личностей, которые каждый день совершенствуют себя и свои навыки,
          проходя 4 квадранта денежного богатства. Здесь каждый может найти себе
          партнеров по бизнесу, клиентов, заказчиков, друзей или просто
          единомышленников. Пространство полностью располагает к дружескому и
          деловому общению.
        </span>
        <img src={job_img_1} className="job__img job__img_logo" />
        <div className="job__light"></div>
        <img src={job_img_2} className="job__img job__img_people" />
        <div className="job__popUp">
          <div className="job__form">
            <img src={form_logo} className="job__formLogo" />
            <form>
              <input type="text" placeholder="Имя" className="job__input" />
              <input type="text" placeholder="Фамилия" className="job__input" />
              <input type="tel" placeholder="Телефон" className="job__input" />
              <input type="email" placeholder="Email" className="job__input" />
              <label htmlFor="fileInput" className="job__file">
                Прикрепить резюме
                <input
                  id="fileInput"
                  type="file"
                  accept=".doc,.docx,.pdf"
                  maxLength={16777216}
                />
              </label>
              <span className="job__formDeskr">DOC, DOCX, PDF (2 MB)</span>
              <button type="submit" className="job__button">
                <img src={form_button} className="job__fromButtonImg" />
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
        <div className="job__scrollBlock">
          <div className="job__scroll">
            <div className="job__item">
              <img src={jobAvatar_1} className="job__avatar" />
              <span className="job__profName">Ui/UX Дизайнер</span>
            </div>
            <div className="job__item">
              <img src={jobAvatar_2} className="job__avatar" />
              <span className="job__profName">Frontend Developer</span>
            </div>
            <div className="job__item">
              <img src={jobAvatar_3} className="job__avatar" />
              <span className="job__profName">Backend Developer</span>
            </div>
            <div className="job__item">
              <img src={jobAvatar_4} className="job__avatar" />
              <span className="job__profName">Креативный копирайтер</span>
            </div>
            <div className="job__item">
              <img src={jobAvatar_5} className="job__avatar" />
              <span className="job__profName">SEO специалист</span>
            </div>
            <div className="job__item">
              <img src={jobAvatar_6} className="job__avatar" />
              <span className="job__profName">Сильный маркетолог</span>
            </div>
          </div>
        </div>
        <a className="job__button job__button_mob">
          <img src={form_button} className="job__fromButtonImg" />
          Хочу в команду
        </a>
      </div>
    </div>
  );
}
