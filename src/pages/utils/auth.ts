export type TSession = {
  email: string;
  firstName: string;
  gender: string;
  id: string;
  image: string;
  lastName: string;
  refreshToken: string;
  token: string;
  username: string;
};

export const getSession = () => {
  const session = localStorage.getItem("session");
  return JSON.parse(session || "{}") as TSession | null;
};

export const setSession = (sessionData: TSession) => {
  localStorage.setItem("session", JSON.stringify(sessionData));
};
