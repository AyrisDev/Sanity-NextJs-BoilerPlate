"use client"
import React from 'react'
import { useState } from 'react';

import { PackagesCategoryType } from "@/types/packages";
import { PackagesType } from "@/types/packages";



const PricingTable = ({category, packages } : any ) => {

const [isActive, setActive] = useState("Forza Server")

console.log(isActive + "active")
  return (

  
    <section className="mt-20 ">
    <div className="max-w-2xl p-1.5 mx-auto overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-800">
          <div className="grid gap-3 md:grid-cols-3">
            {category &&
            category.map((data: PackagesCategoryType) => (
              <button onClick={() => setActive(data.title)} key={data.id} className={
                isActive !== data.title
                  ? "flex items-center justify-center px-3 py-2 font-medium text-gray-800 uppercase transition-colors duration-300 transform bg-transparent rounded-lg focus:outline-none dark:text-gray-200 hover:bg-gray-600 hover:text-gray-200 "
                  : "flex items-center justify-center px-3 py-2 font-medium uppercase transition-colors duration-300 transform bg-gray-600 rounded-lg focus:outline-none text-gray-200  hover:bg-gray-200 hover:text-gray-800"
              }
            >
              <span className="mx-1">{data.title}</span>             
              </button>
            ))}
         
          </div>
      </div>

        <div className="flex flex-col items-center justify-center mt-16 space-y-6 md:items-end md:-mx-5 md:space-y-0 md:flex-row">
        {packages &&
            packages.map((data:PackagesType) => (

                (data.server === isActive && 
            <div className="w-full px-6 py-4 transition-colors duration-300 transform rounded-lg mx-2 bg-gray-50 " key={data.id}>
                <div className="text-center">
                    <p className="text-4xl font-semibold text-gray-800 dark:text-gray-100">{data.title}</p>
            <div className='flex flex-row items-center justify-center'>
            <h4 className="mt-2 text-xl font-semibold text-gray-800 dark:text-gray-100">{data.price}</h4>
            <p className="mt-4 text-gray-500 dark:text-gray-300">{data.time}</p>
            </div>
                  
                  
                </div>

                <div className="mt-8 space-y-8">
                {data.features &&
            data.features.map((features) => (
                    <div className="flex items-center" key={data.title}>
                     
<img src={features.icon} className="w-8 h-8" />
                        <span className="mx-4 text-gray-700 dark:text-gray-300">{features.title}</span>
                    </div> 
  ))}
                </div>

                <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Choose Basic
                </button>
            </div> )
   ))}
      

        </div>
        </section>

  )
}

export default PricingTable



