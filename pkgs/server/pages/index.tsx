import dynamic from "next/dynamic";

const Diagram = dynamic(() => import("../client/Diagram"), { ssr: false });

export default function Home({ schema, dmmf }) {
  return (
    <>
      <div>{JSON.stringify(schema, null, 4)}</div>
      <div>{JSON.stringify(dmmf, null, 4)}</div>
    </>
  );
}

import { getDMMF, getConfig, formatSchema } from "@prisma/sdk";
import * as fs from "fs";
import * as path from "path";
const schemaPath = path.resolve(process.cwd(), "schema.prisma");

export async function getServerSideProps() {
  // const formatedSchemaString = await formatSchema({schemaPath});
  const schema = fs.readFileSync(schemaPath, "utf-8");
  const dmmf = await getDMMF({ datamodel: schema });
  console.dir(dmmf.datamodel.models[1].fields);
  return {
    props: {
      schema,
      dmmf,
    },
  };
}
