import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const query = groq`*[_type == "vendor" && slug.current == $slug][0] {
        ...,
      }`;

  const vendor: Vendor = await client.fetch(query, { slug });

  console.log(vendor);

  return(
    <div>
        {vendor.address}
        {vendor.description}
        {vendor.id}
        {vendor.name}
        {vendor.shopname}
        {vendor.slug}
        {vendor.mainImage}
        {vendor.measurement}
        {vendor.price}
        {vendor.ratings}
    </div>
  );
}

export default Post;
