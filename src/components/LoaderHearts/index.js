/* eslint-disable linebreak-style */
import React from 'react';
import Loader from 'react-loader-spinner';
import db from '../../../db.json';

export default function LoaderHearts() {
  return (
    <Loader
      type="Hearts"
      color={`${db.theme.colors.primary}`}
      height={80}
      width={80}
      timeout={8000}
    />
  );
}
