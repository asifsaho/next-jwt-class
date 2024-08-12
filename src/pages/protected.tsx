"use client";

import { getSession } from "@/pages/utils/auth";
import { FC } from "react";

const Protected: FC = props => {
  const {} = props;
  return (
    <div>
      <pre>{JSON.stringify(getSession(), null, 2)}</pre>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident molestiae voluptates hic sed doloribus ab maxime corporis tempora tenetur
      laborum quae voluptatum sequi voluptatem delectus amet, culpa, quia et assumenda!
    </div>
  );
};

export default Protected;
