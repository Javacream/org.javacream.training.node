function firstAsyncFunction(delay){
    console.log("Entering firstAsyncFunction at " + new Date())
      var result = new Promise((resolve) => {
          setTimeout(() => resolve("World"), delay);
      });
      return result;
  }
  function secondAsyncFunction(param, delay){
      console.log("Entering secondAsyncFunction at " + new Date())
      var result = new Promise((resolve) => {
          setTimeout(() => resolve(`Hello ${param}`), delay);
      });
      return result;
  }

  console.log("calling firstAsyncFunction at " + new Date())
console.log("finished...")
firstAsyncFunction(1000).then((res) => secondAsyncFunction(res, 2000)).then((res) => console.log(`Resolving result ${res} at ${new Date()}`))
Promise.all([firstAsyncFunction(1000), secondAsyncFunction("all", 1000)]).then((res) => {console.log("Finishing Promise.all at " + new Date() + res)})