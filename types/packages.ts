import { PortableTextBlock } from "sanity";

interface featuresType {
  id: number;
  title: string;
  icon: any;
}



export type PackagesCategoryType = {
    _id: string;
    id: number;
    title: string;
    name: string;
    coklu: boolean;
  };
  
  export type PackagesType = {
    _id: string;
    id: number;
    title: string;
    name: string;
    server: string;
    price: string;
    time: string;
    features: featuresType[];
  };
  
  export type PackagesDescType = {
    _id: string;
    id: number;
    title: string;
    name: string;
    descIcon: string;
  
  };
  