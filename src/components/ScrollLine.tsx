import scroll_line__icon1 from "../images/scroll-line__icon1.svg";
import scroll_line__icon2 from "../images/scroll-line__icon2.svg";
import scroll_line__icon3 from "../images/scroll-line__icon3.svg";
import scroll_line__icon4 from "../images/scroll-line__icon4.svg";
import scroll_line__icon5 from "../images/scroll-line__icon5.svg";
import scroll_line__icon6 from "../images/scroll-line__icon6.svg";
import scroll_line__icon7 from "../images/scroll-line__icon7.svg";

import { useEffect } from "react";

export function ScrollLine() {
  useEffect(() => {
    const scroll_items = document.querySelectorAll<HTMLElement>('.scroll-line__item');
    const scroll_bar = document.querySelector<HTMLElement>('.scroll-line__bar');
    let count_items = scroll_items.length;
    let number_item = 0;

    scroll_bar!.classList.add('scroll-line__bar_animate');

    let interval = setInterval(() => {
      scroll_bar!.classList.remove('scroll-line__bar_animate');
      if(number_item == count_items - 1){
        number_item = 0;
        scroll_items.forEach(item => {
          item.style.order = "0";
        });
      }else{ 
        scroll_items[number_item].style.order = "1";
        number_item++;
      }
      setTimeout(()=>{scroll_bar!.classList.add('scroll-line__bar_animate');}, 20);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="scroll-line">
      <div className="scroll-line__bar">
        
          <div className="scroll-line__item">
            <h2 className="scroll-line__head">Образование</h2>
            <span className="scroll-line__text">
              Инвестируешь в свое образование
            </span>
            <img className="scroll-line__icon" src={scroll_line__icon1} />
          </div>
        
          <div className="scroll-line__item">
            <h2 className="scroll-line__head">Практика</h2>
            <span className="scroll-line__text">
              Отработаешь навыки, через тренажер
            </span>
            <img className="scroll-line__icon" src={scroll_line__icon2} />
          </div>
        
          <div className="scroll-line__item">
            <h2 className="scroll-line__head">Коммьюнити</h2>
            <span className="scroll-line__text">
              Найдешь для себя единомышленников
            </span>
            <img className="scroll-line__icon" src={scroll_line__icon3} />
          </div>
        
          <div className="scroll-line__item scroll-line__item_black">
            <h2 className="scroll-line__head scroll-line__head_white">
              Сертификат
            </h2>
            <span className="scroll-line__text scroll-line__text_white">
              Получишь экспертный NFT сертификат
            </span>
            <img className="scroll-line__icon" src={scroll_line__icon4} />
          </div>
        
          <div className="scroll-line__item">
            <h2 className="scroll-line__head">Биржа</h2>
            <span className="scroll-line__text">
              Находит заказчиков и работу вашим ученикам
            </span>
            <img className="scroll-line__icon" src={scroll_line__icon5} />
          </div>
        
          <div className="scroll-line__item scroll-line__item_blue">
            <h2 className="scroll-line__head scroll-line__head_white">
              Акционер
            </h2>
            <span className="scroll-line__text scroll-line__text_white">
              Станешь акционером нашей компании
            </span>
            <img className="scroll-line__icon" src={scroll_line__icon6} />
          </div>
        
          <div className="scroll-line__item scroll-line__item_yellow">
            <h2 className="scroll-line__head">Своя вилла</h2>
            <span className="scroll-line__text">
              Станешь владельцем недвижимости на Бали
            </span>
            <img className="scroll-line__icon" src={scroll_line__icon7} />
          </div>
      </div>
    </div>
  );
}
