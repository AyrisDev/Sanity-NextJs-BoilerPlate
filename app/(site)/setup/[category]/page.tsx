// app/projects/[project]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "@/public/project.png";

import { getSetupByCategory } from "@/sanity/setup";
import { SetupType } from "@/types/setup";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.category;
  const setup: SetupType = await getSetupByCategory(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="flex flex-row mt-8 gap-2 leading-7 text-zinc-400">
        {setup &&
          setup.map((data: SetupType) => (
            <Link href={`/setup/${slug}/${data.slug}`}>
              <div className="relative h-64 border-2">
                <div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-500/40 text-center">
                    <h2 className="text-white">{data.title}</h2>
                  </div>
                </div>
                <img src={data.image} className="w-full h-full" alt="chair" />
              </div>
            </Link>
          ))}

        {/*     <PortableText value={setup.content} /> */}
      </div>
    </main>
  );
}
