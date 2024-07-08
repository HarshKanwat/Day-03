//Q1. Print the flag of all countrires.
//ans
var request = new XMLHttpRequest();

request.open("get","https://restcountries.com/v3.1/all");

request.send();

request.onload = function(){

    var result = JSON.parse(request.response);

    console.log(result);

    for(var i=0;i<result.length;i++)
            console.log(result[i].flag,result[i].flags);



//Q2 print countries name,region,sub region ,population.
    
// Ans 
        for(var i=0;i<result.length;i++)
            console.log(result[i].name, result[i].region, result[i].subregion, result[i].population)
}