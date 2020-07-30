import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      input: '',
      operation: '',
      result: 0
    }
    
    this.inputNumber = this.inputNumber.bind(this);
    this.delNumber = this.delNumber.bind(this);
    this.clear = this.clear.bind(this);
    this.calc = this.calc.bind(this);
    this.showResult = this.showResult.bind(this);

    }
    inputNumber(event){
      if(typeof this.state.input !== "string"){
        this.setState({
          input: event.target.outerText
        })
      }
      else{
      this.setState ({
        input: this.state.input + event.target.outerText
      })
    }
  }
  
    delNumber(){
      this.setState({
        input: this.state.input.slice(0, this.state.input.length - 1)
      })
    }

    clear(){
      this.setState({
        input: '',
        operation: '',
        result: 0
      })
    }
    
    calc(event){
      var op = this.state.operation + ' ' + this.state.input + ' ' + event.target.outerText;
      var res = eval(op.slice(0, op.length-1));

      if(typeof this.state.input === "number"){
        this.setState({ 
          operation: this.state.operation.slice(0, this.state.operation.length-1) + event.target.outerText
         })
      }
      else{
      this.setState({
        input: res,
        operation: op,
        result: res
      })
    }
  }
    showResult(){
      this.setState({
        input: eval(this.state.operation + this.state.input),
        operation: this.state.operation + this.state.input
      })
    }
  
  render(){
  return (
    <div id="app">
      <div className="output">
        <div className="prev-op">{this.state.operation}</div>
        <div className="curr-op">{this.state.input}</div>
      </div>
      <button onClick={this.clear} id="clear" className="span-two">AC</button>
      <button onClick={this.delNumber} id="del">DEL</button>
      <button onClick={this.calc} id="divide"> / </button>
      <button onClick={this.inputNumber} id="one" value="1">1</button>
      <button onClick={this.inputNumber} id="two">2</button>
      <button onClick={this.inputNumber} id="three">3</button>
      <button onClick={this.calc} id="multiply"> * </button>
      <button onClick={this.inputNumber} id="four">4</button>
      <button onClick={this.inputNumber} id="five">5</button>
      <button onClick={this.inputNumber} id="six">6</button>
      <button onClick={this.calc} id="add"> + </button>
      <button onClick={this.inputNumber} id="seven">7</button>
      <button onClick={this.inputNumber} id="eight">8</button>
      <button onClick={this.inputNumber} id="nine">9</button>
      <button onClick={this.calc} id="subtract"> - </button>
      <button onClick={this.inputNumber} id="decimal">.</button>
      <button onClick={this.inputNumber} id="zero">0</button>
      <button onClick={this.showResult} id="equals" className="span-two">=</button>
      <p>By Mina Badrous</p>
    </div>
  );
  }
  
}
export default App;
