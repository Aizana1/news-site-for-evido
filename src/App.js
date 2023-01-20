import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/posts/:postId" element={<Single />}/>
      </Routes>
    </Router>
  );
}

export default App;
