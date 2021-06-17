import React from "react";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
