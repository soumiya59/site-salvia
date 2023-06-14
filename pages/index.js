import Wrapper from "../layout/wrapper";
import Insurance from "./home/insurance";
import Test from "./home/Test";
import dynamic from 'next/dynamic';

const MainRoot = () => {
const DynamicComponentWithTranslation = dynamic(() => import('./home/Test.js'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Disable server-side rendering for the dynamic component
});
  return (
//     <>
       <DynamicComponentWithTranslation /> 
      // <Test />
    // <Wrapper>
    //   {/* <Insurance /> */}
    // </Wrapper>
  );
};

export default MainRoot;

