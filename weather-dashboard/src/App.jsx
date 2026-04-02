import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CurrentWeather from "./pages/CurrentWeather";
import HistoricalWeather from "./pages/HistoricalWeather";

function App() {
  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-0">
        <div className="container p-2">
          <Link className="navbar-brand" to="/">🌦 WeatherApp</Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/history">History</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div style={{ marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<CurrentWeather />} />
          <Route path="/history" element={<HistoricalWeather />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;