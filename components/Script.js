// components/MyComponent.js

import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

const ScriptInflight = () => {
  useEffect(() => {
    const handleScriptLoad = () => {
      const scriptObject = window.Inflight;
      console.log(scriptObject);
    };

    const script = document.createElement("script");
    script.src = "path/to/your/script.js";
    script.async = true;
    script.onload = handleScriptLoad;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Head>
        <script src="https://emu.portalworks.io/inflight.js" async />
      </Head>
    </div>
  );
};

export default ScriptInflight;
