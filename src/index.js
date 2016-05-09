
// const store = createReduxStore();
const Conponent = React.Component;
const render = ReactDOM.render;
const appContiner = document.getElementById('app');

class App extends Component {
  render() {
    return (
      <App>
        <p>This is the app.</p>
      </App>
    );
  }
}

render(App, appContiner);