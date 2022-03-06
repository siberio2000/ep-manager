import "./App.css";
// import { Navbar, DeviceCard, Buttons } from "./components";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LogsProvider } from "./utils/table";
import Logs from "./pages/Logs";
import Cards from "./pages/Cards";
import { Navbar } from "./components";

const App = () => {
  return (
    <LogsProvider>
      <Router>
        <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<Cards />}></Route>
            <Route path="/logs" element={<Logs />}></Route>
          </Routes>
        </Container>
      </Router>
    </LogsProvider>
  );
};

export default App;
