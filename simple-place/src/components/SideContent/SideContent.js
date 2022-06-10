import React from "react";
import { SideContentSection } from "./SideContent-styles";
import Recommended from "../Recommended/Recommended";

const SideContent = () => {
  return (
    <SideContentSection>
      <Recommended />
    </SideContentSection>
  );
};

export default SideContent;
