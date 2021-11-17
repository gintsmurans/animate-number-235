export class AnimateNumber {
    constructor(el) {
        this.el = el;
    }
    updateElement(value) {
        if (this.el.nodeName === 'INPUT') {
            this.el.value = value;
        }
        else {
            this.el.innerHTML = value;
        }
    }
    animate(valueFrom, valueTo, speed = 200) {
        if (valueFrom === valueTo) {
            return;
        }
        const animatationSpeed = (speed === null || speed === undefined ? 500 : speed);
        const step = Math.ceil((Math.abs(valueTo - valueFrom)) / animatationSpeed);
        const minus = valueFrom > valueTo;
        let currentValue = valueFrom;
        let lastTime = Date.now();
        const animate = () => {
            const newTime = Date.now();
            const dt = Date.now() - lastTime;
            lastTime = newTime;
            if ((minus === true && currentValue > valueTo)
                || (minus === false && currentValue < valueTo)) {
                if (minus === true) {
                    currentValue -= (step * dt);
                }
                else {
                    currentValue += (step * dt);
                }
                this.updateElement(`${currentValue}`);
                requestAnimationFrame(animate);
            }
            else {
                this.updateElement(`${currentValue}`);
            }
        };
        requestAnimationFrame(animate);
    }
}
export function animateNumber(el, valueFrom, valueTo, speed = 200) {
    const an = new AnimateNumber(el);
    an.animate(valueFrom, valueTo, speed);
}
//# sourceMappingURL=animate-number.js.map