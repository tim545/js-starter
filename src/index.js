
const Component = React.Component;
const render = ReactDOM.render;
const appContiner = document.getElementById('app');

class App extends Component {
  render() {
    return (
      <p>This is the app.</p>
    );
  }
}

render(<App />, appContiner);
