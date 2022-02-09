import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { CardActionArea } from '@material-ui/core/';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core/';
import { CardMedia } from '@material-ui/core/';
import { Button } from '@material-ui/core/';
import { Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import 'animate.css';
import GitHub from '../images/GItHub.svg';
import Linkedin from '../images/linkedin.svg';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <div className="contact_container">
        <div className="contact_item animate__animated animate__fadeInLeft">
          <Card className={classes.root} variant="outlined">
            <CardActionArea>
              <CardMedia
                component="img"
                alt=" Mihir Gupta"
                height="300"
                image={require('../images/me.png')}
                title=" Mihir Gupta"
              />
              <CardContent className="contact_card">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  style={{ fontFamily: 'Mulish' }}
                >
                  Yehonatan Nissan
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Full-Stack Developer and Comptetive Programmer
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              style={{
                textAlign: 'right',
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '10vh',
                paddingRight: '10vh',
              }}
            >
              <div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/yehonatan-nissan/"
                >
                  <img
                    src={Linkedin}
                    alt="linkedin"
                    style={{ height: '5vh', width: '5vh' }}
                  />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://github.com/yonin7">
                  <img
                    src={GitHub}
                    alt="linkedin"
                    style={{ height: '5vh', width: '5vh' }}
                  />
                </a>
              </div>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contact;
