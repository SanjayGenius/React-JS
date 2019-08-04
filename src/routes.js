import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import BillGenerate from './components/BillGenerate.js'
import Report from './components/Report.js'
import ShowProduct from './components/ShowProduct.js'
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
						<Route exact path="/" component={ShowProduct}/>
						<Route path="/report" component={Report} />
						<Route path="/billgenerate" component={BillGenerate} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
};

export default Router;