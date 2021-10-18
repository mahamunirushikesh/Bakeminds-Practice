import React,{Component} from "react";
export class VisibilityToggel extends Component{
  state={
    show:true,
    visibility:'visible'
  };

  toggel = () =>this.setState({show: !this.state.show});
  


  render(){
  return (
    <div>
      <button onClick={this.toggel}>
        {this.state.show ? 'Click here':'no'}
      </button>
      {this.state.show? <p>Can you able to do that?</p>:null}
    </div>
  );
  }
}

export default VisibilityToggel;
