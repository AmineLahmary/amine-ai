import { useState } from "react";
import LoginCard from "./ui/LoginCard";
import Dropdown from "./ui/Dropdown";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isLoginCardOpen, setIsLoginCardOpen] = useState(false);

  const { user } = useAuth();

  const openCloseLoginCard = () => {
    setIsLoginCardOpen(!isLoginCardOpen);
  };

  return (
    <nav className="flex justify-between">
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            color="currentColor"
          >
            <path d="M12 4.5a2.5 2.5 0 0 0-5 0a3 3 0 0 0-2.567 4.554a3.001 3.001 0 0 0 0 5.893A3 3 0 0 0 7 19.5a2.5 2.5 0 0 0 5-.001" />
            <path d="M12 19.5a2.5 2.5 0 0 0 5 0a3 3 0 0 0 2.567-4.553a3.001 3.001 0 0 0 0-5.893A3 3 0 0 0 17 4.5a2.5 2.5 0 0 0-5-.001" />
            <path d="M10.487 7.001V8.98M7 10.501h2.052m5.971 0h2.052m-2.052 2.974h2.052M7 13.475h2.052m1.435 1.545V17m3.025-1.98V17m-.009-10v1.98m-3.45 5.989h3.971a1 1 0 0 0 1-1V9.98a1 1 0 0 0-1-1h-3.971a1 1 0 0 0-1 1v3.989a1 1 0 0 0 1 1" />
          </g>
        </svg>
        AmineAI
      </div>
      <div>
        {isLoginCardOpen ? (
          <LoginCard openCloseLoginCard={openCloseLoginCard} />
        ) : null}
        {!user ? (
          <button className="bg-transparent px-5" onClick={openCloseLoginCard}>
            Login
          </button>
        ) : (
          <Dropdown />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
