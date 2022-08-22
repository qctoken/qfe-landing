import eye from "../images/eye.svg";
import avatar_1 from "../images/avatar_1.png";
import avatar_2 from "../images/avatar_2.png";
import avatar_3 from "../images/avatar_3.png";
import avatar_4 from "../images/avatar_4.png";
import avatar_5 from "../images/avatar_5.png";
import avatar_7 from "../images/avatar_7.png";
import avatar_8 from "../images/avatar_8.png";
import avatar_9 from "../images/avatar_9.png";
import avatar_10 from "../images/avatar_10.png";
import avatar_11 from "../images/avatar_11.png";
import avatar_12 from "../images/avatar_12.png";
import avatar_14 from "../images/avatar_14.png";
import avatar_15 from "../images/avatar_15.png";

const COMMANDS = [
  {
    name: "Виталий Кузнецов",
    position: "Founder",
    img: avatar_1,
    description:
      "Автор технологии продаж через ценности. Один из лучших бизнес-тренеров по запускам и продажам в СНГ. Создатель легендарного тренинга “Большие чеки”",
  },
  {
    name: "Алекс Санбаев",
    position: "CEO",
    img: avatar_2,
    description:
      "Мастер по достижению максимального результата в минимальные сроки. Пока другие говорят, он уже запустил и протестировал. Знает все обо всех в компании.",
  },
  {
    name: "Олег Куценко",
    position: "CTO",
    img: avatar_3,
    description:
      "У него все под контролем. Даже контроль под его контролем. Нет того, что он не знает. 100 процессов одновременно - не проблема.",
  },
  {
    name: "Дана Сераева",
    position: "Sales",
    img: avatar_4,
    description:
      "Совершает продажи из и во имя любви. Мать 5-ых детей. Максимально развита 1 и 4 чакра. Лечит взглядом, продает сердцем.",
  },
  {
    name: "Евгений Кудрин",
    position: "Product Manager",
    img: avatar_5,
    description:
      "Решит нерешаемую проблему. Найдет выход из безвыходной ситуации. Донесёт сложное простыми словами.",
  },
  {
    name: "Илья Мишенков",
    position: "Sales",
    img: avatar_7,
    description:
      "Продает через дизайн человека. Совершил сделку на 400 млн. руб. Имеет чёрный пояс по продажам. Знает секретный ключ к идеальным переговорам",
  },
  {
    name: "Соня Апакина",
    position: "Архитектор",
    img: avatar_8,
    description:
      "Разрабатывает концептуальные идеи по объемно-планировочным решениям: пространства, города и зданий. Ежечасно следит за тенденциями и трендами метавселенных. Спец по составлению ТЗ.",
  },
  {
    name: "Дмитрий Науменко",
    position: "Системный продуктолог",
    img: avatar_9,
    description:
      "Помогает делать учебный процесс легким и эффективным. Структурирует задания, методические материалы и презентации для участников обучающих программ.",
  },
  {
    name: "Иосиф Миневич",
    position: "Бизнес архитектор",
    img: avatar_10,
    description:
      "Собирает из хаоса систему. Разложит бизнес процессы на винтики. Использует технику - понимаем идеальный результат, подробно расписываем путь.",
  },
  {
    name: "Никита Яковлев",
    position: "Youtuber",
    img: avatar_11,
    description:
      "Магистр ютуба и гений видео продакшна. Вывел психолога изСибирской деревни на 40 миллионов руб/мес. в продажах с ютуба. Режиссёр и продюсер крупнейшего вебинар канала России - Школа Тайны Жизни.",
  },
  {
    name: "Елена Ильичева",
    position: "Technical master",
    img: avatar_12,
    description:
      "Обеспечит технический комфорт команды и студентов. Воронки, эфиры, рассылки. Бесперебойная работа сервисов.",
  },
  {
    name: "Мария Маклакова",
    position: "Служба заботы",
    img: avatar_14,
    description:
      "Поможет, подскажет, поддержит. Если вы заблудились - вернёт на верный путь. Если запутались - распутает. Обращаться по всем непонятным вопросам.",
  },
  {
    name: "Елена Сергеева",
    position: "Контент-Маркетолог",
    img: avatar_15,
    description:
      'Мастер языка смыслов в текстах. Пишет как дышит. Глаголом жжет и сердца, и умы людей. Тонко чувствует разницу между "жечь", "зажигать" и "выжигать". Выжиганию нет, огню идей - да.',
  },
];

export function Command() {
  return (
    <>
      <div id="command" className="command">
        <div className="command__content">
          <h2 className="command__head">Наша команда</h2>
          <div className="command__main">
            {COMMANDS.slice(0, 2).map((info, index) => (
              <div key={index} className="command__mainCard">
                <img
                  src={info.img}
                  className="command__avatar command__avatar_main"
                />
                <span className="command__position command__position_main">
                  {info.position}
                </span>
                <h5 className="command__name command__name_main">
                  {info.name}
                </h5>
                <span className="command__aboutText command__aboutText_main">
                  {info.description}
                </span>
              </div>
            ))}
          </div>
          <div className="command__scrollBlock">
            <div className="command__scroll">
              {COMMANDS.slice(0, 2).map((info, index) => (
                <div key={index} className="command__link" card-num={index + 1}>
                  <div className="command__card command__card_hidden">
                    <img src={info.img} className="command__avatar" />
                    <span className="command__position">{info.position}</span>
                    <h5 className="command__name">{info.name}</h5>
                    <a className="command__eye">
                      <img src={eye} />
                    </a>
                  </div>
                </div>
              ))}
              {COMMANDS.slice(2).map((info, index) => (
                <div key={index} className="command__link" card-num={index + 3}>
                  <div className="command__card">
                    <img src={info.img} className="command__avatar" />
                    <span className="command__position">{info.position}</span>
                    <h5 className="command__name">{info.name}</h5>
                    <a className="command__eye">
                      <img src={eye} />
                    </a>
                  </div>
                  <div className="command__about">
                    <span className="command__aboutHead">Обо мне</span>
                    <span className="command__aboutText">
                      {info.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="command__backPopUp"></div>
      <div className="command__popUp">
        {COMMANDS.map((info, index) => (
          <div
            key={index}
            className="command__popUpPersonBlock"
            card-num={index + 1}
          >
            <div className="command__card">
              <img
                src={info.img}
                className="command__avatar command__avatar_popUp"
              />
              <span className="command__position command__position_popUp">
                {info.position}
              </span>
              <h5 className="command__name command__name_popUp">
                {info.name}
              </h5>
            </div>
            <div className="command__about command__about_mob">
              <span className="command__aboutHead">Обо мне</span>
              <span className="command__aboutText">{info.description}</span>
            </div>
            <a className="command__popUpClose">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.87937 5.99925L0.439875 2.55975C-0.146625 1.97475 -0.146625 1.02375 0.439875 0.43875C1.02487 -0.14625 1.97588 -0.14625 2.56087 0.43875L6.00037 3.87825L9.43987 0.43875C10.0249 -0.14625 10.9759 -0.14625 11.5609 0.43875C12.1459 1.02375 12.1459 1.97475 11.5609 2.55975L8.12138 5.99925L11.5609 9.43875C12.1459 10.0238 12.1459 10.9748 11.5609 11.5597C10.9759 12.1447 10.0249 12.1447 9.43987 11.5597L6.00037 8.12025L2.56087 11.5597C1.97588 12.1447 1.02487 12.1447 0.439875 11.5597C-0.146625 10.9748 -0.146625 10.0238 0.439875 9.43875L3.87937 5.99925Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
