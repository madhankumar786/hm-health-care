//app
import "./App.css";
import { HomePage } from "components";
import { AskAnExpert, Diagnostics, HealthSummita, Knowledge, Magazine } from "pages";

//packages
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<HomePage />}>
              <Route index element={<Navigate to="/diagnostics" />} />
              <Route path="diagnostics" element={<Diagnostics />} />
              <Route path="askAnExpert" element={<AskAnExpert />} />
              <Route path="knowledge" element={<Knowledge />} />
              <Route path="magazine" element={<Magazine />} />
              <Route path="healthSummita" element={<HealthSummita />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
