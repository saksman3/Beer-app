import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";


import {connect} from 'react-redux';

class FormDialog extends React.Component {
  state = {
    open: false,
    name:this.props.category?this.props.category.name:'',
    url:this.props.category?this.props.category.url:'',
    

  };
  
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    
    this.setState({ open: false });
  };
  handleSave = ()=>{
      const name = this.state.name;
      const url = this.state.url;
      this.props.save({name:name,url:url});
      this.setState(()=>({open:false}));
  }
  onChange = (e)=>{
      const name = e.target.value;
      this.setState(()=>({name}));
  }
  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.handleClickOpen}
        >
         { this.props.mode} category
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">{this.props.mode} Category</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Category Name"
              type="text"
              fullWidth
              onChange={this.onChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default FormDialog;