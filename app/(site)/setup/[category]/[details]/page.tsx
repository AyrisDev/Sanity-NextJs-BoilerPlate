// app/projects/[project]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "@/public/project.png";

import { getSetupSingle } from "@/sanity/setup";
import { SetupType } from "@/types/setup";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.details;
  const setup: SetupType = await getSetupSingle(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <PortableText value={setup.content} />
    </main>
  );
}
