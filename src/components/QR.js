import React from "react";
import { QRCode } from 'react-qrcode-logo';
import { generateString, randomNumber } from "../App";

export function QR({ size }) {
    return (
      <QRCode size={size} value={generateString(randomNumber(200, 100))} />
    );
}