import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Newroom from "./components/pages/NewRoom";
import Joinroom from "./components/pages/JoinRoom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from "./components/pages/Game";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newroom" element={<Newroom />} />
          <Route path="/joinroom" element={<Joinroom />} />
          <Route path='/room/:roomCode' element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
