import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import PropTypes from "prop-types";

const LoginCard = ({ openCloseLoginCard }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      !email.trim().match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$") ||
      password.trim().length < 8
    ) {
      alert("login is incorrect");
      return;
    }

    login({ email: email, password });
    openCloseLoginCard();
  };

  return (
    <dialog className="login-card-container fixed top-0 z-50 flex h-full w-full animate-slide-down items-center justify-center bg-black/30 backdrop-blur">
      <div className="rounded-[20px] bg-stone-800 p-8">
        <h3 className="mb-10 text-2xl font-semibold">Login To AmineAI</h3>
        <button
          onClick={openCloseLoginCard}
          className="absolute right-5 top-5 px-5"
        >
          Close
        </button>
        <form
          onSubmit={onSubmitHandler}
          action=""
          className="flex flex-col gap-8"
        >
          <div className="relative flex flex-col">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              className="rounded-full border border-stone-600 bg-transparent px-5 py-3 focus:border-stone-300 [&:focus+label]:text-stone-300"
            />
            <label
              htmlFor="email"
              className="absolute left-5 top-0 -translate-y-1/2 bg-stone-800 px-2 text-sm text-stone-600 transition-all duration-300"
            >
              Username Or Email
            </label>
          </div>
          <div className="relative flex flex-col">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="rounded-full border border-stone-600 bg-transparent px-5 py-3 focus:border-stone-300 [&:focus+label]:text-stone-300"
            />
            <label
              htmlFor="password"
              className="absolute left-5 top-0 -translate-y-1/2 bg-stone-800 px-2 text-sm text-stone-600 transition-all duration-300"
            >
              Password
            </label>
          </div>
          <div className="flex gap-3 pl-5 [&_input]:bg-red-300">
            <input
              type="checkbox"
              id="remeberMe"
              className="[&:checked+label]:text-stone-300"
            />
            <label htmlFor="remeberMe" className="text-stone-600">
              Remeber me
            </label>
          </div>
          <button>Login</button>
        </form>
      </div>
    </dialog>
  );
};

LoginCard.propTypes = {
  openCloseLoginCard: PropTypes.func.isRequired,
};

export default LoginCard;
