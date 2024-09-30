//app
import "./App.css";
import { HomePage } from "components";
import { SnackbarNotification } from "components";
import {
  AskAnExpert,
  Diagnostics,
  HealthSummita,
  Knowledge,
  Magazine,
  TestPage,
  PackageDetails
} from "pages";

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
          <Route path="/diagnostics/tests" element={<TestPage />} />
          <Route path="/diagnostics/tests/:packageName" element={<PackageDetails />} />
        </Route>
      </Routes>
      <SnackbarNotification />
    </div>
  );
}

export default App;
