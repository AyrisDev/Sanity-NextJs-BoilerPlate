import Image from "next/image";

import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";

import { SetupType } from "@/types/setup";
import { SetupCatType } from "@/types/setup";

import { getSetup } from "@/sanity/setup";
import { getSetupCategory } from "@/sanity/setup";

import CatCard from "../components/setup/catCard";
export default async function Setup() {
  const setupCat: SetupCatType[] = await getSetupCategory();
  return (
    <main className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div
            role="main"
            className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
              This Week Blogs
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
              If you're looking for random paragraphs, you've come to the right
              place. When a random word or a random sentence isn't quite enough
            </p>
          </div>
          <div className="flex flex-row gap-2">
            {setupCat &&
              setupCat.map((data: SetupCatType) => <CatCard data={data} />)}
          </div>
        </div>
      </div>
    </main>
  );
}
