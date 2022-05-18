import ListTodo from "./todolist/todo/listToDo";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./todolist/HomePage/HomePage";
import CountNumber from "./todolist/countNumber/countNumber";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<ListTodo />} />
            <Route path="/count" element={<CountNumber />} />
          </Routes>
        </Router>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
