import { getSession } from "@/pages/utils/auth";
import { useRouter } from "next/router";
import { FC, ReactElement, ReactNode, useEffect } from "react";

type TAuthGuardProps = {
  children: ReactNode;
};

export const AuthGuard: FC<TAuthGuardProps> = props => {
  const { children } = props;
  const router = useRouter();

  const session = getSession();
  const isLoggedIn = Object.keys(session || {}).length > 0;

  useEffect(() => {
    if (isLoggedIn && router.pathname !== "/login") {
      router.push("/protected");
    }

    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router, isLoggedIn]);

  return children;
};
