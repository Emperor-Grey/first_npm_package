function hello(message = 'hello world', logFunction = true) {
  if (logFunction) {
    console.log(message);
  }
  return message;
}

module.exports = hello;
