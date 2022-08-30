import "./style/reset.css";
import "./style/fonts.css";
import "./style/assembly.css";

import { useRef } from "react";
import { Bali } from "./components/Bali";
import { Command } from "./components/Command";
import { DbBlock } from "./components/DbBlock";
import { Header } from "./components/Header";
import { Job } from "./components/Job";
import { Partner } from "./components/Partner";
import { RoadMap } from "./components/RoadMap";
import { Round } from "./components/Round";
import { ScrollLine } from "./components/ScrollLine";
import { StepBlock } from "./components/StepBlock";
import { Tech } from "./components/Tech";
import { Values } from "./components/Values";
import { VirtualWorld } from "./components/VirtualWorld";
import { VrBlock } from "./components/VrBlock";

type Props = {
  startLink?: string;
  buyQCTLink?: string;
};

function App({ startLink, buyQCTLink }: Props) {
  const secondPartRef = useRef<HTMLDivElement>(null);

  return (
    <div className="landing_root">
      <Header startLink={startLink} buyQCTLink={buyQCTLink} />
      <ScrollLine />
      <StepBlock />
      <RoadMap />
      <DbBlock />
      <div className="back_black">
        <VrBlock />
        <div className="second-part-blocks" ref={secondPartRef}>
          <Values secondPartRef={secondPartRef} />
          <Bali />
          <VirtualWorld />
          <Command />
          <Tech />
          <Job />
          <Partner />
          <Round />
        </div>
      </div>
    </div>
  );
}

export default App;