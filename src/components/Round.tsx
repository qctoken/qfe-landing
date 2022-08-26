import round_sum_1 from "../images/round_sum_1.png";
import round_sum_2 from "../images/round_sum_2.png";
import round_sum_3 from "../images/round_sum_3.png";
import round_sum_1_before from "../images/round_sum_1_before.png";
import round_sum_2_before from "../images/round_sum_2_before.png";
import round_sum_3_before from "../images/round_sum_3_before.png";
import round from "../images/round.png";

import { useRef, useEffect, useState } from "react";

export function Round() {

  const RoundBlockRef = useRef<HTMLDivElement>(null);
  const [isRoundAnimated, setIsRoundAnimated] = useState(false);

  useEffect(() => {
    let is_showed = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !is_showed) {
          setIsRoundAnimated(true);

          is_showed = true;
          observer.disconnect();
        }
      });
    });

    observer.observe(RoundBlockRef.current!);

    return () => {
      observer.disconnect;
    };
  }, []);
  return (
    <div id="round" className="round">
      <div className="round__content">
        <div className="round__group">
          <div className="round__card">
            <span className="round__name">Pre Seed Round</span>
            <img src={round_sum_1} className="round__sum round__sum_hover" />
            <img src={round_sum_1_before} className="round__sum" />
            <span className="round__deskr round__deskr_left">
              Open 100 000 $
            </span>
            <span className="round__deskr round__deskr_right">200 000 QCT</span>
          </div>
          <div className="round__card">
            <span className="round__name round__name_blue">Seed Round</span>
            <img src={round_sum_2} className="round__sum round__sum_hover" />
            <img src={round_sum_2_before} className="round__sum" />
            <span className="round__deskr round__deskr_left">
              Open 368 900 $
            </span>
            <span className="round__deskr round__deskr_right">527 000 QCT</span>
          </div>
          <div className="round__card">
            <span className="round__name">Round A - Angel</span>
            <img src={round_sum_3} className="round__sum round__sum_hover" />
            <img src={round_sum_3_before} className="round__sum" />
            <span className="round__deskr round__deskr_left">
              Open 500 000 $
            </span>
            <span className="round__deskr round__deskr_right">500 000 QCT</span>
          </div>
        </div>
        <h4 ref={RoundBlockRef} className="round__text">
          Как{" "}
          <i className="round__text_blue">встроить прямо сейчас 3D-маркетинг</i>{" "}
          с многоуровневой монетизацией вашего продукта
        </h4>
        <a href="#" className="round__button">
          Жми и узнай подробнее
        </a>
        <img id="round__start" src={round} className={`round__img ${isRoundAnimated ? "round__img_animated" : ""}`} />
      </div>
    </div>
  );
}
