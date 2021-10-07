import { render } from '@testing-library/react'
import React, {Component} from 'react'
import DisplayName from './components/DisplayName';
import NamesList from './components/NamesList';
import AlertUser from './components/AlertUser';
import SuperheroTable from './components/SuperheroTable';
import SuperheroCreateForm from './components/SuperheroCreateForm';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listOfJokes: [],
      firstName: 'Reggie',
      lastName: 'White',
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
      superheroes: [
        {
            superheroId: 1,
            name: 'Batman',
            primaryAbility: 'Wealthy',
            secondaryAbility: 'Rich'
        },
        {
            superheroId: 2,
            name: 'Superman',
            primaryAbility: 'Super strength',
            secondaryAbility: 'Fly'
        },
        {
            superheroId: 3,
            name: 'Spiderman',
            primaryAbility: 'Spider senses',
            secondaryAbility: 'Shoots web'
        }
      ]
    };
  }

  alertUser(){
    alert('devCodeCamp');
  }

  createHero = (newHero) => { 
    let tempHero = this.state.superheroes;
    tempHero.push(newHero);
    this.setState({
      superheroes: tempHero
    })
    
  }

  componentDidMount(){
    axios.get('https://v2.jokeapi.dev/joke/Programming?amount=5')
    .then(response => this.setState({
      listOfJokes: response.data.jokes
    }))
    
  }

  render(){
    return (
      <div>
        <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
        <NamesList names={this.state.names}/>
        <AlertUser alertButton={this.alertUser}/>
        <SuperheroTable superheroList={this.state.superheroes} />
        <SuperheroCreateForm createNewHero= {this.createHero} />
        {this.state.listOfJokes.map(function(joke){
                        return <div>
                            <h1>{joke.setup}</h1>
                            <h2>{joke.delivery}</h2>
                        </div>
                    })}
      </div>
    )
  }
}

export default App;






