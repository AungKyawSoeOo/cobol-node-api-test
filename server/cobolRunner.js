const path = require("path");
const { spawn } = require("child_process");

function runCobol(exeName, inputs = []) {

    const exePath = path.join(__dirname, "../bin", exeName);

    return new Promise((resolve, reject) => {

        const process = spawn(exePath);

        let output = "";

        process.stdout.on("data", (data) => {
            output += data.toString();
        });

        process.stderr.on("data", (err) => {
            reject(err.toString());
        });

        process.on("close", () => {
            resolve(output.trim());
        });

        inputs.forEach(i => process.stdin.write(i + "\n"));
        process.stdin.end();
    });
}

module.exports = runCobol;