import React from 'react';
import { ThemeProvider } from "@material-ui/core/styles";

import SignIn from "./pages/auth/SignIn";

import theme from "./theme/theme";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
