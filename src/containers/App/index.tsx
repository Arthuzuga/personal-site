import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { hot } from "react-hot-loader";

import { Home } from "../Home";
import { ProfissionalProfile } from "../ProfessionalProfile";

require("./style.scss");

class App extends React.Component {
	public render() {
		return (
			<React.Fragment>
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/home" />} />
					<Route path="/home" component={Home} />
					<Route path="/profile" component={ProfissionalProfile} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default hot(module)(App);
