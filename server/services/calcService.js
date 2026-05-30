const runCobol = require("../cobolRunner");

async function add(a, b) {
    const result = await runCobol("add.exe", [a, b]);
    return parseInt(result);
}

async function sub(a, b) {
    const result = await runCobol("sub.exe", [a, b]);
    return parseInt(result);
}

module.exports = { add, sub };