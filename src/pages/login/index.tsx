import { setSession } from "@/pages/utils/auth";
import { axios } from "@/utils/axios.instance";
import { useRouter } from "next/router";
import { ChangeEvent, FC, useCallback, useState } from "react";

const LoginPage: FC = () => {
  const [formValues, setFormValues] = useState({ username: "emilys", password: "emilyspass" });
  const router = useRouter();

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const res = await axios.post("/auth/login", formValues);
      setSession(res.data);
      router.replace("/protected");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormValues(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={onSubmitHandler} style={{ width: "500px" }}>
        <input value={formValues.username} onChange={handleFormInputChange} placeholder="name@domain.com" name="username" />
        <input value={formValues.password} onChange={handleFormInputChange} placeholder="*****" name="password" type="password" />
        <button disabled={!formValues.username || !formValues.password} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
