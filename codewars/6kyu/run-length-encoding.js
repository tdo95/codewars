/*

Run-length encoding

https://www.codewars.com/kata/546dba39fa8da224e8000467/javascript

INSTRUCTIONS

Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia

Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

Examples
As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

runLengthEncoding("hello world!")
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
It's very effective if the same data value occurs in many consecutive data elements:

runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
 // => [[34,'a'], [3,'b']]

*/

//SOLUTION
//create a run length encoding from a string
var runLengthEncoding = function(str){
    const encoding = [];
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      let lastSubArr = encoding[encoding.length - 1];
      if (letter === lastSubArr?.[1]) lastSubArr[0] += 1;
      else encoding.push([1, letter]);
    }
    return encoding
  }
  
  console.log(runLengthEncoding('weOownpoppy')) // [[1,w], [O, 1], [o, 1], [w, 1], [n, 1], [p, 1], [o, 1], [p, 2], [y, 1]]