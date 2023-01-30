import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Authentication from "./components/Authentication";
import CompoWithTitle from "./components/CompoWithTitle";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Private from "./components/Private";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./NotFound";
import RequireAuth from "./components/RequireAuth";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <CompoWithTitle title={"Home - Toufiquer Web App"}>
              <Home></Home>
            </CompoWithTitle>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <CompoWithTitle title={"Home - Toufiquer Web App"}>
              <Home></Home>
            </CompoWithTitle>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <CompoWithTitle title={"About - Toufiquer Web App"}>
              <About></About>
            </CompoWithTitle>
          }
        ></Route>
        <Route
          path="/private"
          element={
            <CompoWithTitle title={"Private - Toufiquer Web App"}>
              <RequireAuth>
                <Private></Private>
              </RequireAuth>
            </CompoWithTitle>
          }
        ></Route>
        <Route
          path="/authentication"
          element={
            <CompoWithTitle title={"Private - Toufiquer Web App"}>
              <Authentication></Authentication>
            </CompoWithTitle>
          }
        ></Route>
        <Route
          path="*"
          element={
            <CompoWithTitle title={"Not Found - Toufiquer Web App"}>
              <NotFound></NotFound>
            </CompoWithTitle>
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
