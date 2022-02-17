import DetailMovie from "../containers/HomeTemplate/DetailMovie";
import HomeTemplate from "../containers/HomeTemplate";
import Dashboard from "../containers/HomeTemplate/Dashboard";
import Login from "../containers/HomeTemplate/Login";
import AddUserPage from "../containers/AdminTemplate/AddUserPage";
import AdminTemplate from "../containers/AdminTemplate";
import Movie from "../containers/AdminTemplate/Movie";
import BookingTicket from "../containers/HomeTemplate/BookingTicket"
import SignUp from "../containers/HomeTemplate/Signup";
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
  //booking
  {
    exact:false,
    path:"/booking",
    component:BookingTicket,
  },
  //sign up
  {
    exact:false,
    path:"/signup",
    component:SignUp,
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

const routesAdmin =[
  {
    exact:false,
    path:"/add-user",
    component: AddUserPage
  },
  {
    exact:false,
    path:"/admin-movie",
    component: Movie,
  }
]
const renderRouteAdmin = () => {
  return routesAdmin.map((root, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={root.exact}
        path={root.path}
        component={root.component}
      />
    );
  });
};
export { renderRouteHome,renderRouteAdmin };
