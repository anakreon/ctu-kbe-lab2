import AES from "crypto-js/aes.js";
import ECB from "crypto-js/mode-ecb.js";
import HEX from "crypto-js/enc-hex.js";
import NoPadding from "crypto-js/pad-zeropadding.js";
import { hex2txt, txt2hex } from './task0.js';

export function encrypt_aes_block (plaintext, key) {
    const hexplaintext = txt2hex(plaintext);
    console.log(hexplaintext);
    if (!isExactly16BytesHex(hexplaintext)) {
        throw "message has to be exactly 16 bytes";
    }
    const hexkey = txt2hex(key);
    if (!isExactly16BytesHex(hexkey)) {
        throw "key has to be exactly 16 bytes";
    }

    const parsedMessage = HEX.parse(hexplaintext);
    const parsedKey = HEX.parse(hexkey);

    const result = AES.encrypt(parsedMessage, parsedKey, { iv: null, mode: ECB, padding: NoPadding });
    return result.ciphertext.toString(HEX);
}

export function decrypt_aes_block (hexciphertext, key) {
    if (!isExactly16BytesHex(hexciphertext)) {
        throw "message has to be exactly 16 bytes";
    }
    const hexkey = txt2hex(key);
    if (!isExactly16BytesHex(hexkey)) {
        throw "key has to be exactly 16 bytes";
    }

    const parsedKey = HEX.parse(hexkey);
    const result = AES.decrypt({
        ciphertext: HEX.parse(hexciphertext)
    }, parsedKey, { iv: null, mode: ECB, padding: NoPadding });
    
    return hex2txt(result.toString());
}

const isExactly16BytesHex = (input) => input.length === 32;


export const _test = {
    isExactly16BytesHex
};

