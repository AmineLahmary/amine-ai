import { useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Note from "./components/ui/Note";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function App() {
  const [isClosed, setIsClosed] = useState(() => {
    return localStorage.getItem("noteHasClosed") === "true";
  });

  const closeNote = () => {
    setIsClosed(!isClosed);
    localStorage.setItem("noteHasClosed", true);
  };

  return (
    <AuthProvider>
      <>
        {!isClosed ? <Note closeNote={closeNote} /> : null}
        <div className="flex h-full">
          <SideBar />
          <Main />
        </div>
      </>
    </AuthProvider>
  );
}

export default App;
