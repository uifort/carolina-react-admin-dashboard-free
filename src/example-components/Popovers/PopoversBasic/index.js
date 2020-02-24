import React, { Fragment } from 'react';

import { Box, Popover, Button } from '@material-ui/core';

export default function LivePreviewExample() {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [anchorEl5, setAnchorEl5] = React.useState(null);

  const handleClickPopover1 = event => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClosePopover1 = () => {
    setAnchorEl1(null);
  };

  const handleClickPopover2 = event => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClosePopover2 = () => {
    setAnchorEl2(null);
  };

  const handleClickPopover3 = event => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClosePopover3 = () => {
    setAnchorEl3(null);
  };

  const handleClickPopover4 = event => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClosePopover4 = () => {
    setAnchorEl4(null);
  };

  const handleClickPopover5 = event => {
    setAnchorEl5(event.currentTarget);
  };
  const handleClosePopover5 = () => {
    setAnchorEl5(null);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const open4 = Boolean(anchorEl4);
  const open5 = Boolean(anchorEl5);

  return (
    <Fragment>
      <div className="text-center">
        <Button
          variant="outlined"
          color="primary"
          className="m-2"
          onClick={handleClickPopover1}>
          Popover on top
        </Button>
        <Popover
          open={open1}
          anchorEl={anchorEl1}
          onClose={handleClosePopover1}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}>
          <Box className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="m-2"
          onClick={handleClickPopover2}>
          Popover on right
        </Button>
        <Popover
          open={open2}
          anchorEl={anchorEl2}
          onClose={handleClosePopover2}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left'
          }}>
          <Box className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="m-2"
          onClick={handleClickPopover3}>
          Popover on center
        </Button>
        <Popover
          open={open3}
          anchorEl={anchorEl3}
          onClose={handleClosePopover3}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}>
          <Box className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="m-2"
          onClick={handleClickPopover4}>
          Popover on bottom
        </Button>
        <Popover
          open={open4}
          anchorEl={anchorEl4}
          onClose={handleClosePopover4}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}>
          <Box className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Popover>

        <Button
          variant="outlined"
          color="primary"
          className="m-2"
          onClick={handleClickPopover5}>
          Popover on left
        </Button>
        <Popover
          open={open5}
          anchorEl={anchorEl5}
          onClose={handleClosePopover5}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'right'
          }}>
          <Box className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Box>
        </Popover>
      </div>
    </Fragment>
  );
}
