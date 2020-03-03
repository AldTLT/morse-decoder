const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    console.log(expr);
    let arr = [];
    arr = exprDivide(expr, arr, 10);

    return arr.map(expression => {
        let exprArr = [];
        exprArr = exprDivide(expression, exprArr, 2);

        exprArr = exprArr.map(d => {
            return d == '00' ? '' :
                d == '10' ? '.' :
                    d == '11' ? '-' :
                        ' ';
        }).join('');

        let letter = MORSE_TABLE[exprArr];
        return letter === undefined ? ' ' : letter;

    }).join('');
}

//Method recursive divided expression and returns array with parts of this one.
function exprDivide(expr, arr, number) {
    //debugger;
    arr = expr.length > number ? (
        arr.push(expr.substring(0, number)),
        exprDivide(expr.substring(number), arr, number)
    )
        : (
            arr.push(expr),
            arr
        );

    return arr;
}

module.exports = {
    decode
}