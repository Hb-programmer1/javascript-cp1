const { charsets } = require("mime");

function minmax(l){
var mn=0; //variable de minimumu
var mx=0; // le maximum
for (let i = 0; i < l.length; i++) {
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
function filterarray(l){

var lf; // list filtree
var j // taille de lf
for (let i = 0; i < l.length; i++) {
    if(!( isNaN(l[i]) )){
        lf[j]=l[i];
        j++;
    }
    
}


    return lf;
}
//////////////////////////
function isSymmetrical(n){

ch=str(n)
var nch=""; //new ch
for (let i = 0; i < ch.length; i++) {
    nch=ch[i]+nch
    
}
return (nch==ch)

}
/////////////////////////
function speacialarray(l){

for (let i = 1; i < l.length; i++) {
    return (l[i-1]%2==0 && l[i]%2!=0);
    
}

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
function objecttoarrey(obj){
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
var r
for (let i = 0; i < l.length; i++) {
    var c=t[i]
    if (l[i]<0){c*=(-1)}
    r+=c;
}
return r==25;
}
//////////////////////////::
function squaredigits(n){
var ch=str(n)
var r=""
var c;
for (let i = 0; i < ch.length; i++) {
    c=n%10;
    r=str(c)+r
    n=Math.floor(n/10)
    
}
return Number(r)
}