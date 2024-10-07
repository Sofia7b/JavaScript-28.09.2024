// Скалярні типи та посилання
// Підготуйте дві реалізації функції inc:
//     З сигнатурою inc(n: number): number, 
//     приклад виклику: const a = 5; const b = inc(a); console.dir({a, b});
//     
//     З сигнатурою inc(num: Num), де Num є об'єктом з полем n, 
//     щоб функція змінила поле вихідного об'єкта, переданого 
//     за посиланням, приклад виклику 
//     const obj = { n: 5 }; inc(obj); console.dir(obj);

/*
const boiler = {
    // свойство (property, prop): значение, свойство: значение, ...
    material: "steel",
    volume: 2,
    power: 1200,
    price: 3600
};

console.log(boiler);
console.dir(boiler);

const cap = {material:"plastic", volume:0.2};
console.dir(cap);
*/

// объявление функции
function inc(num) {
    num.n++;
}

const obj = { n: 5 }; 
inc(obj); 
console.dir(obj);

for(let i = 0; i < 3; ++i) {
    // вызов функции 
    inc(obj); 
    // вывод анонимного объекта со свойствами i, b
    // console.dir(obj);
    console.log(`i = ${i}, obj.n = ${obj.n}`);
}
