import { useEffect } from "react";

const InFlightScript = () => {
  useEffect(() => {
    if (window.InFlight) {
      console.log("Inflight script loaded successfully");
      // window.InFlight.initService(/* parameters */);
    } else {
      console.error("InFlight script not loaded successfully.");
    }
  }, []);

  return null;
};

export default InFlightScript;
