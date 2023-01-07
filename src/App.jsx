import { useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./App.css"

export default function App() {

const [darkMode, setDarkMode] = useState(true) 

    const darkModeHandler = () => {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    return (
        <div className="container">
            <Navbar 
                toggleDarkMode={darkModeHandler}
                darkMode={darkMode}
            />
            <Main 
                darkMode={darkMode}
            />
        </div>
    )
}