// <div id="root"></div> html 내용

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState({
      value: this.state.value + 1
    });
    //this state.value = this.state.value + 1;
    //this.forceUpdate();
    //정상적으로 작동은 하나 절대로 이런식으로 직접 수정하지 말것
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick}>Press Me</button>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Counter/>
    );
  }
};

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);