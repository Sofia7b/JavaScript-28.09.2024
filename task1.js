// Скалярні типи та посилання
// Підготуйте дві реалізації функції inc:
//     З сигнатурою inc(n: number): number, 
//     приклад виклику: const a = 5; const b = inc(a); console.dir({a, b});
//     
//     З сигнатурою inc(num: Num), де Num є об'єктом з полем n, 
//     щоб функція змінила поле вихідного об'єкта, переданого 
//     за посиланням, приклад виклику 
//     const obj = { n: 5 }; inc(obj); console.dir(obj);

// объявление функции
function inc(n) {
    let c = n + 1;
    return c;
} 

const a = 5; const b = inc(a); console.dir({a, b});

for(let i = 0; i < 3; ++i) {
    // вызов функции 
    let b = inc(i); 
    // вывод анонимного объекта со свойствами i, b
    // console.dir({i, b});
    console.log(`i = ${i}, b = ${b}`);
}