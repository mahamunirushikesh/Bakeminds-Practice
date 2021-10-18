import React,{ Component } from "react";
import PropTypes from'prop-types'

export class Search extends Component{
    state={
        text:''
    };
    static propTypes={
        searchUser:PropTypes.func.isRequired,
        clearUser:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired
    }


    onSubmit =(e) => {
        e.preventDefault();
        if(this.state.text===''){
            this.props.setAlert('Please enter Something','light')
        }else{
            this.props.searchUser(this.state.text);
        this.setState({text:''});
        }
        
    };

    onChange= e =>{
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        const { showClear,clearUsers } = this.props;

        return(
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type='text' name='text' placeholder='Search Users..' value={this.state.text} onChange={this.onChange} style={{width:'100%' ,marginBottom:'20px',marginTop:'20px'}}/>
                    <input
                        type='submit'
                        value='Search'
                        className='btn btn-dark btn-block'
                        style={{width:'100%'}}
                    />    
                </form>
                {showClear && ( <button className='btn btn-light btn-block' onClick={clearUsers} style={{width:'100%',marginTop:'20px',marginBottom:'10px'}}>Clear</button>)}
               
            </div>
        );
    }
}

export default Search;



