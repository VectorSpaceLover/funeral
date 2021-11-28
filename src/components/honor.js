import { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';
import TextareaAutosize from '@mui/base/TextareaAutosize';


import 'bootstrap/dist/css/bootstrap.min.css';
import { HonorContext } from '../contexts/honor';

const useStyles = makeStyles((theme) => ({
    line: {
      borderBottom: '2px solid rgb(220, 220, 220)',
    },
    bold: {
      fontWeight: 'bold',
      fontSize: '22px',
    },
}));

const textContainer = {
    marginTop: '10px', 
    lineHeight: '25px'
}

const Honor = (props) => {
    const classes = useStyles();
    const [editable, setEditable] = useState(false);
    const [honorTxt, setHonorTxt] = useContext(HonorContext);
    return(
        <div>
            <Typography paragraph className={classes.line}></Typography>
            <span className={classes.bold}>
                What would you like people to give in your honor?
            </span>
            <div className="row" onMouseEnter={() => setEditable(false)}>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    {(!editable) ? (
                        <Typography style = {textContainer} paragraph>
                            {honorTxt}
                        </Typography>
                        ): (
                        <TextareaAutosize
                            autoFocus
                            aria-label="minimum height"
                            minRows={7}
                            placeholder="Add more details"
                            style={{ width: '100%', borderColor: 'rgb(200, 200, 200'}}
                            onBlur= {() => {
                                setEditable(false);
                            }}
                            value = {honorTxt}
                            onChange = {(e) => setHonorTxt(e.target.value)}
                        />
                    )}
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className='d-flex flex-row-reverse'>
                            <CustomButton 
                                variant="contained" 
                                label="Edit" 
                                styleObject={{
                                    borderColor: 'rgb(248, 202, 124)',
                                    backgroundColor: 'white', 
                                    color: 'black', 
                                    width: '100px'}
                                }
                                onClick = {() => setEditable(true)}
                            />
                            <CustomButton 
                                variant="contained" 
                                label="Dismiss" 
                                styleObject={{
                                    borderColor: 'white',
                                    backgroundColor: 'white', 
                                    color: 'rgb(60, 108, 155)', 
                                    width: '100px'}
                                }
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Honor;