let fs = require('fs');
let arg = process.argv;
let Str = fs.readFileSync(arg[2]);
Str = Str.toString();
let Search = fs.readFileSync(arg[3]);
Search = Search.toString();
let indexEntry = new Array();
let hashSearch = 0;
let hashStr = 0;

for (y = 0; y < Search.length; y++){
	hashSearch += Search.charCodeAt(y);
}
lenSearch = Search.length;
lenStr = Str.length;

function hsStr(){
	count = 0;
	while (count <= lenSearch-1){
		hashStr += Str.charCodeAt(i+count);
		count++;
	}
	return hashStr;
}

function compare(){
	k = i;
	c = 0;
	app = 0;
	while(c <= Search.length-1){
		if (Search[app] == Str[k])
			bFlag = true;
		else
			 return bFlag = false;
		app++;
		k++;
		c++;
	}
	return bFlag;
}

for (i = 1; i <= lenStr - lenSearch-1; i++){
	if (hashSearch == hsStr()){
		compare()
		if (bFlag == true){
			n = i+1;
			indexEntry.push(n);
		}
	}
	hashStr = 0;
}
console.log('Индексы вхождения подстроки:',indexEntry.join('-'));