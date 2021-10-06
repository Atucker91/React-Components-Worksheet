import { render } from '@testing-library/react'
import React, {Component} from 'react'
import DisplayName from './components/DisplayName';
import NamesList from './components/NamesList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
    };
  }

  render(){
    return (
      <div>
        <NamesList names={this.state.names}/>
        {/* <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} /> */}
      </div>
    )
  }
}

export default App;






