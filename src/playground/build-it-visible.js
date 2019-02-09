class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isToggleOn: false,
    }
  }
  
  handleClick() {
    this.setState((prevState) => {
      return {
        isToggleOn: !prevState.isToggleOn,
      };
    });
  }
  
  render() {
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'Hide' : 'Show'}</button>
        {this.state.isToggleOn && (
          <div>
            <p>Hey! These are some details you can see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

//const appRoot = document.getElementById("app");
//
//let isToggleOn = false;
//
//const handleClick = () => {
//  console.log(isToggleOn);
//  isToggleOn = !isToggleOn;
//  render();
//};
//
//const render = () => {
//  const template = (
//    <div>
//      <h1>Visibility Toggle</h1>
//      <button onClick={handleClick}>{isToggleOn ? 'Hide' : 'Show'}</button>
//      {isToggleOn && (
//        <div>
//          <p>Hey! These are some details you can see!</p>
//        </div>
//      )}
//    </div>
//  );
//
//  ReactDOM.render(template, appRoot);
//};
//
//render();
