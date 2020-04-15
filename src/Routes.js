import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home/Home";

     function Routes(props){
//   let { dispatch, loaded, history, location, clinicId, id } = props;
  return (
    <Switch>
      <Route path={"/"} exact component={Home} />
    </Switch>
  );
};

export default withRouter(Routes);
