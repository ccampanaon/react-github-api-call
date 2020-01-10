import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import GitHubIcon from '@material-ui/icons/GitHub';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function UserCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.userData.avatar_url}
        title={props.name}
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <IconButton aria-label="share">
            <FaceIcon />
          </IconButton>
          {props.userData.login}
        </Typography>
        <div>
          <IconButton aria-label="share">
            <GitHubIcon />
          </IconButton>
          {props.reposQty}
        </div>
      </CardContent>
    </Card>
  );
}
