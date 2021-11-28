import { useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import {CommentContext} from '../contexts/comment';
import { Formik } from 'formik';
import { HonorContext } from '../contexts/honor';

const exampleContainer = {
    backgroundColor: 'rgb(210, 231, 231)', 
    padding: '20px 10px 0 20px', 
    borderLeft: '10px solid rgb(165, 206, 205)',
}



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

const Place = (props) => {
    const classes = useStyles();
    const [commentTxt, setCommentTxt] = useContext(CommentContext);
    const [honorTxt] = useContext(HonorContext);
    const [isSubmitting, setSubmitting] = useState(false)
    return (
        <>
            <Formik
                initialValues={{ honorTxt: '', commentTxt: '' }}
                validate={() => {
                    const errors = {};
                    if (honorTxt === '') {
                        errors.honorTxt = 'Required';
                    }
                    if (commentTxt === '') {
                        errors.commentTxt = 'Required';
                    }
                    console.log(errors)
                    return errors;
                }}
                onSubmit={() => {
                    setTimeout(() => {
                    alert(JSON.stringify({honorTxt: honorTxt, commentTxt: commentTxt}, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                {({
                    errors,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <Typography paragraph className={classes.line}></Typography>
                            <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                <span className={classes.bold}>
                                Where do want your funeral to take place?
                                </span>
                                <div className={classes.checkContainer}>
                                <FormGroup>
                                    {props.checkBox.map((name, index) => 
                                    <FormControlLabel key = {index} control={<Checkbox />} label={name} />
                                    )}
                                </FormGroup>
                                </div>
                            </div>
                            <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12' style={exampleContainer}>
                                <span className={classes.bold}>EXAMPLES</span>
                                <div style={{marginTop: '10px', lineHeight: '30px'}}>
                                <ul>
                                    {props.list.map((val, index) => 
                                    <li className={classes.generalFont} key = {index}>{val}</li>
                                    )}
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div style={{marginTop: '10px'}} className='row'>
                            <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12' style = {{paddingRight: '30px'}}>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={7}
                                    value = {commentTxt}
                                    placeholder="Add more details"
                                    style={{ width: '100%', borderColor: 'rgb(200, 200, 200'}}
                                    onChange = {(e) => setCommentTxt(e.target.value)}
                                />
                            </div>
                        </div>
                        {(errors.honorTxt)?('Please enter \'honor\' txt!'):<></>}
                        {(errors.commentTxt)?('Please enter \'add more detail\' txt!'):<></>}
                        <div style={{marginTop: '10px'}}>
                            <Button variant="contained" color="warning" type="submit" disabled={isSubmitting}>
                                Save
                            </Button>
                            <Button style = {{marginLeft: '20px'}} variant="outlined" color="warning">
                                Cancel
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default Place;