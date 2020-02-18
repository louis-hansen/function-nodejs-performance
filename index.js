module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    let j = 0;
    const n = 100000000
    for (let i = 0; i < n; i++) {
        j = i + j;
    }
    context.log('going to sleep')
    await sleep(1000)
    context.log('waking from sleep')
    for (let i = 0; i < n; i++) {
        j = i + j;
    }
    context.log(j)
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Hello " + j
    };
};
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}