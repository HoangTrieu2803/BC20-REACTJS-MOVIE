
import './App.css';
import { BrowserRouter, Switch } from "react-router-dom";
import {renderRouteHome,renderRouteAdmin} from "./routes";
import PageNotFound from './containers/PageNotFound';
import {Route} from "react-router-dom";
import AuthPage from './containers/AdminTemplate/AuthPage';
function App() {
  return (
    <div>
       <BrowserRouter>
        <Switch>
          {renderRouteHome()}
          {renderRouteAdmin()}
          <Route path="/auth" component={AuthPage}></Route>
          <PageNotFound></PageNotFound>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
