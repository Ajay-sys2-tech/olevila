import Link from 'next/link';
import LeftHeader1 from './LeftHeader1';
import RightHeader2 from './RightHeader2'

const Header2 = () => {

    return (
        <div className='flex justify-between p-2 pl-20 pr-20'>
            <div className='invisible'><LeftHeader1 /></div>
            <div className='border border-red-400'>Logo</div>
            <RightHeader2 />
        </div>
    );
}


export default  Header2;
