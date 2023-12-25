// 15.Написать функцию f(r), вычисляющую и возвращающую длину окружности по значению радиуса r. 
// Продемонстрировать работу функции для двух значений радиуса.
function length_circle(r){
	let pi = Math.PI;
	let length = 2 * (Math.floor(pi * 100) / 100) * r;
	return ("Длина окружности - " + length.toFixed(1));
}
let rad = Number(prompt("Введите целое число:"));
if (rad >= 0){
	console.log(length_circle(rad));
}
