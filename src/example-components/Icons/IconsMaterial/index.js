import React, { Fragment } from 'react';

import { Card } from '@material-ui/core';

import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
import AddToPhotosTwoToneIcon from '@material-ui/icons/AddToPhotosTwoTone';
import AssignmentTurnedInTwoToneIcon from '@material-ui/icons/AssignmentTurnedInTwoTone';
import BatteryCharging20TwoToneIcon from '@material-ui/icons/BatteryCharging20TwoTone';
import BrightnessAutoTwoToneIcon from '@material-ui/icons/BrightnessAutoTwoTone';
import CloudDownloadTwoToneIcon from '@material-ui/icons/CloudDownloadTwoTone';
import DirectionsCarTwoToneIcon from '@material-ui/icons/DirectionsCarTwoTone';
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';
import LaptopMacTwoToneIcon from '@material-ui/icons/LaptopMacTwoTone';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import PhotoLibraryTwoToneIcon from '@material-ui/icons/PhotoLibraryTwoTone';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="icon-demo-box">
        <Card className="p-2 text-primary">
          <AccountBalanceWalletTwoToneIcon className="font-size-xl" />
        </Card>
        <Card className="p-2 text-primary">
          <AddToPhotosTwoToneIcon className="font-size-xl" />
        </Card>
        <Card className="p-2 text-primary">
          <AssignmentTurnedInTwoToneIcon className="font-size-xl" />
        </Card>
        <Card className="p-2 text-primary">
          <BatteryCharging20TwoToneIcon className="font-size-xl" />
        </Card>
        <Card className="p-2 text-primary">
          <BrightnessAutoTwoToneIcon className="font-size-xl" />
        </Card>
        <Card className="p-2 text-primary">
          <CloudDownloadTwoToneIcon className="font-size-xl" />
        </Card>
        <Card className="p-2 text-primary">
          <DirectionsCarTwoToneIcon className="font-size-xl" />
        </Card>
        <Card className="p-2 text-primary">
          <HourglassFullTwoToneIcon className="font-size-xl" />
        </Card>
        <Card className="p-2 text-primary">
          <LaptopMacTwoToneIcon className="font-size-xl" />
        </Card>
        <Card className="p-2 text-primary">
          <MenuBookTwoToneIcon className="font-size-xl" />
        </Card>
        <Card className="p-2 text-primary">
          <PhotoLibraryTwoToneIcon className="font-size-xl" />
        </Card>
      </div>
    </Fragment>
  );
}
