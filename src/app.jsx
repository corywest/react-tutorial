var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a desert', // Title of button to open dropdown
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Tiramisu'
  ]
};

React.render(React.createElement(Dropdown, options), document.querySelector('.container'));
