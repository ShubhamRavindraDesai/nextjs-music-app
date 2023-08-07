import { getApiDocs } from "@/lib/swagger";
import ReactSwagger from "./react-swagger";
import React from "react";

export default async function IndexPage(): Promise<JSX.Element> {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
}
