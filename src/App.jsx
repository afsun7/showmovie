import { Outlet } from "react-router-dom";
import Header from "./component/header/Header";
import "./component/header/App.css";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster />
    </>
  );
}

export default App;
