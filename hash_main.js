let fs = require('fs');
let arg = process.argv;
let Str = fs.readFileSync(arg[2]);
Str = Str.toString();
let Search = fs.readFileSync(arg[3]);
Search = Search.toString();
let indexEntry = new Array();
let hashSearch = 0;
let hashStr = 0;
lenSearch = Search.length;
lenStr = Str.length;

for (y = 0; y <= lenSearch-1; y++){
	hashSearch += Search.charCodeAt(y) * Math.pow(2,lenSearch-1-y);
	hashStr += Str.charCodeAt(y) * Math.pow(2,lenSearch-1-y);
}

function compare(){
	k = i;
	c = 0;
	app = 0;
	while(c <= Search.length-1){
		if (Search[app] == Str[k])
			bFlag = true;
		else{
			bFlag = false;
			break;
		}
		app++;
		k++;
		c++;
	}
	return bFlag;
}

for (i = 1; i <= lenStr - lenSearch-1; i++){
	hashStr = (hashStr - Str.charCodeAt(i-1)* Math.pow(2,lenSearch-1)) * 2 + Str.charCodeAt(i+lenSearch-1);
	if (hashSearch == hashStr){
		compare()
		if (bFlag == true){
			n = i+1;
			indexEntry.push(n);		
		}
	}
}
console.log('Индексы вхождения подстроки:',indexEntry.join('-'));