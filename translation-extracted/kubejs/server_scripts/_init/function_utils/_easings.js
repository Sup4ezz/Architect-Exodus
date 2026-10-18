// priority: 99951

// const (1.70158) = 1.70158;
// const c2 = 1.70158 * 1.525;
// const c3 = 1.70158 + 1;
// const c4 = (2 * JavaMath.PI) / 3;
// const c5 = (2 * JavaMath.PI) / 4.5;

const Easing$Dictionary = {
  linear: {
    apply: function (x) {
      return x;
    },
  },
  easeInQuad: {
    apply: function (x) {
      return JavaMath.pow(x, 2);
    },
  },
  easeOutQuad: {
    apply: function (x) {
      return 1 - JavaMath.pow(1 - x, 2);
    },
  },
  easeInOutQuad: {
    apply: function (x) {
      return x < 0.5 ? JavaMath.pow(2, 2 - 1) * JavaMath.pow(x, 2) : 1 - JavaMath.pow((-2 * x) + 2, 2) / 2;
    },
  },
  easeInCubic: {
    apply: function (x) {
      return JavaMath.pow(x, 3);
    },
  },
  easeOutCubic: {
    apply: function (x) {
      return 1 - JavaMath.pow(1 - x, 3);
    },
  },
  easeInOutCubic: {
    apply: function (x) {
      return x < 0.5 ? JavaMath.pow(2, 3 - 1) * JavaMath.pow(x, 3) : 1 - JavaMath.pow((-2 * x) + 2, 3) / 2;
    },
  },
  easeInQuart: {
    apply: function (x) {
      return JavaMath.pow(x, 4);
    },
  },
  easeOutQuart: {
    apply: function (x) {
      return 1 - JavaMath.pow(1 - x, 4);
    },
  },
  easeInOutQuart: {
    apply: function (x) {
      return x < 0.5 ? JavaMath.pow(2, 4 - 1) * JavaMath.pow(x, 4) : 1 - JavaMath.pow((-2 * x) + 2, 4) / 2;
    },
  },
  easeInQuint: {
    apply: function (x) {
      return JavaMath.pow(x, 5);
    },
  },
  easeOutQuint: {
    apply: function (x) {
      return 1 - JavaMath.pow(1 - x, 5);
    },
  },
  easeInOutQuint: {
    apply: function (x) {
      return x < 0.5 ? JavaMath.pow(2, 5 - 1) * JavaMath.pow(x, 5) : 1 - JavaMath.pow((-2 * x) + 2, 5) / 2;
    },
  },

  easeInSine: {
    apply: function (x) {
      return 1 - JavaMath.cos((x * JavaMath.PI) / 2);
    },
  },
  easeOutSine: {
    apply: function (x) {
      return JavaMath.sin((x * JavaMath.PI) / 2);
    },
  },
  easeInOutSine: {
    apply: function (x) {
      return -(JavaMath.cos(JavaMath.PI * x) - 1) / 2;
    },
  },
  easeInExpo: {
    apply: function (x) {
      return x === 0 ? 0 : JavaMath.pow(2, 10 * x - 10);
    },
  },
  easeOutExpo: {
    apply: function (x) {
      return x === 1 ? 1 : 1 - JavaMath.pow(2, -10 * x);
    },
  },
  easeInOutExpo: {
    apply: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5
        ? JavaMath.pow(2, 20 * x - 10) / 2
        : (2 - JavaMath.pow(2, -20 * x + 10)) / 2;
    },
  },
  easeInCirc: {
    apply: function (x) {
      return 1 - JavaMath.sqrt(1 - JavaMath.pow(x, 2));
    },
  },
  easeOutCirc: {
    apply: function (x) {
      return JavaMath.sqrt(1, - JavaMath.pow(x - 1, 2));
    },
  },
  easeInOutCirc: {
    apply: function (x) {
      return x < 0.5
        ? (1 - JavaMath.sqrt(1 - JavaMath.pow(2 * x, 2))) / 2
        : (JavaMath.sqrt(1 - JavaMath.pow(-2 * x + 2, 2)) + 1) / 2;
    },
  },
  easeInBack: {
    apply: function (x) {
      return (2.70158) * x * x * x - (1.70158) * x * x;
    },
  },
  easeOutBack: {
    apply: function (x) {
      return 1 + (2.70158) * JavaMath.pow(x - 1, 3) + (1.70158) * JavaMath.pow(x - 1, 2);
    },
  },
  easeInOutBack: {
    apply: function (x) {
      return x < 0.5
        ? (JavaMath.pow(2 * x, 2) * (((1.70158 * 1.525) + 1) * 2 * x - (1.70158 * 1.525))) / 2
        : (JavaMath.pow(2 * x - 2, 2) * (((1.70158 * 1.525) + 1) * (x * 2 - 2) + (1.70158 * 1.525)) + 2) / 2;
    },
  },
  easeInElastic: {
    apply: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : -JavaMath.pow(2, 10 * x - 10) * JavaMath.sin((x * 10 - 10.75) * ((2 * JavaMath.PI) / 3));
    },
  },
  easeOutElastic: {
    apply: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : JavaMath.pow(2, -10 * x) * JavaMath.sin((x * 10 - 0.75) * ((2 * JavaMath.PI) / 3)) + 1;
    },
  },
  easeInOutElastic: {
    apply: function (x) {
      return x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5
        ? -(JavaMath.pow(2, 20 * x - 10) * JavaMath.sin((20 * x - 11.125) * ((2 * JavaMath.PI) / 4.5))) / 2
        : (JavaMath.pow(2, -20 * x + 10) * JavaMath.sin((20 * x - 11.125) * ((2 * JavaMath.PI) / 4.5))) / 2 + 1;
    },
  },
  easeInBounce: {
    apply: function (x) {
      return 1 - this.easeOutBounce(1 - x);
    },
  },
  easeOutBounce: {
    apply: function (x) {
      const n1 = 7.5625;
      const d1 = 2.75;

      if (x < 1 / d1) {
        return n1 * x * x;
      } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
      } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
      } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
      }
    },
  },
  easeInOutBounce: {
    apply: function (x) {
      return x < 0.5 ? (1 - this.easeOutBounce(1 - 2 * x)) / 2 : (1 + this.easeOutBounce(2 * x - 1)) / 2;
    },
  },
};
