import React,{Component, Fragment} from "react";
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import Navbar from "./Component/Layout/Navbar";
import Users from "./Component/Layout/users/Users";
import axios from "axios";
import Search from "./Component/Layout/users/Search";
import Alert from "./Component/Layout/Alert";
import About from "./Component/Pages/About";
import User from "./Component/Layout/users/User";
import'./App.css';



class App extends Component{
  state ={
    users:[],
    user:{},
    repos:[],
    loading: false,
    alert:null
  }
 
  //   async componentDidMount() {
  //     console.log(process.env);
  //     this.setState({loading: true})

  //     const res= await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //     this.setState({users:res.data, loading:false})
  //  }
  searchUser =  async text => {
    this.setState({ loading:true })
    const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret='6ab97d403f66a23bfad8b43c9956414107da0820'`);

    this.setState({users:res.data.items, loading:false})
  }
  //Get a single Github User
  getUser = async username =>{
    this.setState({loading:true})
    const res= await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret='6ab97d403f66a23bfad8b43c9956414107da0820'`);

    this.setState({user:res.data, loading:false})
  }
  //Get users Reapositories

  getUserRepos = async username =>{
    this.setState({loading:true})
    const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret='6ab97d403f66a23bfad8b43c9956414107da0820'`);

    this.setState({repos:res.data, loading:false})
  }

  // Clear users from state
  clearUsers = () => this.setState({users:[],loading:false})

  setAlert = (msg, type) =>{
    this.setState({alert:{msg, type}}); 

    setTimeout (() =>this.setState({alert:null}),3000)
  }

  render(){
    const { loading , users,user,repos } = this.state;

    return(
      <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
              <Alert alert={this.state.alert}/>
              <Switch>
                <Route exact path='/' render={props =>(
                  <Fragment>
                      <Search searchUser={this.searchUser} clearUsers={this.clearUsers} showClear={users.length>0 ? true:false} setAlert={this.setAlert}/>
                      <Users loading={loading} users={users} repos={repos}/>
                  </Fragment>
                )}
                />
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' render = {props =>(
                  <User {...props } getUser={this.getUser} getUserRepos={this.getUserRepos} user={user} repos={repos} loading={loading}/>
                )}/>
              </Switch>

             
        </div>
      </div>
      </Router>
    )
  }
}
export default App