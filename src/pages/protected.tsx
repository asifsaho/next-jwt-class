import { getSession, removeSession } from "@/pages/utils/auth";
import { useRouter } from "next/router";
import { FC } from "react";

const Protected: FC = () => {
  const router = useRouter();
  const onLogoutHandler = () => {
    removeSession();
    router.replace("/login");
  };

  return (
    <div>
      <button onClick={onLogoutHandler}>Logout</button>
      <pre>{JSON.stringify(getSession(), null, 2)}</pre>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident molestiae voluptates hic sed doloribus ab maxime corporis tempora tenetur
      laborum quae voluptatum sequi voluptatem delectus amet, culpa, quia et assumenda!
    </div>
  );
};

export default Protected;
