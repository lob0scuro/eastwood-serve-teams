import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import VolunteerForm from "./routes/VolunteerForm";
import ServeTeamNavigation from "./routes/ServeTeamNavigation";
import TeamSchedule from "./routes/TeamSchedule";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<VolunteerForm />} />
        <Route path="serve-team-index" element={<ServeTeamNavigation />} />
        <Route path="team/:team" element={<TeamSchedule />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
