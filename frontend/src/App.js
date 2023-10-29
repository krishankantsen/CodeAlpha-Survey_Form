import Welcome from "./Welcome";
import "./App.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import LastPage from "./LastPage";
import Ques from "./Ques";
import ThankYou from "./ThankYou";
import AD from "./AD";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/thankyou" element={<ThankYou />} />

      <Route path="/ques" element={<Ques />} />

      <Route path="/lastpage" element={<LastPage />} />
      <Route path="/alreadydone" element={<AD/>} />
    </Routes>
  );
}

export default App;
