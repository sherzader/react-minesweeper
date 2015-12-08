var React = require('react'),
    Minesweeper = require('../lib/minesweeper.js'),

var Board = React.createClass({
  getInitialState: function(){

  },
  getTileText: function(tile){
    if (tile.explored){
      return tile.adjacentBombCount();
    } else{
      return tile.explored || tile.flagged;
    }
  },
  render: function(){
    var that = this;
    <div>
      {
      this.props.board.map(function(row, idx){
        <div key={idx}>row</div>
        row.map(function(tile, idx){
          <Tile key={idx} tile={tile} update={this.props.update}>
            {that.getTileText(tile)}
          </Tile>
          });
        });
      }
    </div>
  }
});

module.exports = Board;
