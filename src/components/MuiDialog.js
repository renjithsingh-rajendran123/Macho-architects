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
      <Dialog open={props.Show} onClose={handleClose} TransitionComponent={Transition}>
        <DialogTitle>GET In touch
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
            <form className="w-form" action="https://formsubmit.co/machoarchitects@gmail.com" method="POST">					
                    <input className="field w-input" name="contactName" maxLength={"256"} placeholder="Name" required="required" type="text"/>
                    <input className="field w-input" name="contactPhone" id="Phone" maxLength={"256"} placeholder="Phone" required="required" type="number"/>
                    <input className="field w-input" name="contactBudget" maxLength={"256"} placeholder="Location" required="required" type="text"/>
                    <input className="field w-input" name="contactWork" maxLength={"256"} placeholder="What kind of Work" required="required" type="text"/>
                    <textarea className="field w-input" id="immess" maxLength={"5000"} name="contactMessage" placeholder="Project Description"></textarea>
                    <button name="sub" className="button form w-button" type="submit" >SUBMIT</button>				
            </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}