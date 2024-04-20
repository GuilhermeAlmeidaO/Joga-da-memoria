import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import InGame from "./pages/In-game/In-game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<InGame/>} path="/in-game"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
