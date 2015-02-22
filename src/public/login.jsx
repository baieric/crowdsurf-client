/*** @jsx REACT.DOM*/
module.exports = React.createClass({
    render: function() {
        return <div className="container">
      <div id="login">
        <h1>CrowdSurfr</h1>
        <a href="/#/home" className="btn btn-primary">Log in with Spotify</a>
      </div>
    </div>;
    }
});
 
//React.render(<Login/>, document.body);
