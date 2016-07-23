var React = require("react");
var Game = require("./game")
var Pattern = require("./pattern")
var App = React.createClass({
  render: function () {
    return (
      <div>
        <Pattern />
        <Game />
      </div>
    )
  }
})
module.exports = App;
