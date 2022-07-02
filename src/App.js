import './App.css';
import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";
import Home from './page/Home';
import Login from './admin/Login';
import Singup from './admin/Singup';
import Profile from './admin/Profile';
import Protected from './comonent/Protected';
import Addbrand from './admin/brand/Addbrand';
import Addmodel from './admin/model/Add-model';
import Viewmodel from './admin/model/View-model';
import Updatemodel from './admin/model/Update-model';
import StateProvider from './StateProvider';
import Brand from './page/Brand';
import Model from './page/Model';
import Logout from './admin/Logout';
import Modeldetail from './page/Modeldetail';
import Variant from './page/Variant';
function App() {

  
  return (
    <>

    <StateProvider>
    
    <Switch>
  
      <Route path='/' component={Home} exact/>
      <Route path='/about' component={About} exact/>
      <Route path='/brand' component={Brand} exact/>
      <Route path='/brand/:id' component={Model} exact/>
      <Route path='/model/:id' component={Modeldetail} exact/>
      <Route path='/model/:id/calculator/:pid/:slug' component={Variant} exact/>
      <Route path='/wp-login' component={Login} exact/>
      <Route path='/wp-singup' component={Singup} exact/>
      <Route path='/admin/dashboard' exact>
      <Protected Cmd={Profile}/>
      </Route>
      <Route path='/admin/add-brand' exact>
      <Protected Cmd={Addbrand}/>
      </Route>
      <Route path='/admin/add-model' exact>
      <Protected Cmd={Addmodel}/>
      </Route>

      <Route path='/admin/view-model' exact>
      <Protected Cmd={Viewmodel}/>
      </Route>

      <Route path='/admin/update-model/:id' exact>
      <Protected Cmd={Updatemodel}/>
      </Route>

      
      
      <Route path='/logout' exact>
      <Protected Cmd={Logout}/>
      </Route>
      
      
    </Switch>
   
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
