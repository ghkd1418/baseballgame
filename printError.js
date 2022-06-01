const printError = (userInputNumbers) => {
	if (userInputNumbers.includes(0)) {
		alert("⛔0을 제외한 1~9까지의 숫자를 입력하세요.");
	}
	if (userInputNumbers.includes(NaN)) {
		alert("⛔숫자를 입력해주세요.");
	}
	if (userInputNumbers.length !== 3) {
		alert("⛔숫자를 3개 입력하세요.");
	}
	if ([...new Set(userInputNumbers)].length !== 3) {
		alert("⛔중복은 허용하지 않습니다..");
	}
};

export default printError;
