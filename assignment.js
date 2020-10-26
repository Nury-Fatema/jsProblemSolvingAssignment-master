// Feet To Mile -> 1 feet = 0.000189394 mile
function feetToMile(feet){
    var feetAbsolute = Math.abs(feet);
    if(feet != feetAbsolute){
        return "please set a positive value";
    }else{
        var mile = (feet*0.000189394).toFixed(2);
        return mile + " mile";
    }   
}
var resultOfFeetToMile = feetToMile(5280);
console.log(resultOfFeetToMile);


//Wood Calculator 
function woodCalculator(totalChair, totalTable, totalBed){
    var chairAbsolute = Math.abs(totalChair);
    var tableAbsolute = Math.abs(totalTable);
    var bedAbsolute = Math.abs(totalBed);
    if(chairAbsolute != totalChair || tableAbsolute != totalTable || bedAbsolute != totalBed){
        return "please insert positive value for Chair, Table and Bed";
    }else{
        var woodForChair = totalChair * 1;
        var woodForTable = totalTable * 3;
        var woodForBed = totalBed * 5;
        var totalWoodNeed = woodForChair + woodForTable + woodForBed;
    return totalWoodNeed;
    }
    
}
var resultForWoodCalculator = woodCalculator(6, 3, 0);
console.log(resultForWoodCalculator);


//Brick Calculator
function brickCalculator(floor){
    var floorAbsolute = Math.abs(floor);
    if(floorAbsolute != floor){
        return "please enter your valid floor number";
    }else if(floor<=10){
        var smallBuildingFeet = floor * 15;
        var totalBrickForSmall = smallBuildingFeet * 1000;
        return totalBrickForSmall;
    }else if(floor>=11 && floor<=20){
        var topFloor = floor - 10;
        var belowTenFloor = floor - topFloor;
        var mediumBuildingFeet = belowTenFloor * 15 + topFloor * 12;
        var totalBrickForMedium = mediumBuildingFeet * 1000;
        return totalBrickForMedium;

    }else{
        var buildingTop = floor - 20;
        var buildingMiddle = 10;
        var buildingBottom = 10;
        var highBuildingFeet = buildingBottom * 15 + buildingMiddle * 12 + buildingTop * 10; 
        var totalBrickForHigh = highBuildingFeet * 1000;
        return totalBrickForHigh;
    }
}

var resultForBrickCalculator = brickCalculator(23);
console.log(resultForBrickCalculator);


//Find Tiny Friend

var listOfName = ["Masud", "Rana", "Shawon", "Mostafiz", "Haydar Ali"];
var tinyFriendLength = 0;

function tinyFriend(nameList){
    if(nameList == ""){
        return "distance cannot be negative ";
    }else{
        tinyFriendLength = nameList[0].length;
        for(var i=0; i<nameList.length; i++){
            
            if(nameList[i].length<tinyFriendLength){
                tinyFriendLength = nameList[i].length;
            }
        } 
        for(var j=0; j<nameList.length; j++){
            if(nameList[j].length == tinyFriendLength){
                return nameList[j];
            }
        }
    }   
}

var tinyFriendResult = tinyFriend(listOfName);
console.log(tinyFriendResult);