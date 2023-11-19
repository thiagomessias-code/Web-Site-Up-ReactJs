import Globalstyls from "./Globalstyls";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes />
      <Globalstyls />
    </Router>
  );
}
