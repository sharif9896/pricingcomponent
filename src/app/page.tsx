import type { NextPage } from 'next';
import Pricing from '../components/pricing';
import Headertext from '@/components/Headertext';


const Home: NextPage = () => {
  return (
    <div>
      <Headertext></Headertext>
      <Pricing />
    </div>
  );
};

export default Home;
