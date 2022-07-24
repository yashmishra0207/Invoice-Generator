import React from 'react'
import { randomNumber } from '../App';

export default function Random() {
  return (
    <div>
      {generateString(randomNumber(200, 100))}
    </div>
  )
}
