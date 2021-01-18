import { ThemeProvider, Global, css } from "@emotion/react";
import { Route, Switch } from "wouter";

import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Favourite from "./pages/Favourite";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Box from "./components/Box";
import Flex from "./components/Flex";
import theme from "./theme";

const globalStyles = css`
  @font-face {
    font-family: "Robo";
    src: url("assets/fonts/Roboto/Roboto-Regular.ttf");
  }

  * {
    font-family: Robo, Sans-Serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Box width="100%" height="100%" paddingX="6" boxSizing="border-box">
        <Header />
        <Flex minHeight="75vh" width="100%">
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/likes" component={Favourite} />
            <Route component={NotFound} />
          </Switch>
        </Flex>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
