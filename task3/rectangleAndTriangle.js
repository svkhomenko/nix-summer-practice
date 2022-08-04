// Напишіть функції-конструктори, які виводитимуть на сторінку зафарбовані
// прямокутник та трикутник, відповідно.

function Rectangle(height = '200px', width = '200px', color = 'red') {
    this.height = height;
    this.width = width;
    this.color = color;

    this.draw = function() {
        this.div = document.createElement('div');
        this.div.className = 'rectangle';
        this.div.style.height = this.height;
        this.div.style.width = this.width;
        this.div.style.backgroundColor = this.color;
        this.div.style.margin = '10px';
        document.body.append(this.div);
    };

    this.draw();
}

function Triangle(height = '200px', width = '100px', color = 'blue') {
    this.height = height;
    this.width = width;
    this.color = color;

    this.draw = function() {
        this.div = document.createElement('div');
        this.div.className = 'rectangle';
        this.div.style.height = '0px';
        this.div.style.width = '0px';
        this.div.style.borderLeft = `${this.width} solid transparent`;
        this.div.style.borderRight = `${this.width} solid transparent`;
        this.div.style.borderBottom = `${this.height} solid ${this.color}`;
        this.div.style.margin = '10px';
        document.body.append(this.div);
    };

    this.draw();
}
