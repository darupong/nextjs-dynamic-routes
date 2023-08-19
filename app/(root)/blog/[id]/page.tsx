import React, { FC } from "react";

interface prop {
  params: { name: string };
}

const page: FC<prop> = ({ params }) => {
  return <div>this is number: {params.name}</div>;
};

export default page;
