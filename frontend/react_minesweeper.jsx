var React = require('react'),
    Minesweeper = require('../lib/minesweeper.js');

var Game = React.createClass({
  getInitialState: function(){
    return {board: new Minesweeper.Board(9, 9)};
  },
  render: function(){

  }
});

module.exports = Game;
