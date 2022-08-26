import { useRef, useEffect, useState, type MutableRefObject } from "react";

type Props = {
  secondPartRef: MutableRefObject<HTMLDivElement | null>;
};

export function Values({ secondPartRef }: Props) {
  const valuesRef = useRef(null);
  const [isEnter, setIsEnter] = useState(false);

  useEffect(() => {
    let is_showed = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const vrblock = document.querySelector(".vrblock");
        const vrblock__img = document.querySelector(".vrblock__img");
        const blocks_second_part = document.querySelector(
          ".second-part-blocks"
        );

        if (entry.isIntersecting && !is_showed) {
          blocks_second_part!.classList.add("second-part-blocks_hidden");
          vrblock__img!.classList.add("vrblock__img_animated");
          vrblock!.classList.add("vrblock_wide");

          setTimeout(function () {
            vrblock!.classList.remove("vrblock_wide");
            vrblock__img!.classList.remove("vrblock__img_animated");
            blocks_second_part!.classList.remove("second-part-blocks_hidden");

            blocks_second_part!.scrollIntoView();
            blocks_second_part!.classList.add(
              "second-part-blocks_hidden_appear"
            );
          }, 950);

          is_showed = true;
          observer.disconnect();
        }
      });
    });

    observer.observe(valuesRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="values" className="values" ref={valuesRef}>
      <div className="values__group">
        <h2 className="values__head">
          Наши ценности
          <br />и идеология компании
        </h2>
        <span className="values__text">
          Рздвигай границы возможного. Через очки мы хотим раздвинуть границы
          для человека, чтобы он мог спокойно погрузиться в метавселенную вне
          зависимости от его местонахождения. Создать и внедрить на мировом
          уровне инновационную технологию и среду для
        </span>
        <div className="values__wordBlock">
          <span className="values__word">Развития</span>,
          <span className="values__word">Роста</span>и
          <span className="values__word">Трансформации</span>
        </div>
        <div className="values__block">
          <h3 className="values__blockHead">
            Из предпринимателя
            <i className="values__blockHead_blue">в большого человека</i>
          </h3>
          <span className="values__blockAddHead">который способен</span>
          <span className="values__blockText">
            Проявлять свободу воли, стирая границы привычного, раздвигая границы
            возможного, создавать свою новую реальность и, передавая ее
            миллионам людей, влиять на судьбу поколений.
          </span>
        </div>
      </div>
    </div>
  );
}
