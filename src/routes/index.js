import DetailMovie from "../containers/HomeTemplate/DetailMovie";
import HomeTemplate from "../containers/HomeTemplate";
import Dashboard from "../containers/HomeTemplate/Dashboard";
import Login from "../containers/HomeTemplate/Login";
const routesHome = [
  //home
  {
    exact: true,
    path: "/",
    component: Dashboard,
  },
  //detail
  {
    exact: false,
    path: "/detail/:id",
    component: DetailMovie,
  },
  //login
  {
    exact: false,
    path: "/login",
    component: Login,
  },
];
const renderRouteHome = () => {
  return routesHome.map((root, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={root.exact}
        path={root.path}
        component={root.component}
      />
    );
  });
};

// const routesAdmin =[
//   {
//     exact:
//   }
// ]
export { renderRouteHome };
