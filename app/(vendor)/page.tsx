import { previewData } from "next/headers";
import { groq } from "next-sanity";

import { PreviewSuspense, DataList, PreviewDataList } from "../../components";
import { client } from "../../lib/sanity.client";

export const query = groq`
  *[_type == "vendor"] {
    ...,
  } | order(_createdAt asc)`;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              {" "}
              Loading Preview Data
            </p>
          </div>
        }
      >
        <PreviewDataList query={query} />
      </PreviewSuspense>
    );
  }

  const vendors = await client.fetch(query);

  return (
    <div className="flex justify-center items-center text-4xl">
      <DataList vendors={vendors} />
    </div>
  );
}
