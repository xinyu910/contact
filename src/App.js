import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Newroom from "./components/pages/NewRoom";
import Joinroom from "./components/pages/JoinRoom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newroom" element={<Newroom />} />
        <Route path="/joinroom" element={<Joinroom />} />
      </Routes>
    </Router>
  );
}

export default App;
