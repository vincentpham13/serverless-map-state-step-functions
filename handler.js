'use strict';

module.exports.LogInvocationTime = async (event) => {
  const invocationTime = `Invocation Time: ${new Date().getTime()}`;
  console.log(invocationTime);

  return invocationTime;
};

module.exports.FailFunction = async (event) => {
  const product = event.Payload.ShippedItem;
  function CustomError(message) {
    this.name = 'CustomError';
    this.message = message;
  }

  CustomError.prototype = new Error();

  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`${product.prod}:Generating a random number...`);

  if (randomNumber > 50) {
    throw new CustomError(`${product.prod}:Output should not be greater than 50`);
  }

  console.log(`${product.prod}:Generated number: ${randomNumber}`);
  return randomNumber;
};
