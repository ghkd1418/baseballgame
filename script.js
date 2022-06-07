import { $, getNumberArray, resetOutput } from "./utils.js";
import getComputerInput from "./getComputerInput.js";
import printError from "./printError.js";
import getResult from "./compare.js";

let computerInput = getComputerInput();

//
// const play = (computerInputNumbers, userInputNumbers) => {
// 	if (
// 		!Array.isArray(computerInputNumbers) &&
// 		!Array.isArray(userInputNumbers)
// 	) {
// 		computerInputNumbers = getNumArr(computerInputNumbers);
// 		userInputNumbers = getNumArr(userInputNumbers);
// 	}

// 	return getResult(computerInputNumbers, userInputNumbers);
// };

const printResult = (result) => {
	if (result === "정답") {
		$("#result").innerHTML =
			"<strong> 🎉정답입니다. </strong> <p> 게임을 새로 시작하시겠습니까? </p><button id=restart> 게임 재시작</button>";
		return;
	}
	$("#result").innerText = result;
};

const isAvailable = (userInputNumbers) => {
	if (
		userInputNumbers.includes(0) ||
		userInputNumbers.includes(NaN) ||
		userInputNumbers.length !== 3 ||
		[...new Set(userInputNumbers)].length !== 3
	)
		return printError(userInputNumbers), resetOutput();
	return printResult(getResult(computerInput, userInputNumbers));
};

const restartGame = () => {
	$("#result").innerHTML = "";
	resetOutput();
	computerInput = getComputerInput();
};

$("#input-form").addEventListener("submit", (event) => {
	event.preventDefault();
	const userInputNumbers = getNumberArray($("#user-input").value);
	isAvailable(userInputNumbers);
});

$("#result").addEventListener("click", (e) => {
	if (e.target.id === `restart`) {
		restartGame();
	}
});
