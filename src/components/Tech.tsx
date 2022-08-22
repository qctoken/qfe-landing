import tech_1 from "../images/tech_1.png";
import tech_1_mob from "../images/tech_1_mob.png";

export function Tech() {
  return (
    <div id="tech" className="tech">
      <h2 className="tech__head">
        Технологии,
        <br />
        которые мы используем
      </h2>
      <img src={tech_1} className="tech__img" />
      <img src={tech_1_mob} className="tech__img tech__img_mob" />
      <div className="tech__block">
        <div className="tech__tab">QCT.info</div>
        <div className="tech__console">
          <div className="tech__lineNumb">
            1 2 3 4 5 6 7 8 9 10 11 12 13 14 15{" "}
            <div className="tech__lineNumb_mob">16 17 18 19 20 21</div>
          </div>
          <div className="tech__consoleBlockText">
            <span className="tech__consoleText">
              type <i className="tech__consoleText_blue">BackEnd</i> struct{" "}
              &#123;
                <i className="tech__consoleText_margin">
                  python, FastAPI, postgresql, BlockChain, S3 compatible storage
                </i>
                &#125;
            </span>
            <span className="tech__consoleText">
              type <i className="tech__consoleText_blue">Auth</i> struct{" "}
              &#123;
                <i className="tech__consoleText_margin">
                  keycloack, JWT, Oauth2
                </i>
                &#125;
            </span>
            <span className="tech__consoleText">
              type <i className="tech__consoleText_blue">FrontEnd</i> struct{" "}
              &#123;
                <i className="tech__consoleText_margin">
                  react, emotion, <br />
                  self components library, recoil
                </i>
                &#125;
            </span>
            <span className="tech__consoleText">
              type <i className="tech__consoleText_blue">Payemtns</i> struct{" "}
              &#123;
                <i className="tech__consoleText_margin">
                  telegram bot, stripe, cloudpayment, ...etc
                </i>
                &#125;
            </span>
            <span className="tech__consoleText">
              type <i className="tech__consoleText_blue">Testing</i> struct{" "}
              &#123;
                <i className="tech__consoleText_margin">
                  Pytest, jest, <br />
                  robot framework, selenium{" "}
                </i>
                &#125;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
