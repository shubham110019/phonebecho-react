import './App.css';
import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";
import Navbar from './comonent/Navbar';
import Home from './page/Home';
import Footer from './comonent/Footer';
import Login from './admin/Login';
import Singup from './admin/Singup';

function App() {
  return (
    <>

    <Navbar/>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About} exact/>
      <Route path='/content' component={About} exact/>
      <Route path='/wp-login' component={Login} exact/>
      <Route path='/wp-singup' component={Singup} exact/>
    </Switch>
    <Footer/>
    </>
  );
}


const About = () =>{
  return(
    <>
      <h1>about page</h1>
    </>
  )
}

export default App;
