import virualW from "../images/virualW.png";

export function VirtualWorld() {
  return (
    <div className="virtualWorld virtualWorld_mob">
      <div className="virtualWorld__content">
        <h2 className="virtualWorld__head">
          Проводите курсы в виртуальном мире
        </h2>
        <span className="virtualWorld__text">
          Создайте полное погружение своих учеников в свои обучающие продукты за
          счет технологии полного присутствия VR и метавселенной. Теперь
          обучение настолько интересное и захватывающее, что его хочется
          проходить снова и снова, а пройденный материал слой за слоем
          откладывается на сознании ваших студентов давая им твердый фундамент
          для их дальнейшей трудовой деятельности.
        </span>
        <img src={virualW} className="virtualWorld__img" />
      </div>
    </div>
  );
}
