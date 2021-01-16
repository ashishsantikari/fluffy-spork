import './App.css';
import { Route } from 'wouter';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Route path="/" component={Dashboard} />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
