import React from 'react';
import { useState } from 'react';
import Clock, { ClockToggle } from './components/Clock';
import Folder from './components/Folder';
import Weather from './components/Weather';
import Autocomplete from './components/Autocomplete';

// class App extends React.Component {
export default function App(props){
  const [showClock, setShowClock] = useState(true)
const names = [
  'Abba',
  'Barbara',
  'Barney',
  'Jeff',
  'Jenny',
  'Sally',
  'Sarah',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

  function handleClock(){
    setShowClock(!showClock)
  }
  
  // toggleClock = () => this.setState({ showClock: !this.state.showClock });
  
    return (
      <div className="widgets">
        <Folder folders={folders} />
        <Weather />
        <ClockToggle toggleClock={handleClock} />
        {showClock && <Clock />}
        <Autocomplete names={names} />
      </div>
    );
  }


