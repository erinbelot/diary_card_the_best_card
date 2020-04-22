import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native';

export default function HappinessButton({amount}) {
  const amounts = [
    `
    M 42.552734 30.761719 
    L 27.552734 32.326172 
    L 27.552734 38.125 
    L 42.552734 39.722656 
    L 42.552734 30.761719 z`,
    `
    M 129.88672 21.648438 
    L 114.88672 23.212891 
    L 114.88672 47.425781 
    L 129.88672 49.023438 
    L 129.88672 21.648438 z`,
    `
    M 217.21875 12.537109 
    L 202.21875 14.101562 
    L 202.21875 56.726562 
    L 217.21875 58.324219 
    L 217.21875 12.537109 z`,
    `
    M 304.55273 3.4238281 
    L 289.55273 4.9882812 
    L 289.55273 66.027344 
    L 304.55273 67.625 
    L 304.55273 3.4238281 z`
  ]

  const transforms = [
    '-27.552734',
    '-114.88672',
    '-202.21875',
    '-289.55273'
  ]

  return (
    <TouchableOpacity>
      <Svg viewBox="0 0 15 64.2011719">
        <Path
          transform={`translate(${transforms[amount]}, -3.4238281)`}
          d={amounts[amount]}
        />
      </Svg>
    </TouchableOpacity>
  )
}
