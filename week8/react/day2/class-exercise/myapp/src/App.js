// import logo from './logo.svg';
import './App.css';
import Actors from './actors/actors';
import React from 'react';
// function App() {
//   const actors =[
//     {
//       firstName:"Brad",
//     LastName:"Pitt",
//     image:"https://images.app.goo.gl/cQvLiCrebcWWoJHq6"
//   },
//     {
//       firstName:"Leonardo",
//     LastName:"DiCaprio",
//     image:"https://images.app.goo.gl/cEsAfefqaAmcMXeCA"
//   }]
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      actors: [
        {
        firstName:"Brad",
        LastName:"Pitt",
        image:"https://images.app.goo.gl/cQvLiCrebcWWoJHq6"
      },
      {
        firstName:"Leonardo",
        LastName:"DiCaprio",
        image:"https://images.app.goo.gl/cEsAfefqaAmcMXeCA"
      }
    ]
  };
}
 render() {
  const { actors }=this.state;
  return (
     <div>
        {actors.map((actor, index) => (
            <Actors
              key={index}
              firstName={actor.firstName}
              lastName={actor.LastName}
              image={actor.image}
            />

       ))}
      </div>
    );
  }
}


export default App;
