import vr_gl from "../images/vr_gl.png";

export function VrBlock() {
  return (
    <div id="vrblock" className="vrblock">
      <h2 className="vrblock__head">
        Погружение
        <br />в метавселенную
      </h2>
      <h2 className="vrblock__head vrblock__head_mob">В метавселенную</h2>
      <span className="vrblock__text">
        Создавайте свои продукты в метавселенной, в которой за счет полного
        погружения и игровых механик обучения у ваших студентов многократно
        возрастает способность усвоить весь материал.
        <br />
        За счет новизны этого рынка вы будете первыми, кто возглавит свое
        направление в этом голубом океане.
      </span>
      <div className="vrblock__hrLine"></div>
      <div className="vrblock__backLight"></div>
      <div className="animation">
        <div className="animation__top">
          <span className="vrblock__description">
            Предоставим обородувание - При покупке вашего продукта ваши ученики
            получают VR очки в подарок и в один клик погружаются в
            метавселенную, личный кабинет, обучающую платформу
          </span>
          <h3 className="vrblock__vrHead">
            Со встроенным программным обеспечением в
          </h3>
          <h1 className="vrblock__vrName">VR ОЧКАХ</h1>
        </div>
        <div className="animation__bottom">
          <div className="vrblock__imgBlock">
            <img src={vr_gl} className="vrblock__img" />
          </div>
          <span className="vrblock_expl">
            Поставка очков планируется 11.12.2024
          </span>
        </div>
      </div>
    </div>
  );
}
