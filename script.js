import { $, getNumberArray, resetOutput } from "./utils.js";
import getComputerInput from "./getComputerInput.js";
import printError from "./printError.js";

console.log(getComputerInput());

const printResult = () => {
	$("#result").innerHTML =
		"<strong> 🎉정답입니다. </strong> <p> 게임을 새로 시작하시겠습니까? </p><button id=restart> 게임 재시작</button>";
};

const isAvailable = (userInputNumbers) => {
	if (
		userInputNumbers.includes(0) ||
		userInputNumbers.includes(NaN) ||
		userInputNumbers.length !== 3 ||
		[...new Set(userInputNumbers)].length !== 3
	)
		return printError(userInputNumbers), resetOutput();
	return printResult(userInputNumbers);
};

$("#input-form").addEventListener("submit", (event) => {
	event.preventDefault();
	const userInputNumbers = getNumberArray($("#user-input").value);
	isAvailable(userInputNumbers);
	console.log(userInputNumbers);
});
