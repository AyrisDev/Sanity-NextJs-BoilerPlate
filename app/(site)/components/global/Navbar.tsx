import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";


import { getMenu, getSettings } from "@/sanity/siteSettings";
import type { MenuType, SettingsType } from "@/types/siteSettings";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export default async function Navbar() {



  const menu: MenuType[] = await getMenu();
  const settings: SettingsType[] = await getSettings();

  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 md:mb-28 mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src={settings[0].logo} width={200} height={100} alt="logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-8">
            {menu &&
              menu
              
              .map((data) => (

data.type !== "button" ?
<li key={data.id}>               
<Link
  href={data.url}
  className="hover:text-purple-400 duration-300">
  {data.title}
</Link>  
</li>
:
<div className="" key={data.id}>

<div className="dropdown inline-block relative">
  <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
    <span className="mr-1"> {data.title}</span>
 </button>
  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
    {data.buttonLinks.map((button) => (
      <Link href={button.buttonUrl} className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer">{button.buttonText} 
      
      </Link>
    ))}
    
   
 
  </ul>
</div>

</div> 
              ))}

          </ul>
        </nav>
      </div>
    </header>
  );
}
