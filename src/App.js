import React from 'react';

function Food(props) {
  return <h1> i like {props.fav} </h1>;
}

function App() {
  return (
    <div>
      하이
      <Food fav="kimchi" />
      <Food fav="kimbab" />
      <Food fav="namul" />
      <Food fav="bab" />
    </div>
  );
}

export default App;
