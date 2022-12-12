const myCounter = function ({ rootSelector, counterValue = 0, step = 1 } = {}) {
  this._value = counterValue;
  this._step = step;
  this._ref = this._obtainRef(rootSelector);
  this._events();
};

myCounter.prototype._obtainRef = function (rootSelector) {
  const ref = {};
  ref.case = document.querySelector(rootSelector);
  ref.incrementBtn = ref.case.querySelector('[data-action="increment"]');
  ref.decrementBtn = ref.case.querySelector('[data-action="decrement"]');
  ref.value = ref.case.querySelector("#value");
  console.log(ref.case);

  return ref;
};

myCounter.prototype._events = function () {
  this._ref.incrementBtn.addEventListener("click", () => {
    this.increment();
    this.changeIncomingVal();
    console.log(this);
  });

  this._ref.decrementBtn.addEventListener("click", () => {
    this.decrement();
    this.changeIncomingVal();
    console.log(this);
  });
};

myCounter.prototype.changeIncomingVal = function () {
  this._ref.value.textContent = this._value;
};

myCounter.prototype.increment = function () {
  this._value += this._step;
};

myCounter.prototype.decrement = function () {
  this._value -= this._step;
};

const counterNew = new myCounter({ rootSelector: "#counter", step: 1 });
console.log(myCounter);
console.log(counterNew);
