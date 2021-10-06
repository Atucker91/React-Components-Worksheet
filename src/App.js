import { render } from '@testing-library/react'
import React, {Component} from 'react'
import DisplayName from './components/DisplayName';
import NamesList from './components/NamesList';
import AlertUser from './components/AlertUser';
import SuperheroTable from './components/SuperheroTable';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
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

  render(){
    return (
      <div>
        <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
        <NamesList names={this.state.names}/>
        <AlertUser alertButton={this.alertUser}/>
        <SuperheroTable superheroList={this.state.superheroes} />
      </div>
    )
  }
}

export default App;






