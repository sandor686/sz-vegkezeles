
function CharAt(){
    let text=document.getElementById('textInput').value;
    let adottKarakter=text.charAt(document.getElementById('charat').value+1);
    document.getElementById('eredmeny').value = adottKarakter;
}

function Concat(){
    let text=document.getElementById('textInput').value;
    let adottKarakter=text.concat(document.getElementById('concat').value);
    document.getElementById('eredmeny').value = adottKarakter;
}

function Includes(){
    let text=document.getElementById('textInput').value;
    let adottKarakter=text.includes(document.getElementById('includes').value);
    document.getElementById('eredmeny').value = adottKarakter ? "Az eredeti szöveg tartalmazza a megadott szövegrészt" : "Az eredeti szöveg nem tartalmazza a megadott szövegrészt";
}

function Length(){
    let text=document.getElementById('textInput').value;
    document.getElementById('eredmeny').value = text.length
}

function Leet(){
        let text=document.getElementById('textInput').value;
        text=text.replaceAll("a","4")
        text=text.replaceAll("s","5")
        text=text.replaceAll("t","7")
        text=text.replaceAll("b","8")
        text=text.replaceAll("i","1")
        text=text.replaceAll("e","3")
        text=text.replaceAll("o","0")
        document.getElementById('eredmeny').value = text
}

function Camelcase(){
    let text=document.getElementById('textInput').value;
	let daraboltSzoveg=[]
    daraboltSzoveg=text.split(' ')
    let camelCaseSzoveg=""
    for(let i=0;i<daraboltSzoveg.length;i++){
    	if(i==0){
        	camelCaseSzoveg+=daraboltSzoveg[0].toLowerCase()
        }
        else{
        	camelCaseSzoveg+=Capitalize(daraboltSzoveg[i])
        }
    }
    document.getElementById('eredmeny').value = camelCaseSzoveg
}
function Capitalize(szoveg){
	let nagyBetusSzoveg=""
    for(let i=0;i<szoveg.length;i++){
    	if(i==0){
        	nagyBetusSzoveg+=szoveg[0].toUpperCase()
        }
        else{
        	nagyBetusSzoveg+=szoveg[i].toLowerCase()
        }
    }
    return nagyBetusSzoveg
}