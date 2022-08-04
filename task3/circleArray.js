// Створити структуру типу «Кільцевий масив», яка буде створюватися так let
// circledArray = new circleArray(). Елементи створюються так
// circledArray.add("Київ"), circledArray.add("Харків"), circledArray.add("Херсон").
// При наступних зверненнях circledArray.get(4) та circledArray.get(-1) мають
// повернутися результати “Харків” та “Херсон”, відповідно.

class circleArray {
    constructor() {
        this._arr = [];
    }

    add(elem) {
        this._arr.push(elem);
    }

    get(index) {
        index = index % this._arr.length;
        if (index < 0 && index !== -0) {
            index = this._arr.length + index;
        }
        return this._arr[index];
    }
}
