let hoten = "Trần Phú Đạt";
let masv = "PS22352";
let ns = "14/03/2003";

let a = 20; //width
let b = 30;//height
let x = (a + b) * 2;
let y = a * b;
let chuvi = `<b> ${x} <b>`;
let dientich = `<b> ${y} <b>`;

function Program1() {
    pr_1 = `
    <h2>Thông tin cá nhân</h2>
    <p>Cách 1</p>
    <p><span> Họ tên: </span><b id="hoten"></b></p>
    <p><span> Mã SV: </span><b id="masv"></b></p>
    <p><span> Ngày sinh: </span><b id="ns"></b></p>
`
    document.getElementById('program').innerHTML = pr_1;
}

function handle_1() {
    document.getElementById('hoten').innerHTML = hoten;
    document.getElementById('masv').innerHTML = masv;
    document.getElementById('ns').innerHTML = ns;
}

function Program2() {
    pr_2 = `<h2>Thông tin cá nhân</h2>
    <p>Cách 2</p>
    <p><span> Họ tên: </span><b>${hoten}</b></p>
    <p><span> Mã SV: </span><b>${masv}</b></p>
    <p><span> Ngày sinh: </span><b>${ns}</b></p>`
    document.getElementById('program').innerHTML = pr_2;
}

function Program3() {

    pr_3 = `
    <h2>Tính chu vi diện tích</h2> <p>Hình chữ nhật: ${a} ; ${b}</p>
    <br>
    <b>Chu vi:</b> ${chuvi}
    <br>
    <b>Diện tích:</b> ${dientich}
    `
    document.getElementById('program').innerHTML = pr_3;
}

function Program4() {
    pr_4 = `
    <p>Máy tính<p>
    <div class="calculator">
    <div class="calculator__display">0</div>
    <div class="calculator__keys">
        <button class="key--operator" data-action="add">+</button>
        <button class="key--operator" data-action="subtract">-</button>
        <button class="key--operator" data-action="multiply">&times;</button>
        <button class="key--operator" data-action="divide">÷</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button data-action="decimal">.</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button class="key--equal" data-action="calculate">=</button>
        <button>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button data-action="clear">AC</button>
    </div>
</div>`
    document.getElementById('program').innerHTML = pr_4;

    const calculator = document.querySelector('.calculator');
    const keys = calculator.querySelector('.calculator__keys');
    const display = document.querySelector('.calculator__display');
    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            // Do something
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;
            Array.from(key.parentNode.children)
                .forEach(k => k.classList.remove('is-depressed'));
            if (!action) {
                console.log('number key!');
                if (displayedNum === '0' || calculator.dataset.previousKeyType === 'operator') {
                    display.textContent = keyContent;
                } else {
                    display.textContent = displayedNum + keyContent;
                }
                calculator.dataset.previousKeyType = 'number';
            }
            if (
                action === 'add' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide'
            ) {
                console.log('operator key!');
                key.classList.add('is-depressed');
                calculator.dataset.previousKeyType = 'operator';
                calculator.dataset.firstValue = displayedNum;
                calculator.dataset.operator = action;
            }
            if (action === 'decimal') {
                let k = calculator.dataset.previousKeyType;
                console.log(k);
                if (!displayedNum.includes('.') && k != 'operator') {
                    display.textContent = displayedNum + '.';
                } else if (k == 'operator') {
                    display.textContent = '0.';
                }
                calculator.dataset.previousKeyType = 'decimal';
            }
            if (action === 'clear') {
                console.log('clear key!');
                display.textContent = "0";
                calculator.dataset.previousKeyType = 'clear';
            }
            if (action === 'calculate') {
                console.log('equal key!');
                const firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                const secondValue = displayedNum;
                if (firstValue != undefined && operator != undefined) {
                    display.textContent = calculate(firstValue, operator, secondValue);
                    calculator.dataset.previousKeyType = 'calculate';
                }
            }

        }
    });
}

function calculate(firstNum, operator, secondNum) {
    if (operator === 'add') {
        return parseFloat(firstNum) + parseFloat(secondNum);
    }
    if (operator === 'subtract') {
        return parseFloat(firstNum) - parseFloat(secondNum);
    }
    if (operator === 'multiply') {
        return parseFloat(firstNum) * parseFloat(secondNum);
    }
    if (operator === 'divide') {
        return parseFloat(firstNum) / parseFloat(secondNum);
    }
}

