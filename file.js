console.log("======= Variables =========")
var text = "JIVISHA";

console.log(text)

console.log("=========If Else==========")
var a = 40 ; 
var b = 20 ; 
if (a>b){
    console.log("A IS GREATER");
}
else{
    console.log("B IS GREATER");
}

console.log("=========FUNCTIONS=========");
function abes(){
    console.log("THIS IS OUTPUT ABES OKAY ")
}
abes();

console.log("========FUNCTION RETURN==========")
    function add( x , y){
        return x+y;
    }
    var result = add (20 , 40);
    console.log("SUM = " , result)


console.log("===========DEFAULT ARGUEMENTS==========")
function fullName(fName = "ABES", lName="EC"){
return fName+" "+lName;
}
console.log(fullName());
console.log(fullName("JIVISHAAA","GUPTA"));

console.log("===========PERCENTAGE================");
function totalMarks(math , eng , sci){
    return math + eng + sci;
}
function percentage(total){
    return (total / 300 * 100)
}
total = totalMarks(95 , 99 , 100);
console.log("TOTAL MARKS" , total);
console.log("PERCENTAGE" , percentage (total) , "x" );
