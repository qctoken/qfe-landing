import round_sum_1 from "../images/round_sum_1.png";
import round_sum_2 from "../images/round_sum_2.png";
import round_sum_3 from "../images/round_sum_3.png";
import round from "../images/round.png";

export function Round() {
  return (
    <div id="round" className="round">
      <div className="round__content">
        <div className="round__group">
          <div className="round__card">
            <span className="round__name">Pre Seed Round</span>
            <img src={round_sum_1} className="round__sum" />
            <span className="round__deskr round__deskr_left">
              Open 100 000 $
            </span>
            <span className="round__deskr round__deskr_right">200 000 QCT</span>
          </div>
          <div className="round__card">
            <span className="round__name round__name_blue">Seed Round</span>
            <img src={round_sum_2} className="round__sum" />
            <span className="round__deskr round__deskr_left">
              Open 368 900 $
            </span>
            <span className="round__deskr round__deskr_right">527 000 QCT</span>
          </div>
          <div className="round__card">
            <span className="round__name">Round A - Angel</span>
            <img src={round_sum_3} className="round__sum" />
            <span className="round__deskr round__deskr_left">
              Open 500 000 $
            </span>
            <span className="round__deskr round__deskr_right">500 000 QCT</span>
          </div>
        </div>
        <h4 className="round__text">
          Как{" "}
          <i className="round__text_blue">встроить прямо сейчас 3D-маркетинг</i>{" "}
          с многоуровневой монетизацией вашего продукта
        </h4>
        <a href="#" className="round__button">
          Жми и узнай подробнее
        </a>
        <img src={round} className="round__img" />
      </div>
    </div>
  );
}
