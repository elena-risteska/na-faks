import "./App.css";

import OglasnaTabla from "./pages/OglasnaTabla";
import Ocenki from "./pages/Ocenki";
import Student from "./pages/Student";
import Error from "./pages/Error";
import Semestri from "./pages/Semestri";
import Dokumenti from "./pages/Dokumenti";
import Uplata from "./pages/Uplata";
import Najava from "./pages/Najava";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/najava" element={<Najava />} />
          <Route index element={<OglasnaTabla />} />
          <Route path="/ocenki" element={<Ocenki />} />
          <Route path="/student" element={<Student />} />
          <Route path="/semestri" element={<Semestri />} />
          <Route path="/dokumenti" element={<Dokumenti />} />
          <Route path="/uplata" element={<Uplata />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
