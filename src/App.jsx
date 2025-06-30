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
import AllTeamsSchedule from "./routes/AllTeamsSchedule";
import Login from "./routes/Login";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route element={<ProtectedLayout />}>
          <Route path="/add-volunteer" element={<VolunteerForm />} />
        </Route>
        <Route index element={<ServeTeamNavigation />} />
        <Route path="team/:team" element={<TeamSchedule />} />
        <Route path="all-teams" element={<AllTeamsSchedule />} />
        <Route path="login" element={<Login />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
