// У змінній names міститься рядок: "Lennon, John\nMcCartney, Paul\nHarrison, George\nStar,
// Ringo". Використовуючи регулярні вирази, отримати рядок виду:
// John Lennon
// Paul McCartney
// George Harrison
// Ringo Star
// Оформити код у вигляді функції.

function replaceNames(names) {
    let reg = /([a-zA-Z]+), ([a-zA-Z]+)/g;
    return names.replace(reg, '$2 $1');
}