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
      <div className="tech__animateBlock">
        <img src={tech_1} className="tech__img" />
        <svg className="tech__animateLine tech__animateLine_1" width="37" height="60" viewBox="0 0 37 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 1L1.5 74"  stroke-width="2"/>
        </svg>
        <svg className="tech__animateLine tech__animateLine_2" width="2" height="43" viewBox="0 0 2 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0V43"  stroke-width="2"/>
        </svg>
        <svg className="tech__animateLine tech__animateLine_3" width="2" height="60" viewBox="0 0 2 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0V62.5"  stroke-width="2"/>
        </svg>
        <svg className="tech__animateLine tech__animateLine_4" width="152" height="2" viewBox="0 0 195 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M195 0.999997L0 1.00008"  stroke-width="2"/>
        </svg>
        <svg className="tech__animateLine tech__animateLine_5" width="35" height="60" viewBox="0 0 35 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L34 74"  stroke-width="2"/>
        </svg>
        <svg className="tech__animateLine tech__animateLine_6" width="152" height="2" viewBox="0 0 195 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M195 0.999997L0 1.00008"  stroke-width="2"/>
        </svg>
        <svg className="tech__animateLine tech__animateLine_7" width="2" height="43" viewBox="0 0 2 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0V43"  stroke-width="2"/>
        </svg>
        <svg className="tech__animateLine tech__animateLine_8" width="2" height="60" viewBox="0 0 2 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0V71"  stroke-width="2"/>
        </svg>
        <svg className="tech__animateLine tech__animateLine_9" width="2" height="43" viewBox="0 0 2 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0V43" stroke-width="2"/>
        </svg>
        <div className="tech__animateLight"></div>
      </div>
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
