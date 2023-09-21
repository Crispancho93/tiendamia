import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layout/MainLayout";
import { Home, Orders } from "./pages/index";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/orders" element={<Orders />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/orders" />} />
      </Route>
    </Routes>
  );
}

export default App;
