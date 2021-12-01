const util = require('util');
// typical Node.js error-first callback function
function getUser (id, callback) {
    return setTimeout(() => {
      if (id === 5) {
        callback(null, { nickname: 'Teddy' });
      } else {
        callback(new Error('User not found'));
      }
    }, 1000);
  }
   
  function callback (error, user) {
    if (error) {
      console.error(error.message);
      process.exit(1);
    }
    console.log(`User found! Their nickname is: ${user.nickname}`);
  }
   
  // change the getUser function into promise using `util.promisify()`
  const getUserPromise = util.promisify(getUser);
   
  // now you're able to use then/catch or async/await syntax
  getUserPromise(id)
    .then((user) => {
        console.log(`User found! Their nickname is: ${user.nickname}`);
    })
    .catch((error) => {
        console.log('User not found', error);
    });