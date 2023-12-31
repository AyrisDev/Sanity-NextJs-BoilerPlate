export type SetupType = {
  _id: string;
  id: number;
  title: string;
  name: string;
  server: string;
  image: string;
  description: string;
  downloadLink: string;
  content: PortableTextBlock[];
};

export type SetupCatType = {
  _id: string;
  id: number;
  title: string;
  name: string;
  image: string;
};
