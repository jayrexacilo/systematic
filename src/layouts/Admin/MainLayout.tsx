import { FC } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from '../../components/Admin/Sidebar';
import TopNavbar from '../../components/Admin/TopNavbar';
import Today from './Today';

import routes from './routes';

interface IRoutes {
    path: string,
    name: string,
    icon: string,
    component: FC,
    layout: string
}

function Admin () {
  const getRoutes = (routes: IRoutes[]) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <TopNavbar />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/admin/index" />
        </Switch>
      </div>
    </>
  );
}

export default Admin;
