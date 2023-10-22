// utils.js

export const getValueOrZero = (val) => {
    return val == null ? 0 : val;
}

export const getFrenchName = (name) => {
    const words = name.split('/');
    return words.length === 1 ? name.trim() : words[1].trim();;
}