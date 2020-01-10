import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import StarIcon from '@material-ui/icons/Star';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    marginTop: 10,
    backgroundColor: theme.palette.background.paper,
  },
  link: {
      marginLeft: 10
  },
  inline: {
    display: 'inline',
  },
}));

export default function RepoList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.userRepos.map(repo => (
        <div key={repo.id}>
        <ListItem alignItems="flex-start">            
            <GitHubIcon />
            <div className={classes.link}> 
                <a className={classes.links} target="_blank" href={repo.html_url}>{repo.name}</a>  
            </div>          
        </ListItem>
        <div className="start-count"><StarIcon />{repo.stargazers_count} </div>
        <Divider variant="inset" component="li" />
        </div>
        ))}    
    </List>
    
  );
}
