import Script from "next/script";
import "/app/globals.css";
import InFlightScript from "../components/InFlightScript";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <Script src="http://api.inflightpanasonic.aero/inflight.js" />
      <InFlightScript /> */}
      <h1 className="text-4xl text-blue text-center m-32">Hello World</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Link
          href="https://demo-ssr-app-eta.vercel.app/en-us/halloween/app"
          legacyBehavior
        >
          <a>1. Halloween Page</a>
        </Link>
        <Link
          href="https://demo-ssr-app-eta.vercel.app/en-us/diwali/app"
          legacyBehavior
        >
          <a>2. Diwali Page</a>
        </Link>
      </div>
    </div>
  );
}
