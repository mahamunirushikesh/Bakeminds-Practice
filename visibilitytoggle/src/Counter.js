import React,{Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        //Setting state 
        this.state={
            count:0
        }
    }
    render(){
        return(
            <div>
            <div>
                <h1>Count: {this.state.count}</h1>
            </div>
            <div>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
            </div>
        )
    }

    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount , 10);

        if(!isNaN(count)){
            this.setState(() =>({ count }));
        }
    }
    
    componentDidUpdate(prevProps, old){
        if(old.count !==this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }
    
  handleAddOne(){
        //alert('Adding')
        this.setState((old)=>{
            return{
                count:old.count +1
        }
        })
 
    }     


  handleMinusOne(){
   // alert('Subtracting - 1')
    this.setState((old)=>{
        return{
            count:old.count -1
        }
    })
}
  handleReset(){
    //alert('Reset!!')
    this.setState(()=>{
        return{
            count:0
        }
    })
}
}



export default Counter;