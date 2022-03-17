export function romanToInteger(str) {
    let result = 0;
    let curNumber;
    let nextNumber;

    for (let i = 0; i < str.length - 1; i++) {
        curNumber = toArabic(str[i]);
        nextNumber = toArabic(str[i + 1]);

        if (curNumber < nextNumber) {
            result -= curNumber;
        } else {
            result += curNumber;
        }
    }

    result += toArabic(str[str.length - 1]);

    return result;
}

function toArabic(rN) {
    let aN;

    switch (rN) {
        case 'I':
            aN = 1;
            break;

        case 'V':
            aN = 5;
            break;

        case 'X':
            aN = 10;
            break;

        case 'L':
            aN = 50;
            break;

        case 'C':
            aN = 100;
            break;

        case 'D':
            aN = 500;
            break;

        case 'M':
            aN = 1000;
            break;
    }

    return aN;
}
