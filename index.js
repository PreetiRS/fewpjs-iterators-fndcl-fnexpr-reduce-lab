const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce((acc, cv) => cv + acc)

// reduce:
// takes a callback (like iterators)
// the callback takes params of its own
// the callbakc's params include:
    // 1) an accumulator (keeps track of the accumulated value)
    // 2) current value (like all other iterators)