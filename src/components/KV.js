import React from "react";
import { generateString, randomNumber } from "../App";

export function KV() {
    return (
        <div>
            {manyFields()}
        </div>
    )
}

function oneField() {
    return <p style={{margin: "0px"}}>{generateString(randomNumber(10, 10))}: {generateString(randomNumber(10, 10))}</p>;
}

function manyFields() {
    var fields = [];
    for (let index = 0; index < randomNumber(10, 10); index++) {
        fields.push(oneField(10, 10))
    }
    return fields;
}