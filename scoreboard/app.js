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

// the class syntax needs to be used if state is needed
class Counter extends React.Component {

  // class property syntax for creating state
  // this could also be done with a class constructor
  state = {
    score: 0
  };

  incrementScore = () => {
    this.setState(prevState => ({
        score: prevState.score + 1
    }));
  }

  decrementScore = () => {
    this.setState(prevState => ({
        score: this.state.score - 1
    }));
  }

  render() {
    return (
      <div className='counter'>
        <button className='counter-action decrement' onClick={this.decrementScore}> - </button>
        <span className='counter-score'>{this.state.score}</span>
        <button className='counter-action increment' onClick={this.incrementScore}> + </button>
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