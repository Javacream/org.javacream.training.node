let clock = setInterval(() => {
    console.log(new Date())}, 1000)
setTimeout(()=> {clearInterval(clock)}, 10000)