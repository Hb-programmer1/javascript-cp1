const { charsets } = require("mime");

function minMax(l){
var mn=l[0]; //variable de minimumu
var mx=l[0]; // le maximum
for (let i = 1; i < l.length; i++) {
    if (l[i]>mx) mx=l[i];
    if (l[i]<mn) mn=l[i];
}
return [mn,mx];
}
////////////////////////////////////
function sumofcube(l){
var s=0;
for (let i = 0; i < l.length; i++) {
    s+=l[i]**3
    
}

return s;
}
//////////////////////////////////////
function filterArray(l){
 let lf=[];
for (let i = 0; i < l.length; i++) {
    if(typeof l[i] === "number"){
        lf.push(l[i]);
    }
    
}
    return lf;
}

//////////////////////////
function isSymmetrical(n) {
    let ch = n.toString();

    for (let i = 0; i < ch.length; i++) {
        nch = ch[i] + nch;
        console.log(nch); 
    }

    return nch === ch;  
}


/////////////////////////


function isSpecialArray(l){

for (let i = 0; i < l.length; i++) {
    if ( (i%2==0 && l[i]%2!=0) ||(i%2!=0 && l[i]%2==0) ) return false
    
}
return true
}
///////////////////////////:::
function counttrue(l){
    var r=0; //resultat : nombre de true
    for (let i = 0; i < l.length; i++) {
        if (l[i]){
            r++;
        }
        
    }
return r;
}

///////////////////
function objectToArray(obj){
l=[];
for (let i in obj){
l.push([i,obj[i]])
}
return l;
}

//////////////////////////
function arrayofmultiples(a,b){
l=[]
for (let i = 1; i <= b; i++) {
    l.push(a*i);
    
}
return l

}
////////////////
function marathondistance(l){
var r=0
for (let i = 0; i < l.length; i++) {
    var c=t[i]
    if (l[i]<0){c*=(-1)}
    r+=c;
}
return r==25;
}
//////////////////////////::
function squareDigits(n) {
var ch=n.toString()
var r=""
var c;
for (let i = 0; i < ch.length; i++) {
    c=n%10;
    r=c.toString()**2+r
    n=Math.floor(n/10)
    
}
return Number(r)
}
/////////////////////::