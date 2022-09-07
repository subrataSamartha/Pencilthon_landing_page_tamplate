import Home from "./sections/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preview from "./sections/Preview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
