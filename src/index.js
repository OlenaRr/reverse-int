module.exports = function reverse (numb) {
    answ = ""
	if (typeof (numb) === "number") {
		for (let i = (Math.abs(numb).toString()).length - 1; i >= 0 ; i--) {
			answ += Math.abs(numb).toString()[i];
		}
		return Number(answ);
	}
	else {
		answ = "Not a number!";
		return answ;
	}
}
