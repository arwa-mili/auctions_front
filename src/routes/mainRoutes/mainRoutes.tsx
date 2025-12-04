import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// constants
import { RoutesEnum } from "@constants";
//components
//Pages
import MainLayout from "@pages/mainLayout/mainLayout";
import { Fallback } from "index";
//Dashboard


const MainRoutes = () => {
  return (
    <Routes>
      <Route path={RoutesEnum.ROOT} element={<MainLayout />}>
        
        <Route
          index
          element={
            <Suspense fallback={<Fallback />}>
              <Fallback />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export { MainRoutes };
