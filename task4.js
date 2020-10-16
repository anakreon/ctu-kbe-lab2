import { txt2hex } from './task0.js';

export function pad (hexInput) {
    const lengthMod16 = getLengthMod16(hexInput);
    const hexPadNumber = (lengthMod16.toString(16) + '').padStart(2, '0');
    let result = hexInput;
    for (var i = 0; i < lengthMod16; ++i) {
        result += hexPadNumber;
    }
    return result;
}

const getHexLengthBytes = (hex) => hex.length / 2;

const getLengthMod16 = (hex) => {
    const length = getHexLengthBytes(hex);
    const mod = length % 16;
    return 16 - mod;
}

export const _test = {
    getHexLengthBytes,
};
