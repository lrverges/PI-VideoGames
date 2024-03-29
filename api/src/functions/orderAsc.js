
module.exports = function orderAsc(array) {
    array.sort((a, b) => {
    let fa = a.name.toLowerCase();
    let fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  return array;
};