import Image from "next/image";
import urlFor from "../lib/urlFor";

type Props = {
  vendors: Vendor[];
};

export default function DataList({ vendors }: Props) {
  return (
    <div>
      <div className="flex justify-between w-[1500px] mt-10 items-center">
        <div className="flex items-start flex-col">
          <div className="w-fit whitespace-nowrap -mt-[1px] font-semibold text-3xl">
            Data Warehouse Centre
          </div>
        </div>
        <div className="flex items-start gap-4 relative w-fit">
          <a href="http://localhost:3000/studio">
            <button className="rounded text-xl border p-3 border-blue-700 ">
              Create New Data
            </button>
          </a>
        </div>
      </div>
      <div>
        <div className="relative flex mt-5 items-center rounded h-14 w-[1500px] bg-gray-400 border-2 pr-6 text-xl font-extralight">
          <div className="flex items-center self-stretch gap-[24px] p-4 w-[400px]">
            <div className="w-fit whitespace-nowrap leading-4 font-semibold text-2xl">
              Shop Name
            </div>
          </div>

          <div className="flex items-center self-stretch gap-4 py-5 pb-4 w-[300px]">
            <div className="w-fit whitespace-nowrap leading-4 mt-[-1px]">
              Vendor Name
            </div>
          </div>
          <div className="flex items-center self-stretch gap-4 py-5 pb-4 w-[300px]">
            <div className="w-fit whitespace-nowrap leading-4 mt-[-1px]">
              ID
            </div>
          </div>
          <div className="flex items-center self-stretch gap-4 py-5 pb-4 w-[300px]">
            <div className="w-fit whitespace-nowrap leading-4 mt-[-1px]">
              Price
            </div>
          </div>

          <div className="flex items-end self-stretch gap-4 py-5 pb-4 w-[200px]">
            <div className="leading-4 w-fit whitespace-nowrap mt-[-1px]">
              Ratings
            </div>
          </div>
          <div className="self-stretch flex h-14 min-w-[92px] "></div>
        </div>

        {/* {vendors.map((vendor) => (
          <div className="flex flex-col group cursor-pointer" key={vendor.id}>
            <div className="relative w-96 h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image
                className="object-cover object-left lg:object-center"
                src={urlFor(vendor.mainImage).url()}
                alt={vendor.shopname}
                fill
              />
              <div>
                <div className="absolute bottom-0 bg-opacity-20 bg-black rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <p className="font-bold">{vendor.shopname}</p>
                  <p>
                    {new Date(vendor._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
}
