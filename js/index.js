'use strict';
{
  let a, b,rest;
  [a, b,...rest] = [4, 8,10, 20, 30];
  console.log(a); // 4
  console.log(b); // 8
  console.log(rest); // 10, 20, 30

  ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
  console.log(a); // 10
  console.log(b); // 20
  console.log(rest); // {c: 30, d: 40}




}