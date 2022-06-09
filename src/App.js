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
import Profile from './admin/Profile';
import Protected from './comonent/Protected';
import Addbrand from './admin/brand/Addbrand';
import StateProvider from './StateProvider';

function App() {

  
  return (
    <>

    <StateProvider>
    <Navbar/>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About} exact/>
      <Route path='/wp-login' component={Login} exact/>
      <Route path='/wp-singup' component={Singup} exact/>
      <Route path='/dashboard' exact>
      <Protected Cmd={Profile}/>
      </Route>
      <Route path='/add-brand' exact>
      <Protected Cmd={Addbrand}/>
      </Route>
      
    </Switch>
    <Footer/>
    </StateProvider>
    
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
