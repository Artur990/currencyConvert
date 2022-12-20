import { Route, Routes, Link } from "react-router-dom";
import Exchange, { historyLoader } from "./components/Exchange";
import Currencyconverter from "./components/Currencyconverter";
import { queryClient } from ".";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Currencyconverter />}></Route>
        <Route
          path="/history"
          element={<Exchange />}
          loader={() => historyLoader(queryClient)}
        ></Route>
        <Route path="/calendar" element={<Exchange />}></Route>
      </Routes>
    </div>
  );
}

export default App;
