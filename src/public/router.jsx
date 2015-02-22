/*** @jsx REACT.DOM */
var Router = require('../node_modules/react-router');
var React = require('../node_modules/react');
var Route = Router.Route;
var Redirect = Router.Redirect;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.link;



var Login = require('./login.jsx');

var Home = require('./home.jsx');

var Forks = require('./forks.jsx');

var PLHistory = require('./history.jsx');

var PLEdit = require('./playlistEdit.jsx');

var PLView = require('./playlistView.jsx');


var App = React.createClass({
	render: function(){
		return(
			<div>
				<RouteHandler/>
			</div>
		);
	}
});

var routes = (
	<Route path="/" handler={App}>
		<DefaultRoute name="Home" handler={Home}/>
		<Route name="Login" handler={Login}/>
		<Route name="Playlist" handler={PLView}/>
		<Route name="Forks" handler={Forks}/>
		<Route name="PLHistory" handler={PLHistory}/>
		<Route name="PLEdit" handler={PLEdit}/>
		
	</Route>
);

Router.run(routes, function(Handler){
	React.render(<Handler/>,document.body);
});

	
