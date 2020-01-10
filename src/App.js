import React, {useState } from 'react';
import {Button, TextField } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import MuiAlert from '@material-ui/lab/Alert';
import UserCard from './components/card/userCard';
import RepoList from './components/repoList'
import './App.css';

export default function App() {
  
  const [userData, setUserData] = useState('');
  const [userRepos, setUserRepos] = useState('');
  const [error, setError] = useState('');
  const [userInput, setUserInput] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userInput}/repos`)
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        setError(data.message)
        setUserData('');
        setUserRepos('')
      } else {
        setUserRepos(data)
        setUserData(data[0].owner);
        setError('');       
      }      
    })
  }

  return (
    <div>
      <div className="navbar">
        <GitHubIcon />
        GitHub Repo Search
      </div> 
      <div >
        <div >
          <form className="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="User Name" variant="outlined" onChange={event => setUserInput(event.target.value)} required/>
            <div className="button">
              <Button variant="contained" color="primary" disabled={userInput?false:true} type="submit" >
                Search
              </Button>
            </div>            
          </form>
        </div> 
        <div className="error"> 
          {error ? (<MuiAlert elevation={6} severity="error" variant="filled">{error}</MuiAlert>) : ''}
        </div>  
        <div className="content">
          {userData ? (
            <div><UserCard userData={userData} reposQty={userRepos.length} /></div>
          ) : ''}
        </div>  
        <div className="content">
          {userRepos ? (
            <div><RepoList userRepos={userRepos}/></div>
          ) : ''}
        </div>     
      </div>    
  </div>
  )
}
