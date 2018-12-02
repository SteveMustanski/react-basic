// array of players to be displayed in the player component
const players = [
  {
    name: 'Steve',
    score: 75
  },
  {
    name: 'Pepper',
    score: 38
  },
  {
    name: 'John',
    score: 17
  },
  {
    name: 'Anna',
    score: 15
  }
]


const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='stats'>Players: {props.totalPlayers}</span>
    </header>

  );
}

const Player = (props) => {
  return (
    <div className='player'>
      <span className='player-name'>
        {props.name}
      </span>

      <Counter score={props.score}/>
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className='counter'>
      <button className='counter-action decrement'> - </button>
      <span className='counter-score'>{props.score}</span>
      <button className='counter-action increment'> + </button>
    </div>
  )
}

const App = (props) => {
  return (
  <div className="scoreboard">
    <Header title="Scoreboard"
     totalPlayers={props.initialPlayers.length}/>

    {/* iterate over list of players */}
    {props.initialPlayers.map( player => 
    <Player 
    name={player.name}
    score={player.score}/>
    )}
  </div>
  )
}

ReactDOM.render(
  <App initialPlayers={players}/>,
  document.getElementById('root')
);