import roadmap from "../images/roadmap.svg";

export function RoadMap() {
  return (
    <div id="roadmap" className="roadmap">
      <h2 className="roadmap__head">
        Road-Map закрытие инвестиционных раундов
      </h2>
      <div className="roadmap__scroll">
        <img className="roadmap__img" src={roadmap} />
      </div>
    </div>
  );
}
