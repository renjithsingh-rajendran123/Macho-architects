import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
export default function FormDialog(props) {
  const handleClose = () => {
    props.UpdateParent(!props.Show)
  };
  return (
    <div>
      <Dialog open={props.Show} onClose={handleClose} TransitionComponent={Transition} style={{borderRadius:"10px"}}>
        <DialogTitle>Get in touch !
            {props.Show ? (
                <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                    <i className="fas fa-times"></i>
                </IconButton>
        ) : null}
        </DialogTitle>
        <DialogContent>
            <form className="w-form" action="mailto:machoarchitects@gmail.com" method="post" enctype="text/plain">
                    <input className="field w-input" name="Customer_Name" maxLength={"256"} placeholder="Name" required="required" type="text"/>
                    <input className="field w-input" name="Phone_Number" id="Phone" maxLength={"10"} minLength={"10"} placeholder="Phone" required="required" type="number"/>
                    <input className="field w-input" name="Project_Budget" maxLength={"256"} placeholder="Location" required="required" type="text"/>
                    <input className="field w-input" name="Work_Type" maxLength={"256"} placeholder="What kind of work?" required="required" type="text"/>
                    <textarea className="field w-input" id="immess" maxLength={"5000"} name="Project_Description" rows="6" cols="690" placeholder="Project description"></textarea><br></br>
                    <button className="button form w-button" type="submit" >SUBMIT</button>				
            </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}