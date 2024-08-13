import { getSession } from "@/pages/utils/auth";
import { useRouter } from "next/router";
import { FC, ReactElement, ReactNode, useEffect, useMemo } from "react";

type TAuthGuardProps = {
  children: ReactNode;
};

export const AuthGuard: FC<TAuthGuardProps> = props => {
  const { children } = props;
  const router = useRouter();

  const session = getSession();
  const isLoggedIn = Object.keys(session || {}).length > 0;
  const publicRoutes = useMemo(() => ["/login"], []);

  useEffect(() => {
    if (isLoggedIn && !publicRoutes.includes(router.pathname)) {
      router.push("/protected");
    }

    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router, isLoggedIn, publicRoutes]);

  return children;
};
