import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Krishna', age: 27 },
      { name: 'Rama', age: 24 }
    ],
    showPersons: true
  }

  changeNameHandler = (event, index) => {

    const persons = [...this.state.persons]
    persons[index].name = event.target.value
    this.setState({
      persons: persons
    })
  }

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((p, i) => {
              return <Person key={i}
                changeName={(event) => this.changeNameHandler(event, i)} name={p.name} age={p.age} />
            })
          }
        </div>
      )
    }


    return (
      <div className="App">
        <h1>React ghanm</h1>
        {/* <button onClick={this.changeNameHandler.bind(null, 'Krish')}>Change Name</button> */}
        <button onClick={this.togglePersons}>Toggle</button>
        {persons}
      </div >
    )
  }

}

export default App;
