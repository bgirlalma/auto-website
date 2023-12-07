import { Route, Routes } from "react-router-dom";
import HomePage from "Pages/Home";
import Catalog from "Pages/Catalog";
import Favorite from "Pages/Favorite";
import Layout from "./Layout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/favorites" element={<Favorite />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
