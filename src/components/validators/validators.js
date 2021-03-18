import React from 'react';

export const required = (value) => {
    if (value) return undefined;
    return "Field is empty"

}

export const maxSymbols = (maxLength) => (value) => {
    if (value.length > maxLength) return `Error maxLength is ${maxLength}`
    return undefined
}