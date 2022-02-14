// Generate random Hex format color
export function generateHex() {
    return `#${randomNumber(16777215).toString(16)}`
}

// Generate random Rgb format color
export function generateRGB() {
    return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(
        255
    )})`
}

// Generate random Hsl format color
export function generateHSL() {
    return `hsl(${randomNumber(359) + 1}, ${randomNumber(100)}%, ${randomNumber(
        100
    )}%)`
}

// Generate random number 0 - {max}
function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1))
}
