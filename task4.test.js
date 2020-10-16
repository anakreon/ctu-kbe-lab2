import chai from 'chai';
import { txt2hex } from './task0.js';

import { pad, _test } from './task4.js';

const { expect } = chai;

describe('pad', () => {
    it('hello', () => {
        const text = 'hello';
        const hex = txt2hex(text);
        const expectedResult = '68656c6c6f0b0b0b0b0b0b0b0b0b0b0b';
        expect(pad(hex)).to.equal(expectedResult);
    });
    pad("hello")
    it('no padding', () => {
        const hex = 'aabbcceedd33aabbcceedd33aabbcca1';
        const expectedResult = 'aabbcceedd33aabbcceedd33aabbcca110101010101010101010101010101010';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 01', () => {
        const hex = 'aabbcceedd33aabbcceedd33aabbcc';
        const expectedResult = 'aabbcceedd33aabbcceedd33aabbcc01';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 02', () => {
        const hex = 'aabbcceedd33aabbcceedd33aabb';
        const expectedResult = 'aabbcceedd33aabbcceedd33aabb0202';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 03', () => {
        const hex = 'aabbcceedd33aabbcceedd33aa';
        const expectedResult = 'aabbcceedd33aabbcceedd33aa030303';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 04', () => {
        const hex = 'aabbcceedd33aabbcceedd33';
        const expectedResult = 'aabbcceedd33aabbcceedd3304040404';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 05', () => {
        const hex = 'aabbcceedd33aabbcceedd';
        const expectedResult = 'aabbcceedd33aabbcceedd0505050505';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 06', () => {
        const hex = 'aabbcceedd33aabbccee';
        const expectedResult = 'aabbcceedd33aabbccee060606060606';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 07', () => {
        const hex = 'aabbcceedd33aabbcc';
        const expectedResult = 'aabbcceedd33aabbcc07070707070707';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 08', () => {
        const hex = 'aabbcceedd33aabb';
        const expectedResult = 'aabbcceedd33aabb0808080808080808';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 09', () => {
        const hex = 'aabbcceedd33aa';
        const expectedResult = 'aabbcceedd33aa090909090909090909';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 10', () => {
        const hex = 'aabbcceedd33';
        const expectedResult = 'aabbcceedd330a0a0a0a0a0a0a0a0a0a';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 11', () => {
        const hex = 'aabbcceedd';
        const expectedResult = 'aabbcceedd0b0b0b0b0b0b0b0b0b0b0b';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 12', () => {
        const hex = 'aabbccee';
        const expectedResult = 'aabbccee0c0c0c0c0c0c0c0c0c0c0c0c';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 13', () => {
        const hex = 'aabbcc';
        const expectedResult = 'aabbcc0d0d0d0d0d0d0d0d0d0d0d0d0d';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 14', () => {
        const hex = 'aabb';
        const expectedResult = 'aabb0e0e0e0e0e0e0e0e0e0e0e0e0e0e';
        expect(pad(hex)).to.equal(expectedResult);
    });
    it('pad 15', () => {
        const hex = 'aa';
        const expectedResult = 'aa0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f';
        expect(pad(hex)).to.equal(expectedResult);
    });
});

describe('getHexLengthBytes', () => {    
    it('', () => {
       const hex = 'aabbcceedd33';
       expect(_test.getHexLengthBytes(hex)).to.equal(6);
    });
});
