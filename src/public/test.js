
var Login = React.createClass({displayName: "Login",
    render: function() {
        return React.createElement("div", {class: "container"}, 
      React.createElement("div", {id: "complete"}, 
        React.createElement("h1", null, "CrowdSurfr"), 
        React.createElement("p", null, "Successful log in")
      )
    );
    }
});
 
React.render(React.createElement(Login, null), document.body);
