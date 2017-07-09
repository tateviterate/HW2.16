function getString() {
	string = document.getElementById("myString").value;
}

function toUpCase() {
	getString();
	var str = string.split(" ");
	var res = [];
	for(var i = 0; i < str.length; i++){
		res.push(str[i].charAt(0).toUpperCase() + str[i].substr(1));
	}
	document.getElementById("resString").innerHTML = res.join(' ');
}

function countVowels() {
	getString();
	var res = string.match(/[aeiouy]/ig);
	document.getElementById("vowels").innerHTML = (res == null) ? 0 : res.length;	
}