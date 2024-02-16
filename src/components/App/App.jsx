import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import { HomePage, ContactForm, ProfilePage } from "../../pages";
import { Switch, Route, useLocation } from "react-router-dom";
// import { data } from "../../data/data.js";
 
function App({data}) {
  const location = useLocation();

  return (
    data && (
      <>
        <AppHeader />
        <Switch location={location.state?.background || location}>
          <Route
            exact
            path="/"
            render={() => <HomePage data={data} />}
          />
          <Route
            path="/contact"
            exact
            render={() => <ContactForm data={data} />}
          />
          <Route path="/profile" render={() => <ProfilePage data={data} />} />
        </Switch>
      </>
    )
  );
}

export default App;
