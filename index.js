const produceDrivingRange = function(blockRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let range = end - start;
    let distance = Math.abs(blockRange - range);
    if (range <= blockRange) {
      return `within range by ${distance}`;
    } else {
      return `${distance} blocks out of range`;
    };
  };
};

const produceTipCalculator = function(tip) {
  return function(bill) {
    return tip * bill;
  };
};

const createDriver = function() {
  let DriverID = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverID;
    };
  };
};
