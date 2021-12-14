import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="containerDiv">
        <Header title={"VSoccer Workshop"} />
        <GameBoard />
      </Container>
    </>
  );
}

export default App;
