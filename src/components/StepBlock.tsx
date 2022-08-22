import header_arrow_menu from "../images/header_arrow_menu.svg";
import step_1 from "../images/step_1.png";
import step_2 from "../images/step_2.png";
import step_3 from "../images/step_3.png";
import step_4 from "../images/step_4.png";
import step_5 from "../images/step_5.png";
import step_6 from "../images/step_6.png";
import step_7 from "../images/step_7.png";
import step_8 from "../images/step_8.png";
import step_9 from "../images/step_9.png";
import step_10 from "../images/step_10.png";
import step_11 from "../images/step_11.png";
import step_12 from "../images/step_12.png";

export function StepBlock() {
  return (
    <div id="step-block" className="steps">
      <div className="step-block" step-count="12">
        <h1 className="step-block__head">12 шагов до успеха</h1>
        <div className="step-block__list">
          <a
            step-num="1"
            className="step-block__option step-block__option_active"
          >
            Запуск продукта
          </a>
          <a step-num="2" className="step-block__option">
            Воронка продаж
          </a>
          <a step-num="3" className="step-block__option">
            Конструктор лендингов
          </a>
          <a step-num="4" className="step-block__option">
            Методология продукта
          </a>
          <a step-num="5" className="step-block__option">
            Методология продаж
          </a>
          <a step-num="6" className="step-block__option">
            Конструктор тренажера
          </a>
          <a step-num="7" className="step-block__option">
            CRM-система
          </a>
          <a step-num="8" className="step-block__option">
            Аналитика и статистика
          </a>
          <a step-num="9" className="step-block__option">
            Встроенная платежная система
          </a>
          <a step-num="10" className="step-block__option">
            <span className="step-block__option_mob">Сертификат NFT и L2E</span>
            <span className="step-block__option_desk">Сертификат NFT и технология Learn To Earn</span>
          </a>
          <a step-num="11" className="step-block__option">
            Social
          </a>
          <a step-num="12" className="step-block__option">
            Биржа
          </a>
        </div>
        <a className="step-block__listArrow">
          <img src={header_arrow_menu} />
        </a>
        <div className="step-block__step step-block__step_active" step-num="1">
          <div className="step-block__text-block">
            <h2 className="step-block__name">Запуск продукта</h2>
            <span className="step-block__text">
              Настройте в один клик интуитивно понятно без технических
              специалистов рекламную кампанию в Яндексе, Вконтакте, в Instagram,
              в Youtube, в Google. Весь борт управления на одном экране.
            </span>
            <span className="step-block__text">
              Не нужно регистрировать кучу аккаунтов, не нужно искать, как
              разблокировать рекламный кабинет Facebook, не нужно разбираться с
              каждым рекламным кабинетом отдельно, которые постоянно обновляют
              свои интерфейсы. Настройка трафика занимает одну минуту в 3 клика.
              Наслаждайтесь конверсиями и доходом своего бизнеса.
              <br />
              Мы позаботились о вас.
            </span>
            
          </div>
          <img src={step_1} className="step-block__img" />
        </div>
        <div className="step-block__step" step-num="2">
          <div className="step-block__text-block">
            <h2 className="step-block__name">Воронка продаж</h2>
            <span className="step-block__text">
              Готовые шаблоны и гибкий конструктор по созданию чат-ботов для
              высоко конверсионной доходимости до вашего продукта в: Telegram,
              Вконтакте, WhatsApp, Instagram, Viber. Бот общается с вашими
              клиентами за вас и отвечает на все вопросы, вам же остается
              принимать оплаты.
            </span>
            <span className="step-block__text">
              Коммуницируйте со своей аудиторией через eMail, смс, автодозвоны.
              Проводите вебинары и понимайте динамику вовлечения аудитории в
              реальном времени за счет автоматических подсказок искусственного
              интеллекта.
            </span>
            
          </div>
          <img src={step_2} className="step-block__img" />
        </div>
        <div className="step-block__step" step-num="3">
          <div className="step-block__text-block">
            <h2 className="step-block__name">Конструктор лендингов</h2>
            <span className="step-block__text">
              Собирайте свою продающую страницу просто, по кирпичикам,
              основываясь на своей фантазии или пользуйтесь более чем 100
              готовыми шаблонами, которые уже сейчас приносят вашим коллегам
              высокие конверсии в заявки.
            </span>
            <span className="step-block__text">
              {" "}
              Создавайте и загружайте свои шаблоны, которые по партнерской
              программе будут вам ежедневно приносить дополнительный доход.
            </span>
            
          </div>
          <img src={step_3} className="step-block__img" />
        </div>
        <div className="step-block__step" step-num="4">
          <div className="step-block__text-block">
            <h2 className="step-block__name">Методология продукта</h2>
            <span className="step-block__text">
              Вы можете создавать свои обучающие продукты без методолога с
              помощью нашего методологического конструктора в котором будут
              собраны большое количество примеров, а пошаговая структура
              проведет вас от “У меня нет своего курса, я не имею
              педагогического образования” до “Я имею лучший курс в своей жизни,
              который способен конкурировать даже с топовыми игроками рынка”.
            </span>
            
          </div>
          <img src={step_4} className="step-block__img" />
        </div>
        <div className="step-block__step" step-num="5">
          <div className="step-block__text-block">
            <h2 className="step-block__name">Методология продаж</h2>
            <span className="step-block__text">
              В продажах нет ничего сложного, если вы встраиваете на каждом
              этапе продажу своего продукта.
            </span>
            <span className="step-block__text">
              Наш конструктор методологии продаж поможет составить вам цепочку
              писем, сообщений, речевых модулей, которые помогут вашему клиенту
              приобрести дорогой продукт с большим чеком.
            </span>
            
          </div>
          <img src={step_5} className="step-block__img" />
        </div>
        <div className="step-block__step" step-num="6">
          <div className="step-block__text-block">
            <h2 className="step-block__name">Конструктор тренажера</h2>
            <span className="step-block__text">
              Если ваш ученик не мог понять материал из-за этого не завершал
              обучение, то теперь все иначе.
            </span>
            <span className="step-block__text">
              Тренажер будет проверять человека автоматически в конце урока,
              задавая ему вопросы и возвращать его на непонятную ему тему. На ту
              секунду видео, где вы говорили об этом.
            </span>
            <span className="step-block__text">
              За счет нашего тренажера LTV ваших клиентов значительно
              увеличивается, что позволит вам продать вашу линейку продуктов на
              больший чек.
            </span>
            
          </div>
          <img src={step_6} className="step-block__img" />
        </div>
        <div className="step-block__step" step-num="7">
          <div className="step-block__text-block">
            <h2 className="step-block__name">CRM-система</h2>
            <span className="step-block__text">
              Заявки из разных источников попадают сразу в CRM-систему, из
              которой вы или ваш менеджер сможет сразу ответить клиенту или
              назначить звонок.
            </span>
            <span className="step-block__text">
              Привяжите в 1 клик все ваши мессенджеры, что бы ни одно сообщение
              не было упущено.
            </span>
            <span className="step-block__text">
              Звоните своим клиентам из CRM-системы на WhatsApp, telegram, Viber
              или на мобильный телефон через встроенную IP телефонию в любой
              уголок мира.
            </span>
            
          </div>
          <img src={step_7} className="step-block__img" />
        </div>
        <div className="step-block__step" step-num="8">
          <div className="step-block__text-block">
            <h2 className="step-block__name">Аналитика и статистика</h2>
            <span className="step-block__text">
              Хотите знать какой рекламный креатив или stories в Instagram
              принес вам максимальное кол-во продаж?
            </span>
            <span className="step-block__text">
              Может вы хотите знать характеристики своих лучших учеников.
              <br />
              Выявить фразы в продающем вебинаре, которые принесли вам
              дополнительные оплаты.
            </span>
            <span className="step-block__text">
              Все это с нашими алгоритмами сбора статистики и аналитики.
            </span>
            
          </div>
          <img src={step_8} className="step-block__img" />
        </div>
        <div className="step-block__step" step-num="9">
          <div className="step-block__text-block">
            <h2 className="step-block__name">Встроенная платежная система</h2>
            <span className="step-block__text">
              Принимать платежи и оплачивать из любого уголка мира с пластиковых
              карт, онлайн кошельков и через криптовалюты теперь будет легко и
              просто для вас и ваших клиентов в нашей платежной системе.
            </span>
            <span className="step-block__text">
              Поддержка карт Европы, Америки, СНГ, Азии и РФ.
            </span>
            
          </div>
          <img src={step_9} className="step-block__img" />
        </div>
        <div className="step-block__step" step-num="10">
          <div className="step-block__text-block">
            <h2 className="step-block__name">
              Сертификат NFT и технология Learn to Earn
            </h2>
            <span className="step-block__text">
              Создавайте свой уникальный продукт и закрепляйте за ним авторское
              право с помощью NFT сертификата всего за 5 минут.
            </span>
            <span className="step-block__text">
              С помощью технологии Learn to Earn (обучайся и зарабатывай), ваши
              ученики проходят обучение и зарабатывают, вовлекаясь в ваш продукт
              еще глубже. Проходя сертификацию они получают вознаграждение,
              подтверждая этим свою компетентность и выработку навыков.
            </span>
            <span className="step-block__text">
              Сертификат NFT определяет уровень вашего ученика - специалиста.
            </span>
            
          </div>
          <img src={step_10} className="step-block__img" />
        </div>
        <div className="step-block__step" step-num="11">
          <div className="step-block__text-block">
            <h2 className="step-block__name">Social</h2>
            <span className="step-block__text">
              Общайтесь внутри платформы без ограничений. Создавайте чаты и
              обменивайтесь мультимедиа. Давайте мини задания и контролируйте их
              выполнение.
            </span>
            <span className="step-block__text">
              Создавайте условия под каждого человека, под группу или для всех
              людей в целом. Теперь они вам не смогут написать пока не выполнят
              задания от вас.
            </span>
            <span className="step-block__text">
              Также вы можете создавать свое собственное комьюнити переходящее в
              метавселенную.
            </span>
            
          </div>
          <img src={step_11} className="step-block__img" />
        </div>
        <div className="step-block__step" step-num="12">
          <div className="step-block__text-block">
            <h2 className="step-block__name">Биржа</h2>
            <span className="step-block__text">
              Пользуйтесь большой базой экспертов, специалистов, потенциальных
              партнеров, интересных проектов, инвесторов и находите только
              сертифицированных в NFT людей для своих целей.
            </span>
            <span className="step-block__text">
              Размещайте своих учеников на нашей бирже и получайте % с их
              успешно выполненных заказов, тем самым являясь гарантом их
              качества.
            </span>
            
          </div>
          <img src={step_12} className="step-block__img" />
        </div>
        <div className="step-block__nav">
          <div className="step-block__nav-number">
            <span className="step-block__nav-curr">01</span>
            <span className="step-block__nav-stick">/</span>
            <span className="step-block__nav-max">12</span>
          </div>
          <a className="step-block__arrow-left"></a>
          <a className="step-block__arrow-right step-block__arrow-right_active"></a>
        </div>
      </div>
    </div>
  );
}
