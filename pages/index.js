import Script from "next/script";
import "/app/globals.css";
import InFlightScript from "../components/InFlightScript";
import Link from "next/link";

export default function Home() {
  const linkStyle = {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
    marginRight: "10px",
  };

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
        <Link href={`/en-us/component1/app`} legacyBehavior>
          <a style={linkStyle}>1. Component 1</a>
        </Link>
        <Link href={`/en-us/component2/app`} legacyBehavior>
          <a style={linkStyle}>2. Component 2</a>
        </Link>
      </div>
    </div>
  );
}
