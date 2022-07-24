import React, { useEffect } from 'react'
import { findTop } from '../App'
import { QR } from './QR'

export default function Row({ id, width, cols, qrRowId, flag, content }) {

  const colWidth = Math.floor(width / cols)
  const QRCodeIndex = Math.floor(Math.random() * cols)
  let cover

  useEffect(() => {
    if (flag) {
      const top = findTop(qrRowId)
      const dx = colWidth/2
      const dy = colWidth/2
      const x = 2 * dx * QRCodeIndex + dx
      const y = top + dy
      console.log(qrRowId, x, y, dx, dy)
      // document.getElementById(id). += <div>asdf</div>
      // document.getElementById(id).appendChild(<div style={{ height: `${2 * dy}px`, width: `${2 * dy}px`, backgroundColor: 'rgba(123,123,123,0.5)', transform: `translate(${x-dx}, ${y-dy})` }}></div>)
    }
  }, [])
  
  return (
    <div id={id} width={width} style={{ display: 'flex' }}>
      {[...Array(cols)].map((_, i) => <div style={{ width: `${colWidth}px`, flexShrink: 0, translate: "-20" }}>
        {(QRCodeIndex == i && flag) ? <div id="QR"><QR size={colWidth - 20} /></div> : content }
      </div>)}
    </div>
  )
}
