# Animate Number 235

Lightweight class to animate numbers written in typescript.
We also provide ES6 module.

## Installation

`npm install --save-dev animate-number-235`

## Usage

As a function

```javascript
import { animateNumber } from 'animate-number-235';

const elDObj = document.getElementById('element-wherein-animate-number');
const oldNumber = parseInt(elDObj.innerHTML, 10) || 0;
const newNumber = 20000;
const speed = 5000; // Animate number for 5 seconds

animateNumber(elDObj, parseInt(elDObj.innerHTML, 10) || 0, newNumber, speed);
```

As a class

```javascript
import { AnimateNumber } from 'animate-number-235';

const elDObj = document.getElementById('element-wherein-animate-number');
const an = new AnimateNumber(elDObj);

const oldNumber = parseInt(elDObj.innerHTML, 10) || 0;
const newNumber = 20000;
const speed = 5000; // Animate number for 5 seconds

an.animate(oldNumber, newNumber, speed);
```

## Development requirements

* Install typescript: `npm install -g typescript`
* Install dependecies: `npm install`
