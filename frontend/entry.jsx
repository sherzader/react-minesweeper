var React = require('react'),
    ReactDOM = require('react-dom'),
    Minesweeper = require('../lib/minesweeper.js'),
    Game = require('./react_minesweeper.jsx');

  document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(<Game/>, document.getElementById('root'));
  });
