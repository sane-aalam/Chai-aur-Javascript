// Fetching data from an API
// Fetching data from an API is a common task in web development.
// async and await are used to handle asynchronous operations in JavaScript.
// async is used to declare an asynchronous function, which returns a promise.

//* FakeApi(example) = 'https://fakestoreapi.com/products/1'

//* then and catch are used to handle the promise returned by an asynchronous function.
// then is used to handle the resolved promise.
// catch is used to handle the rejected promise.
function fetchProduct() {
  fetch("https://fakestoreapi.com/products/1")
    .then((response) => response.json())
    .then((data) => {
      console.log("Product Data:", data);
    })
    .then((error) => {
      console.log("Error:", error);
    });
}

// fetchProduct();

// async and await
// async and await are used to handle asynchronous operations in JavaScript.
// clear and easy to understand
// async is used to declare an asynchronous function, which returns a promise.
// await is used to wait for the promise to be resolved.

const NetfixCardFetched = async () => {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const data = await response.json();
  console.log("Product Data:", data);
};

NetfixCardFetched();
