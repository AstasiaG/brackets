module.exports = function check(str, bracketsConfig) {
  let one;
  let two;
  let three;
  let four;
  let five;

  for(let i = 0; i < bracketsConfig.length; i++) {
    let open = bracketsConfig[i][0];
    let close = bracketsConfig[i][1];
    if(one === undefined) {
      if(!isNaN(open)) {
        one = new RegExp(open + close,"g");
      } else {
        one = new RegExp('\\' + open + '\\' + close,"g");
      }
    } else if(one && two === undefined) {
      if(!isNaN(open)) {
        two = new RegExp(open + close,"g");
      } else {
        two = new RegExp('\\' + open + '\\' + close,"g");
      }
    } else if(one && two && three === undefined) {
      if(!isNaN(open)) {
        three = new RegExp(open + close,"g");
      } else {
        three = new RegExp('\\' + open + '\\' + close,"g");
      }
    } else if(one && two && three && four === undefined) {
      if(!isNaN(open)) {
        four = new RegExp(open + close,"g");
      } else {
        four = new RegExp('\\' + open + '\\' + close,"g");
      }
    } else if(one && two && three && four && five === undefined) {
      if(!isNaN(open)) {
        five = new RegExp(open + close,"g");
      } else {
        five = new RegExp('\\' + open + '\\' + close,"g");
      }
    }
  }
  let sym = new RegExp(/[\,\'\"\s]/, "g");


  let string = str.replaceAll(sym, '');

  for(let i = 0; i < str.length; i++) {
    string = string.replaceAll(one, '');
    string = string.replaceAll(two, '');
    string = string.replaceAll(three, '');
    string = string.replaceAll(four, '');
    string = string.replaceAll(five, '');
  };

  console.log(string);

  if(string.length === 0) {
    return true;
  } else {
    return false;
  }
}
