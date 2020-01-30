export default function fadeIn(targets, classToAdd) {
  const options = {
    threshold: 1.0,
  }
  if ('IntersectionObserver' in window) {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          target.classList.add(classToAdd);
          intersectionObserver.unobserve(target);
        }
      });
    }, options);

    targets.forEach(function (target) {
      intersectionObserver.observe(target);
    });
  } else {
    // Possibly fall back to a more compatible method here
    console.log('IntersectionObserver in not supported for this browser');
  }
};

// Source: http://fofwebdesign.co.uk/template/_testing/scroll-in-view/add-class-to-element-when-in-view.htm
export default function elementFromBottom(elem, classToAdd, distanceFromBottom) {
  elem.forEach(el => {
    const distTop = el.getBoundingClientRect().top;
    const distBottom = window.innerHeight - distTop;
    if (distBottom >= distanceFromBottom) {
      el.classList.add(classToAdd);
    } else {
      el.classList.remove(classToAdd);
    }
  });
};

// Ryan Taylor comment - https://remysharp.com/2010/07/21/throttling-function-calls
export default function throttle(fn, ms) {
  var time, last = 0;
  return function () {
    var a = arguments,
      t = this,
      now = +(new Date),
      exe = function () {
        last = now;
        fn.apply(t, a);
      };
    clearTimeout(time);
    (now >= last + ms) ? exe(): time = setTimeout(exe, ms);
  }
};