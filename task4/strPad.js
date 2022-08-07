// Опишіть функцію strPad, яка доповнює рядок іншим рядком до заданої довжини. Функція
// приймає наступні аргументи input - вхідний рядок, fullLen - довжина кінцевого рядка, fillStr
// - рядок, fillType - 'FILL_RIGHT', 'FILL_LEFT', 'FILL_BOTH'. Приклади, викликів функції:
// strPad('star', 10, '_*_'); // star_*__*_
// strPad('star', 8, '_*_', 'FILL_LEFT' ); // _*__star
// strPad('star', 8, '*', 'FILL_BOTH'); // **star**

function strPad(input, fullLen, fillStr, fillType = 'FILL_RIGHT') {
    let restLen = fullLen - input.length;
    if (restLen <= 0 || fillStr === '') {
        return str;
    }

    let rightFill = '';
    let leftFill = '';
    let rightCount = 0;
    let leftCount = 0;

    switch(fillType) {
    case 'FILL_RIGHT':
        rightCount = restLen;
        break;
    case 'FILL_LEFT':
        leftCount = restLen;
        break;
    case 'FILL_BOTH':
        rightCount = Math.floor(restLen / 2);
        leftCount = restLen - rightCount;
        break;
    }

    rightFill = fillStr.repeat(Math.ceil(rightCount / fillStr.length));
    leftFill = fillStr.repeat(Math.ceil(leftCount / fillStr.length));

    rightFill = rightFill.slice(0, rightCount);
    leftFill = leftFill.slice(0, leftCount);

    return leftFill + input + rightFill;
}