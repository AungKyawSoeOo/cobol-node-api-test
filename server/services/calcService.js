const koffi = require("koffi");
const path = require("path");

const addLibPath = path.join(__dirname, "../../bin/add.dll");
const subLibPath = path.join(__dirname, "../../bin/sub.dll");

const addLib = koffi.load(addLibPath);
const subLib = koffi.load(subLibPath);

const addFunc = addLib.func("ADDNUM", "void", ["int32*", "int32*", "int32*"]);
const subFunc = subLib.func("SUBNUM", "void", ["int32*", "int32*", "int32*"]);

// Initialize the COBOL runtime
const libcob = koffi.load("libcob-4.dll");
const initCobol = libcob.func("cob_init", "void", ["int", "void*"]);
initCobol(0, null);

async function add(a, b) {
    let aBuf = Buffer.alloc(4);
    aBuf.writeInt32LE(parseInt(a));
    let bBuf = Buffer.alloc(4);
    bBuf.writeInt32LE(parseInt(b));
    let resBuf = Buffer.alloc(4);

    addFunc(aBuf, bBuf, resBuf);
    return resBuf.readInt32LE();
}

async function sub(a, b) {
    let aBuf = Buffer.alloc(4);
    aBuf.writeInt32LE(parseInt(a));
    let bBuf = Buffer.alloc(4);
    bBuf.writeInt32LE(parseInt(b));
    let resBuf = Buffer.alloc(4);

    subFunc(aBuf, bBuf, resBuf);
    return resBuf.readInt32LE();
}

module.exports = { add, sub };