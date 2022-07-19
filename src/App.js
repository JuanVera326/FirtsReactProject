
import { Route, Routes } from "react-router";

import { Home } from "./components/Pages/Home/Home";
import { AboutUs } from "./components/Pages/AboutUs/AboutUs";
import { HeaderHome } from "./components/Layaouts/HomeHeader/HeaderHome";
import { NotFound } from "./components/Pages/NotFound/NotFound";
import { Contador } from "./components/Pages/Contador/Contador";
import { HomeFooter } from "./components/Layaouts/HomeFooter/HomeFooter";
import { API } from "./components/Pages/API/API";
import { ContactUs } from "./components/Pages/ContactUs/ContactUs";
import { APITenor } from "./components/Pages/APITenor/APITenor";
import { APIGiphy } from "./components/Pages/APIGiphy/APIGiphy";

function App() {
  return (
    <div>
      <HeaderHome></HeaderHome>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
          <Route path="/apirm" element={<API></API>}></Route>
          <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
          <Route path="/contador" element={<Contador></Contador>}></Route>
          <Route path="/tenorapi" element={<APITenor></APITenor>}></Route>
          <Route path="/apigiphy" element={<APIGiphy></APIGiphy>}></Route>
          <Route path="#" element={<NotFound></NotFound>}></Route>
      </Routes>
      <HomeFooter></HomeFooter>
    </div>
  );
}

export default App;
