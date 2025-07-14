import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handeleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${baseUrl}/user/registration`, {
        fullName,
        email,
        password,
      });

      if (res?.data?.status) {
        //alert(res?.data?.message);
        console.log(res?.data);
        const user=res?.data?.user;
        const token=res?.data?.token;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);

        setFullName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      } else {
        alert(res?.data?.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 w-1/2 p-6 rounded shadow-xl m-auto gap-3 mt-16">
      <input
        type="text"
        placeholder="Enter full name"
        value={fullName}
        className="border outline-none p-2"
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        className="border outline-none p-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        className="border outline-none p-2"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handeleLogin}
        className="border bg-teal-600  text-white p-2 cursor-pointer hover:bg-teal-500 transition-all duration-700"
      >
       {loading ? 'Loading...' : 'Register'}
      </button>
    </div>
  );
};

export default Register;