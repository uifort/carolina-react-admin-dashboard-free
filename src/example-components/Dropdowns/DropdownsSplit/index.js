import React, { Fragment } from 'react';

import { ButtonGroup, Menu, MenuItem, Button } from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function LivePreviewExample() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="split button">
        <Button>Split button</Button>
        <Button
          color="primary"
          size="small"
          aria-haspopup="true"
          onClick={handleClick}>
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Menu
        id="simple-menu2"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Fragment>
  );
}
