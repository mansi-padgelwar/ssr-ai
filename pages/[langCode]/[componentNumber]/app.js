import axios from "axios";
import { useRouter } from "next/router";
import "/app/globals.css";
import Component1 from "../../../components/Component1";
import Component2 from "../../../components/Component2";

const App = ({ menu }) => {
  const router = useRouter();
  const { componentNumber } = router.query;

  return (
    <div>
      <div className="flex justify-center items-center h-screen m-8 ">
        {componentNumber === "component1" ? (
          <Component1 menu={menu} />
        ) : componentNumber === "component2" ? (
          <Component2 menu={menu} />
        ) : (
          <div>Not found</div>
        )}
      </div>
    </div>
  );
};

export default App;

export async function getServerSideProps({ query }) {
  try {
    const apiUrl = process.env.API_URL;
    const response = await axios.get(apiUrl);
    const menuData = response.data;

    return {
      props: {
        menu: menuData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        menu: [],
        apiUrl: apiUrl,
      },
    };
  }
}
