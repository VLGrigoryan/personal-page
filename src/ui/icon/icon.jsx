import React from "react";

import FeatherIcon from "./FeatherIcon";
import FeatherWhiteIcon from "./FeatherWhiteIcon";
import ContactIcon from "./ContactIcon";
import AboutMeIcon from "./AboutMeIcon";

const Icon = ({ type, color, size, isActive, fillInactive }) => {

  const iconProps = {
    size: size || 24,
    color: color || "#8585AD",
    isActive: isActive || false,
    fillInactive: "#8295a1",

  };

  switch (type) {
    case "Feather":
      return <FeatherIcon {...iconProps} />;
    case "FeatherWhite":
      return <FeatherWhiteIcon {...iconProps} />;
    case "Contact":
      return <ContactIcon {...iconProps} />;
    case "AboutMe":
      return <AboutMeIcon {...iconProps} />;
     default:
      return null;  
  }
};

export default Icon;
