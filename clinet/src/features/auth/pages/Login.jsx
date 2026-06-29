// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth.js";

// function Login() {
//   // const {loading, setLoading} = useAuth();
//   const { loading, setLoading, handleLogin } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await handleLogin({ email, password });
//   };
//   // if (loading) {
//   //   return (
//   //     <main className="bg-neutral-900 text-white h-screen flex flex-col items-center justify-center">
//   //       <h1>Loading...</h1>
//   //     </main>
//   //   );
//   // }
//   return (
//     <div className="bg-neutral-900 text-white h-screen flex flex-col items-center justify-center">
//       <h1 className="text-2xl font-bold mb-4 text-white">Wallcom</h1>
//       <form className="flex flex-col gap-4 w-1/3  p-4 " onSubmit={handleSubmit}>
//         <div className="flex flex-col gap-2">
//           <label htmlFor="email">Email</label>
//           <input
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter email address"
//             className="w-full p-2 rounded-2xl bg-neutral-800 border border-neutral-700 text-white"
//           />
//         </div>
//         <div className="flex flex-col gap-2">
//           <label htmlFor="password">Password</label>
//           <input
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter password"
//             className="w-full p-2 rounded-2xl bg-neutral-800 border border-neutral-700 text-white"
//           />
//         </div>
//         <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-2xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
//           Login
//         </button>
//       </form>
//       <p>
//         {" "}
//         Don't have an account?{" "}
//         <button
//           className="text-red-500 hover:underline"
//           onClick={() => navigate("/register")}
//         >
//           Register
//         </button>{" "}
//       </p>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

function Login() {
  const { loading, handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleLogin({ email, password });
  };

  if (!loading) {
    return (
      <main className="bg-neutral-900 text-white h-screen flex items-center justify-center">
        <h1>Loading...</h1>
      </main>
    );
  }

  return (
    <div className="bg-neutral-900 text-white h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Wallcom</h1>

      <form
        className="flex flex-col gap-4 w-1/3 p-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-2xl bg-neutral-800 border border-neutral-700"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded-2xl bg-neutral-800 border border-neutral-700"
          />
        </div>

        <button
          type="submit"
          className="bg-red-800 hover:bg-red-900 py-2 rounded-2xl"
        >
          Login
        </button>
      </form>

      <p>
        Don't have an account?{" "}
        <button
          className="text-red-500 hover:underline"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </p>
    </div>
  );
}

export default Login;