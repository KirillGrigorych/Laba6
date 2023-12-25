// Написать функцию f(x, C), вычисляющую и возвращающую число Y, 
// полученное из целого числа Х, приписываем к нему справа цифры С.
// Продемонстрировать её работу для трёх чисел.
function numbers(x, C){
	let string_x = String(x);
	let string_C = String(C);
	let string_y = string_x + string_C;
	let number_y = Number(string_y);
	return number_y;
}

let number_1 = Number(prompt("Введите 1-ое число "));
let number_2 = Number(prompt("Введите 2-ое число "));
console.log(numbers(number_1, number_2));