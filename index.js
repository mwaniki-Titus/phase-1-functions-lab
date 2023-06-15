// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks -42)
    
}
function distanceFromHqInFeet(blocks) {
    const blockdistance =264;
    return distanceFromHqInBlocks (blocks) *blockdistance;
    
}
function distanceTravelledInFeet(start, destination){
    const blockdistance =264;
    return Math.abs(start - destination) * blockdistance;
         
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    
       if (distance <=400){
        return 0;
       }else if (distance <=2000){
        return (distance - 400) * 0.02;
       }else if (distance > 2000 && distance <= 2500){
        return 25;
       }else {
        return "cannot travel that far";
       }
    }        
