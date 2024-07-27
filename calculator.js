
const resulttab = document.getElementById("result");
const clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let result='';

/*To append the input elements*/
function append(input){
  resulttab.value += input;
}

/*to remove the last element*/
function remove(character){
  if(character === '←'){
    resulttab.value = resulttab.value.substring(0,resulttab.value.length-1);
  }
}

/*To clear the display*/
clear.onclick = function(){
  resulttab.value='';
}

/*display result*/
equal.onclick=function (){
  let expression = resulttab.value;
  let strings = [...expression];
  let number="";
  let words=[];
  let operator="";
  for(let i=0;i<strings.length;i++){
    if(strings[i]!=='+' && strings[i]!=='-' && strings[i]!=='/' && strings[i]!=='×'){
      number+=strings[i];
      if(i===strings.length-1){
          words.push(number);
      }
    }
    else{
      words.push(number);
      operator=strings[i];
      words.push(operator);
      number="";
    }
  }
  finalresult=findResult(words);
  resulttab.value=finalresult;
}

function findResult(words){
  let numone = words[0];
  let numtwo = words[2];
  numone=Number(numone);
  numtwo=Number(numtwo);
  if(words[1]=='+'){
    result=add(numone,numtwo);
  }
  if(words[1]=='-'){
    result=sub(numone,numtwo);
  }
  if(words[1]=='/'){
    result=div(numone,numtwo);
  }
  if(words[1]=='×'){
    result=mul(numone,numtwo);
  }
  return result;
}

function add(one,two){
  return one+two;
}

function sub(one,two){
  return one-two;
}

function div(one,two){
  return one/two;
}

function mul(one,two){
  return one*two;
}