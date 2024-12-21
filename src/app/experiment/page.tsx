import { NextPage } from 'next'
import Testbtn from './ui/testbtn';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return(
    <div className="container flex flex-col justify-center items-center">
      <Testbtn/>
  </div>
  );
}

export default Page;