import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  //Number to Words Utility
  a: string[] = [
    '',
    'one ',
    'two ',
    'three ',
    'four ',
    'five ',
    'six ',
    'seven ',
    'eight ',
    'nine ',
    'ten ',
    'eleven ',
    'twelve ',
    'thirteen ',
    'fourteen ',
    'fifteen ',
    'sixteen ',
    'seventeen ',
    'eighteen ',
    'nineteen ',
  ];
  b: string[] = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  regex: RegExp = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})(.)(\d{2})$/;
  num!: string;
  numArr!: RegExpMatchArray;

  getLT20(n: string): string {
    return this.a[Number(n)];
  }

  getGT20(n: string): string {
    return this.b[Number(n[0])] + ' ' + this.a[Number(n[1])];
  }

  numWords(input: string): string {
    this.num = input;
    if (isNaN(Number(this.num))) return '';
    if (Number(this.num) === 0) return 'zero';

    if (this.num.length > 9) {
      throw new Error('overflow'); // Does not support converting more than 9 digits yet
    }

    this.numArr = ('000000000' + this.num).substr(-12).match(this.regex)!; // left pad zeros

    let str = '';
    let flag=false;
    str +=
      Number(this.numArr[1]) != 0
        ? (this.getLT20(this.numArr[1]) || this.getGT20(this.numArr[1])) +
          'crore '
        : '';
    str +=
      Number(this.numArr[2]) != 0
        ? (this.getLT20(this.numArr[2]) || this.getGT20(this.numArr[2])) +
          'lakh '
        : '';
    str +=
      Number(this.numArr[3]) != 0
        ? (this.getLT20(this.numArr[3]) || this.getGT20(this.numArr[3])) +
          'thousand '
        : '';
    str +=
      Number(this.numArr[4]) != 0
        ? this.getLT20(this.numArr[4]) + 'hundred '
        : '';
    str += Number(this.numArr[5]) != 0 && str != '' ? 'and ' : '';
    str +=
      Number(this.numArr[5]) != 0
        ? this.getLT20(this.numArr[5]) || this.getGT20(this.numArr[5])
        : '';
    if ((Number(this.numArr[5]) === 1) && flag) {
      str += 'rupee';
    } else {
      str += 'rupees';
    }
    str +=
      Number(this.numArr[7]) != 0
        ? ' and ' +
          (this.getLT20(this.numArr[7]) || this.getGT20(this.numArr[7])) +
          ' paise'
        : '';
    return str.trim();
  }
}