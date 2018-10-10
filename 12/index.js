const pressedKeys = [],
      secretCode = 'hello';

window.addEventListener('keyup', (e) => {
  secretCode[pressedKeys.length] === e.key ? pressedKeys.push(e.key) : pressedKeys.length = 0;

  if (pressedKeys.join('') === secretCode) {
    console.info('hello you handsome devil!');
    cornify_add();
    pressedKeys.length = 0;
  }
})
