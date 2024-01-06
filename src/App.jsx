import Globalstyls from "./Globalstyls";
import Header from "./components/common/Header/Header";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes />
      
      <Globalstyls />
      <Footer/>
    </Router>
  );
}
