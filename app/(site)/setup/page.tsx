import Image from "next/image";

import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";

import { SetupCatType } from "@/types/setup";
import { getSetupCategory } from "@/sanity/setup";

export default async function Setup() {
    const setupCategory: SetupCatType[] = await getSetupCategory();

  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
  
<div className="flex justify-center items-center">
 
  <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
    <div role="main" className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">This Week Blogs</h1>
      <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
    </div>
    <div className="lg:flex items-stretch md:mt-12 mt-8">
      <div className="lg:w-1/2">
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div className="sm:w-1/2 relative h-96">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a  className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/DYxtCJq/img-1.png" className="w-full h-full" alt="chair" />
          </div>
         
        </div>
      
      </div>
   
    </div>
  </div>
</div>
    </main>
  );
}
