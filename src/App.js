import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YaziDetayi from "./components/YaziDetayi";
import YaziListesi from "./components/YaziListesi";

function App() {
  return (
    <Router>
      <div className="main-wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Routes>
            <Route path="/" element={<YaziListesi />}></Route>
            <Route path="/posts/:id" element={<YaziDetayi />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
