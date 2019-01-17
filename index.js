"use strict";

const prefix = "[rangejs]:";
const [defaultStart, defaultStep] = [0, 1];

const validateArgs = (args) => {
  if( !(args.length >= 1 && args.length <= 3) ) {
    throw `${prefix} Wrong number of arguments, expected 1..3 arguments got ${args.length}.`;
  }

  if( !args.every(arg => !isNaN(arg) && typeof(arg) === "number" && arg.toString(32).indexOf('.') === -1) ) {
    throw `${prefix} One or more arguments are not of type number.`;
  }
}


/**
 * Usage:
 ** range(stop)
 ** range(start, stop, [step])
 *
 * Argument types: 
 ** range(start?: number, stop: number, step?: number)
 */
const range = (...args) => {
  validateArgs(args);
  let [start, stop, step] = args;

  if(typeof(stop) === "undefined") {
    stop = start;
    start = defaultStart
  }
  step = typeof(step) === "undefined" ? defaultStep : step;

  const output = [];

  for (let el = start; (stop - el) * step > 0; el += step) {
    output.push(el);
  }
  return output;
}

module.exports = range;