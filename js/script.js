// Copyright (c) 2022 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function calculates volume of trapezoid.
 */
function buttonClicked () {
  // get user input
  let sideA = parseFloat(document.getElementById('sideA').value)
  let sideB = parseFloat(document.getElementById('sideB').value)
  let height = parseFloat(document.getElementById('height').value)

  // calculate the volume of trapezoid
  let volume = sideA * sideB * height / 6

  // display the results
  document.getElementById('volume').innerHTML = "The Volume of a Pyramid would be " + volume.toFixed(2) + "cm³"
}