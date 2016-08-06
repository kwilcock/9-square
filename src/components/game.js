var React = require("react");
var Square = require("./square")
var Game = React.createClass({
  render: function () {
    createGame = function (number) {
      return (<Square key={number} />)
    }
    var list = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var squares = list.map(createGame, this)
    return (
      <div>
        {squares}
      </div>
    )
  }
})
module.exports = Game;
