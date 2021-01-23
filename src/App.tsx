import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import { SignIn, HomePage } from "./pages";

import theme from "./theme/theme";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
