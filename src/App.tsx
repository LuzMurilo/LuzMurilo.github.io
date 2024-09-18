import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";

function App() {

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
