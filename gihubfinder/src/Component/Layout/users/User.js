import React,{ Fragment,Component } from "react";
import Spinner from "../Spinner";
import Repos from "../../Repos/Repos";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export class User extends Component{
    componentDidMount(){
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);

    }
    static propTypes={
        loading:PropTypes.bool,
        user:PropTypes.object.isRequired,
        getUser:PropTypes.func.isRequired,
        getUserRepos:PropTypes.func.isRequired
    }

    render(){
        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        }=this.props.user

        const {loading} =this.props;

        if(loading) return <Spinner/>;
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>
                    Back To Search
                </Link>
                Hierable:{''}
                {hireable ?(
                    <i className='fas fa-check text-success'/>
                ):(
                    <i className='fas fa-times-circle text-danger'/>
                )}
                <div className='card grid-2' style={{height:'350px'}}>
                    <div className='all-center'>
                        <img src={avatar_url} className='round-img' alt='' style={{width:'150px',marginLeft:'20px',marginTop:'20px'}}/>
                        <h1 style={{margin:'20px 0 0 20px', fontSize:'40px',fontFamily:'Times New Roman'}}>{name}</h1>
                        <p style={{margin:'10px 0 0 40px',fontFamily:'Times New Roman'}}>Location: {location}</p>
                    </div>
                    <div style={{position: 'absolute',float: 'left',left: '50%',display: 'block',top: '25px',}}>
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                        <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username:</strong> {login}    
                                </Fragment>}
                            </li>

                            <li>
                                {company && <Fragment>
                                    <strong>Company:</strong> {company}    
                                </Fragment>}
                            </li>

                            <li>
                                {blog && <Fragment>
                                    <strong>Website:</strong> {blog}    
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='card text-center' style={{flexDirection:'row'}}>
                    <div className='' style={{display:'inline',padding:'0.35em 0.65em',fontSize:'0.75em',width:'25%',height:'30px',backgroundColor:'red', color:'white'}}>Followers: {followers}</div>
                    <div className='' style={{display:'inline',padding:'0.35em 0.65em',fontSize:'0.75em',width:'25%',height:'30px',backgroundColor:'#00a3ff', color:'white'}}>Following: {following}</div>
                    <div className='' style={{display:'inline',padding:'0.35em 0.65em',fontSize:'0.75em',width:'25%',height:'30px',backgroundColor:'#5200ff', color:'white'}}>Public Repos: {public_repos}</div>
                    <div className='' style={{display:'inline',padding:'0.35em 0.65em',fontSize:'0.75em',width:'25%',height:'30px',backgroundColor:'#de00ff', color:'white'}}>Public Gists: {public_gists}</div>

                </div>                
                <div className='card'><Repos repos={this.props.repos}/></div>
            </Fragment>
        )
    }
}


export default User