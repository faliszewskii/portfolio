
import { Routes, Route} from "react-router-dom";
import Portfolio from "./routes/Portfolio";
import Home from "./routes/Home";
import Navbar from './Navbar';
function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </>
  );
}
export default App;