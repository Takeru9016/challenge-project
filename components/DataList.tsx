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
          <a href="https://datawarehousecentre.vercel.app/studio">
            <button className="rounded text-xl border p-3 border-blue-700 ">
              Create New Data
            </button>
          </a>
        </div>
      </div>
      <div>
        <div className="relative flex mt-5 items-center rounded h-14 w-[1500px] bg-gray-400 border-2 pr-6 text-xl font-extralight">
          <div className="flex items-center self-stretch gap-[24px] p-4 w-[400px]">
            <div className="w-fit whitespace-nowrap leading-4 text-2xl">
              Image
            </div>
          </div>

          <div className="flex items-center self-stretch gap-4 py-5 pb-4 w-[300px]">
            <div className="w-fit whitespace-nowrap leading-4 mt-[-1px]">
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
          <div className="self-stretch flex min-w-[92px] "></div>
        </div>

        {vendors.map((vendor) => (
          <div
            className="relative flex mt-5 items-center rounded h-14 w-[1500px] border-2 pr-6 text-xl font-extralight"
            key={vendor._id}
          >
            <div className="flex items-center self-stretch gap-[24px] p-4 w-[400px]">
              <div className="w-fit whitespace-nowrap leading-4 text-2xl">
                {vendor.shopname}
              </div>
            </div>

            <div className="flex items-center self-stretch gap-4 py-5 pb-4 w-[300px]">
              <div className="w-fit whitespace-nowrap leading-4 mt-[-1px]">
                {vendor.shopname}
              </div>
            </div>
            <div className="flex items-center self-stretch gap-4 py-5 pb-4 w-[300px]">
              <div className="w-fit whitespace-nowrap leading-4 mt-[-1px]">
                {vendor.name}
              </div>
            </div>
            <div className="flex items-center self-stretch gap-4 py-5 pb-4 w-[300px]">
              <div className="w-fit whitespace-nowrap leading-4 mt-[-1px]">
                {vendor.id}
              </div>
            </div>
            <div className="flex items-center self-stretch gap-4 py-5 pb-4 w-[300px]">
              <div className="w-fit whitespace-nowrap leading-4 mt-[-1px]">
                {vendor.price}
              </div>
            </div>

            <div className="flex items-end self-stretch gap-4 py-5 pb-4 w-[200px]">
              <div className="leading-4 w-fit whitespace-nowrap mt-[-1px]">
                {vendor.ratings}
              </div>
            </div>
            <div className="flex items-start gap-4 relative w-fit">
              <p className="text-sm hover:underline">Read More</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
