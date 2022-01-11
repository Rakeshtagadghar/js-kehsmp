/*
Input: string = "BLBBLLBLBL"
Output: 4
Explanation: string can be split into "BL", "BBLL", "BL", "BL", each substring contains same number of 'L' and 'B'.
*/
var balancedStringSplit = function (s) {
  let l = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    l += s[i] === 'L' ? 1 : -1;
    if (l === 0) count++;
  }

  return count;
};
document.getElementById('ans').innerHTML = balancedStringSplit('BLBBLLBLBL');
