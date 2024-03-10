import Link from "next/link";
const LeftHeader1 = () => {
  return (
      <div className="flex-1">
          <ul className="flex">
              <li className="mr-6">
                  <Link href={'/'}>Shop</Link>
              </li>
              <li>
                  <Link href={'/'}>Our Impact</Link>
              </li>
          </ul>
      </div>
  );
}

export default LeftHeader1;