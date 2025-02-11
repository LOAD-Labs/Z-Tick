// Z-Tick
// -----------
// UI Service for Zephyr
// All managing will be going thru here
// You are not allowed to copy this code and use it on your own or distribute it as your own. Do not edit!

const updater = require("./updater")

const version = "1.0"
const compatible_zephyr_version = "2.0.0"

const checkZTickUpdate = async () => {
    try {
        const result = await updater.checkUpdate("./modules/z-tick.js", "https://load-labs.github.io/Z-Tick/z-tick.js");
        return result;
    } catch (err) {
        return false;
    }
};

const checkCompatibility = async (currentOSVersion) => {
    if (currentOSVersion === compatible_zephyr_version) {
        return true
    } else {
        return false
    }
}

module.exports = { version, compatible_zephyr_version, checkCompatibility, checkZTickUpdate }
