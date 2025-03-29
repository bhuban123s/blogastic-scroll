import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { useLocation } from "react-router-dom";


const tagManagerArgs = {
  gtmId: "GTM-DJXRBJWV", 
};

const GTMTracker = () => {
  const location = useLocation();

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: "page_view",
        pagePath: location.pathname,
      },
    });
  }, [location]);

  return null;
};

export default GTMTracker;
