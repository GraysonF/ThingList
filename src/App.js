import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
import ThingList from './ThingList.js'
import Button from './Button.js'

class App extends Component {
  constructor() {
    super()
    this.count = 0;
    this.state = {
    things: {
      
    }
    
  }
  this.addThing = this.addThing.bind(this)
  this.remove = this.remove.bind(this)
}

  getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  remove(ev) {
    ev.preventDefault()
    const tg = ev.target
    const things = {...this.state.things}
    const parent = tg.closest('li').parentNode
    const child = tg.closest('li')
    const text = tg.closest('div').firstChild.textContent
    const len = Object.keys(things).length
    parent.removeChild(child);
    console.log(things)
    // for (let i = 0; i < len; i++) {
    //   if (things[i].name === text) {
    //     delete things[i]
    //     break
    //   }
    // }
    //this.setState({things}) Need to set an updated state
    console.log(things)
  }

  addThing(ev) {
    const randomArr = ['ice cream', 'pie', 'lettuce', 'smores', 'peanut butter', 'shoes', 'trash']
    // This gives a random default input
    const text = window.prompt("Enter a thing",randomArr[this.getRandomIntInclusive(0,randomArr.length)]);
    ev.preventDefault()
    const things = {...this.state.things}
    // console.log(things)
    const id = this.count++;
    if (text !== "") {
      things[id] = {id: id, name: text}
      this.setState({things})
    }
    
  }
  render() {
    return (
      <div className="App">
          <Header/>
          <Button addThing={this.addThing}/>
          <ThingList things = {this.state.things} remove = {this.remove}/>
        </div>
      
    );
  }
}

export default App;
