// import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./component/Home/Home";
import { Tracker } from "./component/Tracker/Tracker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/eveTracker" element={<Tracker />} />
    </Routes>
  );
}

export default App;
