import { Route, Routes } from "react-router-dom";
import HomePage from "../../../Pages/Alumni/HomePage";
import ActivityPage from "../../../Pages/Alumni/ActivityPage";
import StuinfoPage from "../../../Pages/Alumni/StuinfoPage";
import UpdatePage from "../../../Pages/Alumni/UpdatePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/alumni" element={<HomePage />}></Route>
      <Route path="/alumni/activity" element={<ActivityPage />}></Route>
      <Route path="/alumni/stuinfo" element={<StuinfoPage />}></Route>
      <Route path="/alumni/update" element={<UpdatePage />}></Route>
    </Routes>
  );
}
export default AppRoutes;