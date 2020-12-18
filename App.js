import React from 'react';
import {array} from './Array';
import './App.css';
import logo from './logo.png'
import shuffle from './shuffle.png';
import talk from './talk.png';
import united from './united.png';

//App component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: null,
    }
  }

//function for clicking button
  handleClick = () => {
    this.setState({random: array[Math.floor(Math.random()*array.length)]})
  };

  //refresh function
  refreshPage = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <div className='wrapper'>
        {/* Navigation Bar */}
        <nav className='nav'>
          <img src={logo} alt='break the ice - random icebreaker generator'/>
        </nav>
        {/* header */}
        {/* columns */}
        <column1 className='column1'>
          <img src={shuffle} alt='shuffle symbol'/>
          <p className='subtitle'>Get random questions</p>
        </column1>
        <column2 className='column2'>
          <img src={talk} alt='speech bubbles'/>
          <p className='subtitle'>Learn more about your team</p>
        </column2>
        <column3 className='column3'>
          <img src={united} alt='handshake'/>
          <p className='subtitle'>Work together more effectively</p>
        </column3>
        {/* main area with buttons and return*/}
        <content class='content'>
          <p className='text'>Use the button below to generate an icebreaker to discuss with your team</p>
          <button className='App-button' onClick={this.handleClick} block >Get an icebreaker!</button>
          <p className='Returnedtext'>{this.state.random}</p>
          <button className='Refresh' onClick={this.refreshPage}>Refresh!</button>
        </content>
         {/*footer */}
        <footer className='footer'>
          <p>breakTHEice - Random Icebreaker Generator</p>
        </footer>
      </div>
    );
  }
}

export default App;
