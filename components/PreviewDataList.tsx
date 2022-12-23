"use client";

import { usePreview } from "../lib/sanity.preview";
import DataList from "./DataList";

type Props = {
  query: string;
};

export default function PreviewDataList({ query }: Props) {
  const vendors = usePreview(null, query);
  return <DataList vendors={vendors} />;
}
