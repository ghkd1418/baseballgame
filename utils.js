export const $ = (selec) => document.querySelector(selec);

export const getNumberArray = (notNumber) => {
	return notNumber.toString().split("").map(Number);
};

export const resetOutput = () => {
	$("#user-input").value = "";
};
