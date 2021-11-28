import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import { makeStyles } from '@material-ui/core/styles';

import Honor from '../components/honor'
import Place from '../components/place'
import { checkBox, list } from '../constant'

import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'rgb(180, 150, 192)',
  },
  header: {
    height: '106px',
  },
  line: {
    borderBottom: '2px solid rgb(220, 220, 220)',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: '22px',
  },
  container: {
    padding: '20px',
  },
  content: {
    padding: '0 20px 0 20px',
  },
  checkContainer: {
    padding: '10px'
  },
  generalFont: {
    fontSize: '18px'
  },
}));


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Home(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
        <Card>
          <CardActions disableSpacing className = {classes.header}>
            <div className='d-flex flex-row'>
              <div style = {{position: 'relative'}}>
                <CloudCircleIcon 
                  className = {classes.icon}
                  style = {{fontSize: '70px', marginLeft: '13px'}}
                />
                <div className = 'd-flex align-items-center justify-content-center' style = {{height: '23px', width:'27px',  backgroundColor: '#ff9800', borderRadius: '10px', position: 'absolute', bottom: '3px', right: '-6px', border: '3px solid white', fontSize: '11px'}}>
                  2/4
                </div>
              </div>

              <div className = 'align-items-center' style = {{marginLeft: '20px', lineHeight: '11px'}}>
                <p className={classes.bold} style = {{padding: '15px 0 0 0'}}>Funeral</p>
                <p>What to do with your body, your ideal funeral, etc.</p>
              </div>
            </div>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon style={{ fontSize: '40px', color: 'black' }}/>
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div className={classes.content}>
                <Honor/>
                <Place  list = {list} checkBox = {checkBox} />
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </Container>
  );
}
