// Опишіть функцію substrCount(), яка повертає кількість входжень підрядка.
// Функція приймає такі аргументи: input – рядок, у якому ведеться пошук, needle
// – підрядок, що шукається, offset - зміщення початку відліку, length –
// максимальна довжина рядка, у якій буде здійснюватися пошук підрядку після
// зазначеного зсуву. Приклад виклику: substrCount('Good Golly Miss Molly', 'll', 7, 10).

function substrCount(input, needle, offset, length) {
    input = input.slice(offset, offset + length);
    return input.split(needle).length - 1;
}
