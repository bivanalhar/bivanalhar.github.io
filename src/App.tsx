import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Portfolio from "./components/Portfolio";
import Game from "./components/Game";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Portfolio />
          </Layout>
        }
      />
      <Route path="/game_201125" element={<Game />} />
    </Routes>
  );
}

export default App;
