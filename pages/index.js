import "/app/globals.css";
import InFlightScript from "../components/InFlightScript";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScriptInflight from "../components/Script";

export default function Home() {
  const linkStyle = {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
    marginRight: "10px",
  };

  const [metadata, setMetadata] = useState(null);

  // Your component
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getMetadata");
        const metadataData = await response.json();
        console.log("metadatData", metadataData);
        setMetadata(metadataData);
      } catch (error) {
        console.log("error in fetching data");
      }
    };

    //  fetchData();
  }, []);

  return (
    <div>
      <ScriptInflight />
      {/* <InFlightScript /> */}
      {/* {metadata ? (
        <pre>{JSON.stringify(metadata, null, 2)}</pre>
      ) : (
        <p>Loading metadata...</p>
      )} */}
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
