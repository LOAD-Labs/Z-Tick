// Z-Tick
// -----------
// UI Service for Zephyr
// All managing will be going thru here
// You are not allowed to copy this code and use it on your own or distribute it as your own. Do not edit!

const updater = require("./updater")

const version = "1.0"
const compatible_zephyr_version = "2"

const checkZTickUpdate = async () => {
    try {
        const result = await updater.checkUpdate("./modules/z-tick.js", "https://raw.githubusercontent.com/LOAD-Labs/Z-Tick/refs/heads/main/z-tick.js");
        return result;
    } catch (err) {
        return false;
    }
};

const checkCompatibility = async (currentOSVersion) => {
    if (currentOSVersion === compatible_zephyr_version) {
        console.log(await checkZTickUpdate())
        return true
    } else {
        return false
    }
}

module.exports = { version, compatible_zephyr_version, checkCompatibility }
