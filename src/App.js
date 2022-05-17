
import { Route, Routes } from "react-router";

import { Home } from "./components/Pages/Home";
import { AboutUs } from "./components/Pages/AboutUs";
import { Buy } from "./components/Pages/Buy";
import { ExpensiveThin } from "./components/Pages/ExpensiveThin";
import { HeaderHome } from "./components/Layaouts/HomeHeader/HeaderHome";
import { NotFound } from "./components/Pages/NotFound";


function App() {
  return (
    <div>
      <HeaderHome></HeaderHome>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
          <Route path="/buy" element={<Buy></Buy>}></Route>
          <Route path="/expensive" element={<ExpensiveThin></ExpensiveThin>}></Route>
          <Route path="#" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
