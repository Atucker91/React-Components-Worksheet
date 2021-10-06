import { render } from '@testing-library/react'
import React, {Component} from 'react'
import DisplayName from './components/DisplayName';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: 'Reggie',
      lastName: 'White'
    };
  }

  render(){
    return (
      <div>
        <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
      </div>
    )
  }
}

export default App;






