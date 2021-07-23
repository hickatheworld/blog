import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArticleContext from './components/ArticleContext';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './styles/App.sass';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/a/:id'>
						<ArticleContext />
					</Route>
					<Route path='*'>
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
