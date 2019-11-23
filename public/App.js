const element = React.createElement("div", {
  title: "Outer div"
}, React.createElement("h1", null, "Hello World!!!"), React.createElement("h2", null, "NPM is the Bomb.com!!"));
ReactDOM.render(element, document.getElementById('contents'));