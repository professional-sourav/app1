import { Route, Routes } from "react-router-dom";
import "./App.css";

import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import SettingsPage from "./pages/SettingsPage";
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="products" element={<ProductsPage />}>
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="users" element={<UsersPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
