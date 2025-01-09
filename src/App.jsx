import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import RoutesWithTransitions from './components/RoutesWithTransitions';
import ScrollToTop from './components/ScrollToTop';
import "./App.css";
import { FormDataProvider } from './components/FormDataProvider';


function App() {
  return (

    <div className="App">
      <FormDataProvider>
        <Router>
          <Nav />
          <RoutesWithTransitions />
          <ScrollToTop />
          <Footer />
        </Router >
      </FormDataProvider>
    </div>
  );
}

export default App;
