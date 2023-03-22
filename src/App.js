import './App.css';
import Header from './components/layout/Navbar';
import MainScreen from './components/layout/MainScreen';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './components/context/contextFile';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Toaster />
          <MainScreen />
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
