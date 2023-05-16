import Image from "next/image";

import { navItems } from "../../utils/constants";

const Header = () => {
  return (
    <header className="sticky top-0 flex min-w-full min-h-[60px] flex-row justify-between items-center px-10">
      <div className="text-black uppercase text-xl">My Company.com</div>
      <nav>
        <ul className="flex flex-row gap-[8px]">
          {navItems.map((listItem) => (
            <li key={listItem} className="text-black uppercase text-sm">
              {listItem}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-row gap-[6px]">
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
        />
      </div>
    </header>
  );
};

export default Header;
