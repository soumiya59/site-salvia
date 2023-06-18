import Wrapper from "../layout/wrapper";
import Insurance from "./home/insurance";
import dynamic from 'next/dynamic';

const MainRoot = () => {
const DynamicInsurance = dynamic(() => import('./home/insurance'), {
  loading: () => <div>Loading...</div>,
  ssr: true, // Disable server-side rendering for the dynamic component
});
  return (
    <Wrapper>
      {/* <Insurance /> */}
      <DynamicInsurance /> 
    </Wrapper>
  );
};

export default MainRoot;

