import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  FormControlLabel,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Checkbox,
  Button,
  List,
  ListItem,
  TextField,
  FormControl,
  ListItemText
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonIcon from '@material-ui/icons/Person';

import DialogContentText from '@material-ui/core/DialogContentText';

const emails = ['example1@example.com', 'example2@example.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {emails.map(email => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}>
            <ListItemAvatar>
              <Avatar className="bg-first">
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

export default function LivePreviewExample() {
  // Example 1

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  // Example 2

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  // Example 3

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = event => {
    setChecked1(event.target.checked);
  };

  // Example 4

  const [open3, setOpen3] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen3 = scrollType => () => {
    setOpen3(true);
    setScroll(scrollType);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open3) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open3]);

  return (
    <Fragment>
      <Button
        className="m-2"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />

      <Button
        className="m-2"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen1}>
        Open form dialog
      </Button>
      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose1} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        className="m-2"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen2}>
        Open login form
      </Button>
      <Dialog
        open={open2}
        maxWidth="lg"
        onClose={handleClose2}
        aria-labelledby="form-dialog-title2">
        <DialogContent className="p-0">
          <div>
            <div className="bg-secondary border-0">
              <div className="card-header d-block bg-white pt-4 pb-5">
                <div className="text-muted text-center mb-3">
                  <span>Sign in with</span>
                </div>
                <div className="text-center">
                  <Button variant="outlined" className="mr-2 text-facebook">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </span>
                    <span className="btn-wrapper--label">Facebook</span>
                  </Button>
                  <Button variant="outlined" className="ml-2 text-twitter">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </span>
                    <span className="btn-wrapper--label">Twitter</span>
                  </Button>
                </div>
              </div>
              <div className="card-body px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <span>Or sign in with credentials</span>
                </div>
                <form>
                  <div className="form-group mb-3">
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <div>
                          <FontAwesomeIcon icon={['far', 'envelope']} />
                        </div>
                      </div>
                      <TextField fullWidth placeholder="Email" type="email" />
                    </div>
                  </div>
                  <FormControl>
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <div>
                          <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                        </div>
                      </div>
                      <TextField
                        fullWidth
                        placeholder="Password"
                        type="password"
                      />
                    </div>
                  </FormControl>
                  <div className="w-100">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked1}
                          onChange={handleChange1}
                          value="checked1"
                          color="primary"
                        />
                      }
                      label="Remember me"
                    />
                  </div>
                  <div className="text-center">
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleClose2}
                      className="mt-4">
                      Sign in
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Button
        className="m-2"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen3('paper')}>
        Inner scroll
      </Button>
      <Button
        className="m-2"
        variant="outlined"
        color="primary"
        onClick={handleClickOpen3('body')}>
        Body scroll
      </Button>
      <Dialog
        open={open3}
        onClose={handleClose3}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}>
            {[...new Array(50)]
              .map(
                () =>
                  'Cras mattis consectetur purus sit amet fermentum.\n' +
                  'Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n' +
                  'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.' +
                  'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose3} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose3} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
