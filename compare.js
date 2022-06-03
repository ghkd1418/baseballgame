const countStrikeAndBall = (userInputNumbers, computerInputNumbers) => {
	let countStrike = 0;
	let countball = 0;
	for (let i = 0; i < 3; i++) {
		if (computerInputNumbers.indexOf(userInputNumbers[i]) == i) {
			countStrike++;
		} else if (
			computerInputNumbers.indexOf(userInputNumbers[i]) !== i &&
			computerInputNumbers.indexOf(userInputNumbers[i]) !== -1
		) {
			countball++;
		}
	}
	return [countStrike, countball];
};

const getResult = (userInputNumbers, computerInputNumbers) => {
	let [strike, ball] = countStrikeAndBall(
		userInputNumbers,
		computerInputNumbers
	);
	if (strike === 3) {
		return "정답";
	}
	if (!strike && !ball) {
		return "낫싱";
	}
	return `${ball ? ball + "볼 " : ""}${strike ? strike + "스트라이크" : ""}`;
};

export default getResult;
