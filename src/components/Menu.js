// Created by snov on 22.02.2017.
//

import React, { Component } from 'react';
import MenuItem from './MenuItem';

export default function Menu() {
  return (
    <ul className='nav nav-pills nav-stacked menu'>
      <MenuItem name='Departments' tab='departments'/>
      <MenuItem name='Employees' tab='employees'/>
    </ul>
  );
}