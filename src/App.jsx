import { useState } from 'react'
import Main from './components/Main'
import SideBar from './components/SideBar'
import Note from './components/ui/Note'

function App() {

  const [isClosed, setIsClosed] = useState(() => {
    return localStorage.getItem('noteHasClosed') === "true";
  }); 
  
  const [isLoggedin, setIsLoggedin] = useState(() => {
    return JSON.parse(localStorage.getItem('login') ?? "{}") 
  });

  const closeNote = () => {
    setIsClosed(!isClosed);
    localStorage.setItem('noteHasClosed', true);
  }

  return (
    <>
    { !isClosed ? <Note  closeNote={closeNote} /> : null }
    <div className="h-full flex ">
      <SideBar />
      <Main userEmail={isLoggedin.email} />
    </div>
    </>
  )
}

export default App
