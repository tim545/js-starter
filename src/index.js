
const Component = React.Component;
const render = ReactDOM.render;

class App extends Component {
  render() {
    return (
      <div>
        <p>This is the app.</p>
        <Sample/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
