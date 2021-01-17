import "./App.css";
import { Route, Switch } from "wouter";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Favouriate from "./pages/Favouriate";

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/likes" component={Favouriate} />
          <Route component={NotFound} />
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
