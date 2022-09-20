import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";


// const goodm="Good Moring ";
// const gooda="Good Moring ";
// const goodn="Good Moring ";
let currDate = new Date();
 currDate = currDate.getHours();
let greeting = " ";
const cssStyle ={ };
if (currDate >= 1 && currDate < 12) {
  greeting = 'Good Morning ';
  cssStyle.color='green';
}
else if (currDate >= 12 && currDate < 19) {
  greeting = 'good Afternoon';
  cssStyle.color='orange';
}
else {
  greeting = 'good Night';
  cssStyle.color='blue';
}
ReactDOM.render(<>
  <div>
  <h1> Hello Sir , <span style={cssStyle}>{greeting} </span>  </h1>
</div>

</>,
  document.getElementById("root")
);