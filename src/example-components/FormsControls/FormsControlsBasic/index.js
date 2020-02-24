import React, { Fragment } from 'react';

import {
  Grid,
  FormControlLabel,
  Checkbox,
  Card,
  MenuItem,
  TextField,
  FormControl,
  FormHelperText,
  Divider
} from '@material-ui/core';

import { FormLabel, FormGroup } from '@material-ui/core';

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];
export default function LivePreviewExample() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  const [value2, setValue2] = React.useState('Controlled');

  const handleChange2 = event => {
    setValue2(event.target.value);
  };

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const handleChange3 = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;

  const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className="p-4 mb-4">
            <div className="font-size-lg font-weight-bold">Controls types</div>
            <Divider className="my-4" />
            <Grid container spacing={4}>
              <Grid item xs={12} lg={6}>
                <div className="p-3">
                  <TextField
                    fullWidth
                    className="m-2"
                    id="standard-basic"
                    label="Standard"
                  />
                  <TextField
                    fullWidth
                    className="m-2"
                    id="filled-basic"
                    label="Filled"
                    variant="filled"
                  />
                  <TextField
                    fullWidth
                    className="m-2"
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <div className="p-3">
                  <TextField
                    fullWidth
                    className="m-2"
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your currency">
                    {currencies.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    className="m-2"
                    id="filled-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your currency"
                    variant="filled">
                    {currencies.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    fullWidth
                    className="m-2"
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    helperText="Please select your currency"
                    variant="outlined">
                    {currencies.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </Grid>
            </Grid>
          </Card>
          <Card className="p-4 mb-4">
            <div className="font-size-lg font-weight-bold">Sizing</div>
            <Divider className="my-4" />
            <Grid container spacing={4}>
              <Grid item xs={12} lg={6}>
                <div className="p-3">
                  <TextField
                    fullWidth
                    className="m-2"
                    label="Size"
                    id="standard-size-small"
                    defaultValue="Small"
                    size="small"
                  />
                  <TextField
                    fullWidth
                    className="m-2"
                    label="Size"
                    id="standard-size-normal"
                    defaultValue="Normal"
                  />
                  <TextField
                    fullWidth
                    className="m-2"
                    label="Size"
                    id="filled-size-small"
                    defaultValue="Small"
                    variant="filled"
                    size="small"
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <div className="p-3">
                  <TextField
                    fullWidth
                    className="m-2"
                    label="Size"
                    id="filled-size-normal"
                    defaultValue="Normal"
                    variant="filled"
                  />
                  <TextField
                    fullWidth
                    className="m-2"
                    label="Size"
                    id="outlined-size-small"
                    defaultValue="Small"
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    fullWidth
                    className="m-2"
                    label="Size"
                    id="outlined-size-normal"
                    defaultValue="Normal"
                    variant="outlined"
                  />
                </div>
              </Grid>
            </Grid>
          </Card>
          <Card className="p-4 mb-4">
            <div className="font-size-lg font-weight-bold">Checkboxes</div>
            <Divider className="my-4" />
            <FormControl component="fieldset" className="pr-4">
              <FormLabel component="legend">Assign responsibility</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={gilad}
                      onChange={handleChange3('gilad')}
                      value="gilad"
                    />
                  }
                  label="Gilad Gray"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={jason}
                      onChange={handleChange3('jason')}
                      value="jason"
                    />
                  }
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={antoine}
                      onChange={handleChange3('antoine')}
                      value="antoine"
                    />
                  }
                  label="Antoine Llorca"
                />
              </FormGroup>
              <FormHelperText>Be careful</FormHelperText>
            </FormControl>
            <FormControl required error={error} component="fieldset">
              <FormLabel component="legend">Pick two</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={gilad}
                      onChange={handleChange3('gilad')}
                      value="gilad"
                    />
                  }
                  label="Gilad Gray"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={jason}
                      onChange={handleChange3('jason')}
                      value="jason"
                    />
                  }
                  label="Jason Killian"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={antoine}
                      onChange={handleChange3('antoine')}
                      value="antoine"
                    />
                  }
                  label="Antoine Llorca"
                />
              </FormGroup>
              <FormHelperText>You can display an error</FormHelperText>
            </FormControl>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="p-4 mb-4">
            <div className="font-size-lg font-weight-bold">Multiline</div>
            <Divider className="my-4" />
            <div>
              <TextField
                fullWidth
                className="m-2"
                id="standard-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                value={value2}
                onChange={handleChange2}
              />
              <TextField
                fullWidth
                className="m-2"
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
              />
              <TextField
                fullWidth
                className="m-2"
                id="standard-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
              />
            </div>
            <div>
              <TextField
                fullWidth
                className="m-2"
                id="filled-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                value={value2}
                onChange={handleChange2}
                variant="filled"
              />
              <TextField
                fullWidth
                className="m-2"
                id="filled-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                variant="filled"
              />
              <TextField
                fullWidth
                className="m-2"
                id="filled-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
                variant="filled"
              />
            </div>
            <div>
              <TextField
                fullWidth
                className="m-2"
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                value={value2}
                onChange={handleChange2}
                variant="outlined"
              />
              <TextField
                fullWidth
                className="m-2"
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                variant="outlined"
              />
              <TextField
                fullWidth
                className="m-2"
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
                variant="outlined"
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
