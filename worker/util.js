// Utilities for the implemented custom service worker.

module.exports = () => {
  console.log('Hello from example util.');
  console.log('es6+ syntax test:');
  const foo = { message: 'working' };
  console.log(foo?.message);
};
