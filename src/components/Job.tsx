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

import { useRef, useEffect, useState } from "react";

import {
  mask,
} from "../utils/tel";

export function Job() {

  const JobBlockRef = useRef<HTMLDivElement>(null);
  const [isJobAnimated, setIsJobAnimated] = useState(false);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const handleClickPopUp = () => {
    setIsPopUpVisible((prev) => !prev);
  };

  const handleFiles = (e:any) => {
    let file = e.target.files[0];

    let file_input = document.querySelector(".job__file");
    let file_input_name = document.querySelector(".job__fileName");

    file_input!.classList.add("job__file_active");
    file_input_name!.innerHTML = file.name;
  };

  useEffect(() => {
    let input = document.querySelector(".job__input_tel");
    input!.addEventListener("input", mask, false);
    input!.addEventListener("focus", mask, false);
    input!.addEventListener("blur", mask, false);
  });

  useEffect(() => {
    let is_showed = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !is_showed) {
          setIsJobAnimated(true);

          is_showed = true;
          observer.disconnect();
        }
      });
    });

    observer.observe(JobBlockRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="job"
      className={`job ${isJobAnimated ? "job_animated" : ""}`}
      ref={JobBlockRef}
    >
      <div
        className={`job__popUpBack ${
          isPopUpVisible ? "job__popUpBack_visible" : ""
        }`}
        onClick={handleClickPopUp}
      ></div>
      <div className="job__content">
        <h2 className="job__head">
          Нам <i className="job__textBlue">нужны</i>{" "}
          <i className="job__textBlue_mob">в команду</i>
        </h2>
        <span className="job__text">
          Ты уверенный в себе человек с сильными компетенциями и навыками?
          <br />
          Ты эксперт в своем деле и просто красавчик?
          <br />
          Мы объединяем крутых ребят в новый масштабный проект для совместного
          построения
          <br />
          компании с капитализацией минимум
          <br />в 1 000 000 000 $. Проявись в этом мире и оставь за собой
          уникальный след.
        </span>
        <img src={job_img_1} className="job__img job__img_logo" />
        <div className="job__light"></div>
        <img src={job_img_2} className="job__img job__img_people" />
        <div
          className={`job__popUp ${isPopUpVisible ? "job__popUp_visible" : ""}`}
        >
          <div className="job__form">
            <img src={form_logo} className="job__formLogo" />
            <form>
              <input type="text" placeholder="Имя" className="job__input" required/>
              <input type="text" placeholder="Фамилия" className="job__input" required/>
              <input type="tel" placeholder="Телефон" className="job__input job__input_tel" required/>
              <input type="email" placeholder="Email" className="job__input" required/>
              <label htmlFor="fileInput" className="job__file">
                <span className="job__fileName">Прикрепить резюме</span>
                <input
                  id="fileInput"
                  type="file"
                  accept=".doc,.docx,.pdf"
                  maxLength={16777216}
                  onChange={handleFiles}
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
        <a className="job__button job__button_mob" onClick={handleClickPopUp}>
          <img src={form_button} className="job__fromButtonImg" />
          Хочу в команду
        </a>
      </div>
    </div>
  );
}
