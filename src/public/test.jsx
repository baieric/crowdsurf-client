/*** @jsx REACT.DOM*/
var Login = React.createClass({
    render: function() {
        return <div class="container">
      <div id="login">
        <h1>CrowdSurfr</h1>
        <a href="/login" class="btn btn-primary">Log in with Spotify</a>
      </div>
    </div>;
    }
});
 
React.render(<Login/>, document.body);