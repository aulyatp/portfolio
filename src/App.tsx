import { AnimatePresence } from "framer-motion";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { About } from "./components/About";
import { useState } from "react";
import "./App.css";
import "./index.css";
import { BookshelfScene } from "./components/BookshelfScene";

function App() {
  const location = useLocation();
  const isProjectDetail = location.pathname.startsWith("/project/");
  const [showBookList, setActiveBookList] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-title" onClick={() => setActiveBookList(false)}>
            Aulya
          </Link>
        </div>
        {!isProjectDetail && (
          <div className="navbar-right">
            <Link to="/" className="exit-button" onClick={() => setActiveBookList(true)}>
              Projects
            </Link>
          </div>
        )}
        {isProjectDetail && (
          <div className="navbar-right">
            <Link to="/" className="exit-button">
              ⛌
            </Link>
          </div>
        )}
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <BookshelfScene showBookList={showBookList} setActiveBookList={setActiveBookList} />
                </>
              }
            />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
