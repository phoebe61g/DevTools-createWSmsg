/* Measure the time difference between sending and echoing. */
let socket = temp1;
const del = new Uint8Array([0x00, 0x7f]);
let timestamp1;
let timestamp2;
let timelog = [];
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function waitForMessage(msg) { // Send and wait for response.
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      socket.removeEventListener('message', receiveMessage);
      reject(new Error('Timeout: No message received within the specified time.'));
    }, 10000); // Set timeout 10 sec.
    function receiveMessage(event) {
      timestamp2 = new Date();
      if (event.data instanceof ArrayBuffer) {
        clearTimeout(timeout);
        socket.removeEventListener('message', receiveMessage);
        resolve(timestamp2 - timestamp1); // The unit is milliseconds.
      }
    }
    socket.addEventListener('message', receiveMessage);
    socket.send(msg);
    timestamp1 = new Date();
  });
}

(async () => {
  try {
    for (let i = 0; i < 10; i++) {
        for (let c = 0x61; c <= 0x7a; c++) { // Enter a to z and delete them.
            const input = new Uint8Array([0x00, c]);
            const time_add = await waitForMessage(input);
            timelog.push(`${time_add} milliseconds.`);
            //await sleep(1000);
            const time_del = await waitForMessage(del);
            timelog.push(`${time_del} milliseconds.`);
            //await sleep(1000);
        }
    }
  } catch (error) {
    console.error(error.message);
  }
})();
