// Copyright (c) 2022 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"


/**
 * This function calculates area of pyramid
 */
function buttonClicked () {
  // get user input
  let sideA = parseFloat(document.getElementById('sideA').value)
  let sideB = parseFloat(document.getElementById('sideB').value)
  let height = parseFloat(document.getElementById('height').value)

  // calculate the area of pyramid
  let area = (sideA + sideB) / 2 * height

  // display the results
  document.getElementById('area').innerHTML = "The Area of the Trapezoid would be " + area.toFixed(2) + "cm³"
}