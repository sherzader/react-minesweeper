var React = require('react'),
    Minesweeper = require('../lib/minesweeper.js'),
    Board = require('./board.jsx');

var Game = React.createClass({
  getInitialState: function(){
    return {board: new Minesweeper.Board(9, 9)};
  },
  updateGame: function(){

  },
  render: function(){
    return (
      <div>
        <Board board={this.state.board} update={this.updateGame}/>
      </div>
    );
  }
});

// document.addEventListener('DOMContentLoaded', function(){
//   ReactDOM.render(<Game/>, document.getElementById('root'));
// });

module.exports = Game;
