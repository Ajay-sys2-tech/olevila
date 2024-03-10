import Link from "next/link";
import { ReactElement } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RightHeader2 = ()  => {
    return  (
      <div >
          <ul className="flex justify-between  ">
            <li>
                <Link href={'/'} className="flex items-center justify-center mr-6 ">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: '20px', height: '20px' }} />
                    <span className="ml-2 pb-1 text-sm">Search</span>
                    <hr className="border-t-2 border-gray-500 opacity-0 hover:opacity-100"></hr>
                </Link>
                
            </li>
            <li className="flex ">
                <Link href={'/'} className="flex items-center justify-center mr-6">
                    <FontAwesomeIcon icon={faHeart} style={{ width: '20px', height: '20px' }}  />
                    <span className="ml-2 pb-1 text-sm">Wishlist</span> 
                </Link>
            </li>
            <li className="flex ">
              <Link href={'/'}><FontAwesomeIcon icon={faCartShopping} style={{ width: '20px', height: '20px' }}  /></Link>
            </li>
          </ul>
      </div>
    );
}

export default RightHeader2;