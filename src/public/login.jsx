/*** @jsx REACT.DOM*/
var Login = React.createClass({
    render: function() {
        return <div className="container">
      <div className="jumbotron" id="login">
        <h1>Welcome to CrowdSurfr</h1>
        <p>Log in to join the open source playlist community.</p>
        <a href="/login" className="btn btn-primary btn-lg">Log in with Spotify</a>
      </div>
    </div>;
    }
});
 
React.render(<Login/>, document.body);