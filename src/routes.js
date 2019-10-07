import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import BillGenerate from './components/BillGenerate.js'
import Report from './components/Report.js'
import ShowProduct from './components/ShowProduct.js'
import Print from './components/Print.js'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Header from './components/Header.js';
const store = createStore(rootReducer)

class Router extends Component {

	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Route component={Header} />	
					<Switch>
						{/* For Production */}
						{/* <Route exact path="/U71" component={ShowProduct}/>
						<Route path="/U71/report" component={Report} />
						<Route path="/U71/billgenerate" component={BillGenerate} />
						<Route path="/U71/print" component={Print} /> */}
						{/* For Dev */}
						<Route exact path="/" component={ShowProduct}/>
						<Route path="/report" component={Report} />
						<Route path="/billgenerate" component={BillGenerate} />
						<Route path="/print" component={Print} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
};

export default Router;