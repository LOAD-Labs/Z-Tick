// Z-Tick
// -----------
// UI Service for Zephyr
// All managing will be going thru here
// You are not allowed to copy this code and use it on your own or distribute it as your own. Do not edit!

const version = "1.1"
const compatible_zephyr_version = "2"

const checkZTickUpdate = () => {
    return false
}

const checkCompatibility = (currentOSVersion) => {
    if (currentOSVersion === compatible_zephyr_version) {
        return true
    }
}

module.exports = { version, compatible_zephyr_version, checkCompatibility }
