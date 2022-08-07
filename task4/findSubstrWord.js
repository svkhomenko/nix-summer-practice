// Задано рядок «Ми знаємо, що монохромний колір – це градації сірого». Напишіть
// функцію, яка знайде в ній слово, що містить підрядок "хром".

function findSubstrWord(str, substr) {
    let substrIndex = str.indexOf(substr);
    if (substrIndex === -1) {
        return '';
    }

    let beginIndex = str.lastIndexOf(' ', substrIndex);
    let endIndex = str.indexOf(' ', substrIndex);
    if (endIndex === -1) {
        endIndex = str.length;
    }

    return str.slice(beginIndex + 1, endIndex);
}