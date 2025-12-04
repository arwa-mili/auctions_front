import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
//Api
import { queryClient } from "./api/config";
//ContextAPI
import { GlobalProvider } from "@contextAPI";
//Routes
import { AuthRoutes, MainRoutes } from "@routes";
import { ToastContainer } from "react-toastify";

declare module "@mui/material/styles" {
  interface PaletteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }
}
declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    "extra-small": true;
  }
  interface IconButtonPropsColorOverrides {
    standard: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    "extra-small": true;
  }
  interface ButtonPropsColorOverrides {
    standard: true;
  }
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <GlobalProvider>
            <CssBaseline />
            <BrowserRouter>
              <Routes>
                <Route path="/*" element={<AuthRoutes />} />
                <Route path="/main/*" element={<MainRoutes />} />
              </Routes>
            </BrowserRouter>
            <ToastContainer />
        </GlobalProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
};

export default App;
