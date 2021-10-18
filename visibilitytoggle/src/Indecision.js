import React,{Component} from "react";
import Modal from 'react-modal';

class Indecision extends Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this);
        this.handelPick=this.handelPick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleDeleteOption=this.handleDeleteOption.bind(this);
        
        //Setting state 
        this.state={
            options:[] ,
            selectedOption:undefined         
        }
    }

    componentDidMount() {
        try{
            const json =localStorage.getItem('options');
        const options =JSON.parse(json);
        if(options){
            this.setState(() => ({ options }));
        }
        }catch(e){

        }

       
        
    }

    componentDidUpdate(prevProps , prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
     
    }

    handleDeleteOptions (){
        this.setState(() =>{
            return{
                options:[]
            };
        });
    }

    handleClearSelectedOption =() =>{
        this.setState(() =>({selectedOption: undefined}))
    }

    handleDeleteOption (optionToRemove) {
       this.setState((prevState) =>({
        options: prevState.options.filter((option)=>{
            return optionToRemove !== option;
        })
       }))
    }

    handelPick(){
        const randomNum=Math.floor(Math.random() * this.state.options.length);
        const option=this.state.options[randomNum];
        this.setState(() =>({
            selectedOption:option
        }))
    }

    handleAddOption (option) {
        if(!option){
            return 'Enter  a valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already Exists'
        }

        this.setState((prevState) =>{
            return{
                options : prevState.options.concat(option)
            };
        });
    }

    render(){
        const title ="Indecision";
        const subtitle="Put your life in the hands of the computer.";
        return(
          <div>
              <Header title={title} subtitle={subtitle}/>
              
              <Action 
              hasOptions={this.state.options.length >0}
              handelPick={this.handelPick}
              />

              <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
              />

              <AddOption 
                handleAddOption={this.handleAddOption}
              /> 

              <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}
              /> 
          </div> 
        )
    }
}   

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps ={
    title :"Indecision"
}


const Action = (props) => {
    return(
        <div>
            <button 
            onClick={props.handelPick}
            disabled={!props.hasOptions}
            >
                What Should I Do??    
            </button>
        </div>
    )
}
 
const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All </button>
            {props.options.length===0 && <p>Please Add an Option to get started!!</p>}
            {
                props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
                   
        </div>
    )
    
}

const Option = (props) =>{
    return(
        <div>
            {props.optionText}
            <button 
                onClick={(e) =>{
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    )
}

const OptionModal =(props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    >
    <h3>Selected Options</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption} style={{cursor:'pointer'}}>Okay</button>
    </Modal>
)


class AddOption extends Component{
   constructor(props){
       super(props);
       this.handleAddOption=this.handleAddOption.bind(this);
       this.state ={
            error:undefined
       };
   }
   handleAddOption(e){
       e.preventDefault();

       const option = e.target.elements.option.value.trim();
       const error=this.props.handleAddOption(option);

       this.setState(() =>{
           return{ error };
       });

       if(!error){
           e.target.elements.option.value='';
       }
   }
   render(){
       return(
           <div>
               {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.handleAddOption}>
                   <input type='text' name='option' />
                   <button>Add Option</button>
               </form>
           </div>
       )
   }
}

export default Indecision