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
	if (result === "μ λ΅") {
		$("#result").innerHTML =
			"<strong> πμ λ΅μλλ€. </strong> <p> κ²μμ μλ‘ μμνμκ² μ΅λκΉ? </p><button id=restart> κ²μ μ¬μμ</button>";
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
