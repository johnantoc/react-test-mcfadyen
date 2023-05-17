import Image from "next/image";
import { FunctionComponent } from "react";

import { navItems } from "@/utils/constants";

const Header: FunctionComponent = () => {
  return (
    <header className="sticky z-[99999] bg-white top-0 flex grow-0 min-w-full min-h-[60px] flex-row items-center px-4 lg:px-10">
      <div className="text-black uppercase text-lg lg:text-lg whitespace-nowrap w-1/2 lg:w-1/5">
        My Company.com
      </div>
      <nav className="hidden lg:block w-0 lg:w-3/5">
        <ul className="flex flex-row gap-x-[16px] gap-y-[4px] flex-wrap justify-center items-center">
          {navItems.map((listItem) => (
            <li key={listItem} className="text-black uppercase text-sm">
              {listItem}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-row gap-[6px] w-1/2 lg:w-1/5 justify-end">
        <Image
          src="/assets/images/Search.svg"
          width={24}
          height={24}
          alt="search"
        />
        <Image src="/assets/images/Bag.svg" width={24} height={24} alt="bag" />
        <Image
          src="/assets/images/Account.svg"
          width={24}
          height={24}
          alt="user"
          className="hidden lg:block"
        />
        <Image
          src="/assets/images/Nav.svg"
          width={24}
          height={24}
          alt="nav"
          className="block lg:hidden"
        />
      </div>
    </header>
  );
};

export default Header;
