import React from 'react'

export default function Table({ width }) {
  
  const randomInt = () => {
    const max = 200;
    const offset = 50;
    return Math.floor(Math.random() * max) + offset;
  }
  
  return (
    <table width={width} border={4}>
      <tr>
        <td height={randomInt()} width={randomInt()}>1</td>
        <td height={randomInt()}>2</td>
        <td height={randomInt()}>3</td>
      </tr>
      <tr width={randomInt()}>
        <td height={randomInt()}>4</td>
        <td height={randomInt()}>5</td>
        <td>6</td>
      </tr>
      <tr>
        <td height={randomInt()}>7</td>
        <td height={randomInt()}>8</td>
        <td height={randomInt()}>9</td>
      </tr>
      <tr>
        <td height={randomInt()}>10</td>
        <td height={randomInt()}>11</td>
        <td height={randomInt()}>12</td>
      </tr>
    </table>
  )
}
