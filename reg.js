// var intToRoman = function (num) {
//   const valueSymbols = [
//     [1000, "M"],
//     [900, "CM"],
//     [500, "D"],
//     [400, "CD"],
//     [100, "C"],
//     [90, "XC"],
//     [50, "L"],
//     [40, "XL"],
//     [10, "X"],
//     [9, "IX"],
//     [5, "V"],
//     [4, "IV"],
//     [1, "I"],
//   ];
//   let roman = '';
//   for (const [value, symbol] of valueSymbols) {
//     debugger;
//     while (num >= value) {
//       num -= value;
//       roman += symbol;
//     }
//     if (num == 0) {
//       break;
//     }
//   }
//   return roman;
// };

// console.log(intToRoman(3999));

// const res = /(?<=[<\w+:\/\/[.|\d]+:)(\d+)(?=\/>)/g;

// const str = `Generating report to temp directory...
// Report successfully generated to C:sersN-ETH~1ppData145577066720977264allure-report
// Starting web server...
// Server started at <http://10.126.142.111:49374/>. Press <CtrlC> to exit`;

// str.replace(res, (s) => {
//   console.log(s);
// });

// console.log(str.match(res));
