// pages/[langCode]/[componentNumber]/app.js

import axios from 'axios';
import { useRouter } from 'next/router';
import "/app/globals.css"
import Component1 from '../../../components/Component1';
import Component2 from '../../../components/Component2';
import Image from 'next/image';

const App = ({ products }) => {
  const router = useRouter();
  const { langCode, componentNumber } = router.query;

  return (
    <div>
       <div className="flex justify-center items-center h-screen m-8 ">
      {componentNumber === "component1" ? <Component1 langCode={langCode} componentNumber={componentNumber} products={products}/> : (componentNumber === "component2" ?  <Component2 langCode={langCode} componentNumber={componentNumber} products={products}/> : <div>Not found</div>)}
    </div>
    </div>
  );
};

export default App;

export async function getServerSideProps({ query }) {
    try {
      const { langCode, componentNumber } = query;
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const products = response.data;
  
      return {
        props: {
          products,
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          products: [],
        },
      };
    }
  }
  
