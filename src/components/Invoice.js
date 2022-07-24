import React from 'react'
import { randomNumber } from '../App'
import { KV } from './KV'
import Row from './Row'
import Table from './Table'

export default function Invoice({ rows }) {
  const tableRowPosition = Math.floor(Math.random() * rows)
  let QRRowPosition = Math.floor(Math.random() * rows)
  while (QRRowPosition == tableRowPosition) {
    QRRowPosition = Math.floor(Math.random() * rows) 
  }
  const rowWidth = randomNumber(1000, 500)
  const tableRow = () => (<Table width={rowWidth} />)
  
  console.log("before")
  return (
    <div>
      {[...Array(rows)].map((_, i) => (tableRowPosition == i) ?
          tableRow() :
          <Row id={`row${i}`} width={rowWidth} cols={randomNumber(3, 4)} qrRowId={`row${QRRowPosition}`} flag={QRRowPosition == i} content={<KV />} />
      )}
    </div>
  )
}
