import Link from "next/link";

import { ReactElement } from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const RightHeader1 = ()  => {
    return  (
        <div>
          <ul className="flex justify-end ">
              <li className="mr-6">
              <Link href={'/'}>Rewards</Link>
            </li>
            <li>
              <Link href={'/'}><FontAwesomeIcon icon={faUser} style={{ width: '20px', height: '20px' }} /></Link>
            </li>
          </ul>
      </div>
    );
}

export default RightHeader1;