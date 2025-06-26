import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ProtectedLayout from "./layout/ProtectedLayout";
import VolunteerForm from "./routes/VolunteerForm";
import ServeTeamNavigation from "./routes/ServeTeamNavigation";
import TeamSchedule from "./routes/TeamSchedule";
import Login from "./routes/Login";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route element={<ProtectedLayout />}>
          <Route index element={<VolunteerForm />} />
          <Route path="serve-team-index" element={<ServeTeamNavigation />} />
          <Route path="team/:team" element={<TeamSchedule />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
