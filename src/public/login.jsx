/*** @jsx REACT.DOM*/
var Login = React.createClass({
    render: function() {
        return <div className="container">
      <div id="login">
        <h1>CrowdSurfr</h1>
        <a href="/login" className="btn btn-primary">Log in with Spotify</a>
      </div>
    </div>;
    }
});
 
React.render(<Login/>, document.body);