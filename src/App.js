
import './App.css';
import { BrowserRouter, Switch } from "react-router-dom";
import {renderRouteHome} from "./routes";
import PageNotFound from './containers/PageNotFound';
function App() {
  return (
    <div>
       <BrowserRouter>
        <Switch>
          {renderRouteHome()}
          <PageNotFound></PageNotFound>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
