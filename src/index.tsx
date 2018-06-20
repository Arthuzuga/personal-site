import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { Router } from "react-router";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import createBrowserHistory from "history/createBrowserHistory";

import App from "./containers/App";

const routerStore = new RouterStore();
const rootStore = {
	routerStore,
};

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routerStore);

if (process.env.NODE_ENV !== "production") {
	console.log("Staging Mode");
}

ReactDOM.render(
	<Provider {...rootStore}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById("app"),
);
