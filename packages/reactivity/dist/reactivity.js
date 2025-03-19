// packages/share/src/index.ts
function isObject(val) {
  return val !== null && typeof val === "object";
}

// packages/reactivity/src/reactive.ts
var mutableHandlers = {
  get(target, key) {
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    return Reflect.set(target, key, value);
  }
};
function reactive(target) {
  return createReactive(target);
}
function createReactive(target) {
  if (!isObject(target)) {
    return;
  }
  const proxy = new Proxy(target, mutableHandlers);
  return proxy;
}

// packages/reactivity/src/effect.ts
function effect(fn) {
  fn();
}
export {
  effect,
  reactive
};
//# sourceMappingURL=reactivity.js.map
