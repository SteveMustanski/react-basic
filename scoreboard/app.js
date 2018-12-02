// array of players to be displayed in the player component
const players = [
  {
    name: 'Steve',
    score: 75,
    id: 1
  },
  {
    name: 'Pepper',
    score: 38,
    id: 2
  },
  {
    name: 'John',
    score: 17,
    id: 3
  },
  {
    name: 'Anna',
    score: 15,
    id: 4
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

      <Counter />
    </div>
  );
}

class Counter extends React.Component {

  // class property syntax for creating state
  // this could also be done with a class constructor
  state = {
    score: 0
  }

  render() {
    return (
      <div className='counter'>
        <button className='counter-action decrement'> - </button>
        <span className='counter-score'>{this.state.score}</span>
        <button className='counter-action increment'> + </button>
      </div>
    );
  }
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard"
        totalPlayers={props.initialPlayers.length} />

      {/* iterate over list of players */}
      {props.initialPlayers.map(player =>
        <Player
          name={player.name}
          key={player.id.toString()}
        />
      )}
    </div>
  )
}

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);