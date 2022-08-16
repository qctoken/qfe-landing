import two_dblock_hover from "../images/2dblock_hover.png";
import two_dblock from "../images/2dblock.png";

export function DbBlock() {
  return (
    <div id="dblock" className="dblock">
      <h2 className="dblock__head">Переходи из 2D...</h2>
      <span className="dblock__text">
        2D онлайн обучение, это алый океан, где один курс похож на другой, а
        студенты получают вместо навыков - знания, которые складируются на
        полочках их мозга не давая ни успешных кейсов вам, ни результатов им
        самим. Но выход есть!
      </span>
      <img src={two_dblock_hover} className="dblock__img dblock__img_light" />
      <img src={two_dblock} className="dblock__img" />
    </div>
  );
}
