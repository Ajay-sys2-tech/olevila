import Link from 'next/link';
import LeftHeader1 from './LeftHeader1';
import RightHeader1 from './RightHeader1'

const Header1 = () => {

    return ( 
        <div className="bg-indigo-50  flex justify-around p-2 pl-20 pr-20">
        <LeftHeader1 />
        <div className="flex-1 border border-gray-400" >Promotion Text</div>
        <RightHeader1 />
    </div>
    );
}


export default  Header1;
