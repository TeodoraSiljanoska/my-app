import {Component} from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter: 0,
        };
    }


    increment(){
        //this.state.counter++;
        
        this.setState({
            counter: this.state.counter+1
        });


    }

    decrement(){
        //this.state.counter++;
        
        this.setState({
            counter: this.state.counter-1
        });


    }






    render(){
        return (<div>
        <h3>Counter value is:{this.state.counter}</h3>
        <button className="Zgolemuvanje" onClick={()=> this.increment()}>Zgolemi Vrednost</button>
        <button className="Namaluvanje" onClick={()=> this.decrement()}>Namali Vrednost</button>
        </div>)
    }
}

export default Counter;
