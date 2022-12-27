import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import "./component/header/App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
