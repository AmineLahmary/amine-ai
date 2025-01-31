import { useState } from 'react'
import Main from './components/Main'
import SideBar from './components/SideBar'
import Note from './components/ui/Note'
import { AuthProvider, useAuth } from './contexts/AuthContext'

function App() {


  const [isClosed, setIsClosed] = useState(() => {
    return localStorage.getItem('noteHasClosed') === "true";
  }); 
  
  const closeNote = () => {
    setIsClosed(!isClosed);
    localStorage.setItem('noteHasClosed', true);
  }

  return (
    <AuthProvider>
      <div>
        { !isClosed ? <Note  closeNote={closeNote} /> : null }
        <div className="h-full flex ">
          <SideBar />
          <Main />
        </div>
      </div>
    </AuthProvider>
  )
}

export default App
