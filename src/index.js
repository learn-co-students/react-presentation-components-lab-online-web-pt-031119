import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

// handler = () => {
//  return <div>I'm very happy</div>
// }

ReactDOM.render(

  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() =>
  console.log("I'm super happy")
} />
  </div>,
  document.getElementById('root')
);