var array = [];

// answer represents the answer that is trump's
var Question = function(question, left, right, answer) {
	this.question = question;
	var ran = Math.getRandomInt(0, 2);
	if (ran === 0) {
		this.left = left;
		this.right = right;
	}
	else {
		this.left = right;
		this.right = left;
	}

	this.answer = answer;
}
// score('UK') w answer of 'Germany' -> return 0
Question.prototype.score (answer) {
	if (this.answer === answer) {
		return 1;
	}
	return 0;
}

array.push(new Question('Which country would you rather live in?', 'Germany', 'United Kingdom', 'Germany'));
array.push(new Question('Which city would you rather live in?', 'New York City', 'Chicago', 'New York City'));
array.push(new Question('Which college would you rather go to?', 'University of Pennsylvania', 'Yale University', 'University of Pennsylvania'));
array.push(new Question('Do you drink alcohol?', 'Yes', 'No', 'No'));
array.push(new Question('Which occupation would you rather be?', 'Actor', 'Senator', 'Actor'));
array.push(new Question('Which award would you rather win?', 'Emmy', 'Grammy', 'Emmy'));
array.push(new Question('Which sport would you rather do?', 'WWE', 'Swimming', 'WWE'));
array.push(new Question('Which media would you rather consume?', 'TV', 'Books', 'TV'));
array.push(new Question('Who was more of a villain?', 'Macbeth', 'Lady Macbeth', 'Macbeth'));
array.push(new Question('If your spouse cheated on you, what would you do?', 'Divorce them', 'Stick with them', 'Divorce them'));
array.push(new Question('When greeting someone, what do you go for?', 'Handshake', 'Fist bump', 'Fist bump'));
array.push(new Question('Which type of food do you prefer more?', 'Fast Food', 'Spicy Food', 'Fast Food'));
array.push(new Question('Who would you ask to determine a man\'s penis size?', 'His wife', 'His mistress', 'His wife'));
array.push(new Question('Which color would you rather wear?', 'Gold', 'Yellow', 'Gold'));
array.push(new Question('Which movie would you rather watch?', 'Citizen Kane', 'The Wizard of Oz', 'Citizen Kane'));
array.push(new Question('Which artist would you rather be forced to listen to for the rest of your life?', 'Queen', 'Katy Perry', 'Queen'));


var getQuestion = function() {
	if (array.length > 0) {
		var index = Math.getRandomInt(0,array.length);
		var result = array.splice(index, 1);
		return result;
	}
	else {
		// no more questions to ask
	}
}

var numQuestions = function() {
	return array.length;
}