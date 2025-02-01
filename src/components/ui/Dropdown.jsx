import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { user, logout } = useAuth();

  useEffect(() => {
    const handleClickAwy = (e) => {
      if (e.target.classList.contains("profile-btn")) return;
      setIsDropdownOpen(false);
    };
    document.addEventListener("click", handleClickAwy);

    return () => {
      document.removeEventListener("click", handleClickAwy);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <button
          className="profile-btn flex items-center gap-2 bg-transparent p-0 hover:underline"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="6" r="4" />
              <path
                d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
                opacity="0.5"
              />
            </g>
          </svg>
          My Profile
        </button>
        <div
          className="absolute right-0 mt-4 min-w-[200px] rounded-md bg-stone-800 p-4"
          style={{ display: isDropdownOpen ? "block" : "none" }}
        >
          <h3>HELLO, {user.email.replace(/@.*/g, "")}</h3>
          <hr className="my-2 opacity-50" />
          <button
            className="logout-btn flex w-max gap-2 bg-transparent"
            onClick={logout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 4h3a2 2 0 0 1 2 2v1m-5 13h3a2 2 0 0 0 2-2v-1M4.425 19.428l6 1.8A2 2 0 0 0 13 19.312V4.688a2 2 0 0 0-2.575-1.916l-6 1.8A2 2 0 0 0 3 6.488v11.024a2 2 0 0 0 1.425 1.916M16.001 12h5m0 0l-2-2m2 2l-2 2"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
export default Dropdown;
