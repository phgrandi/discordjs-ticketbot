/**
* @author 5antos#4876
* @param {object} placeholders Object containing the strings that should replace each placeholder
* @param {string} string String with placeholders
* @param {string[]} [delimiters=['{','}']] Array with delimiters for the placeholders
* @returns {string} Formatted string
*/

function applyPlaceholders(placeholders, string, delimiters = ['{', '}']) {
    return string.replace(new RegExp(Object.keys(placeholders).map(k => `${delimiters[0]}${k}${delimiters[1]}`).join('|'), 'g'), match => placeholders[match.replace(new RegExp(delimiters.join('|'), 'g'), '')])
}

module.exports = applyPlaceholders;

// ALL CREDITS TO 5ANTOS#4876
// ALL CREDITS TO 5ANTOS#4876
// ALL CREDITS TO 5ANTOS#4876
// ALL CREDITS TO 5ANTOS#4876
// ALL CREDITS TO 5ANTOS#4876