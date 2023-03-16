function distanceFromHqInBlocks(pickupLocation) {

   const hqLocation = 42;
 
 
   const distanceInBlocks = Math.abs(pickupLocation - hqLocation);
 
   return distanceInBlocks;
 }
 
 function distanceTravelledInFeet(start, destination) {
   
   const blocksTravelled = Math.abs(destination - start);
   
  
   const feetTravelled = blocksTravelled * 264;
   
   return feetTravelled;
 }
 
 function distanceFromHqInFeet(someValue) {
   const blocks = distanceFromHqInBlocks(someValue);
   const feetPerBlock = 264; 
   const feet = blocks * feetPerBlock;
   return feet;
 }
 function calculatesFarePrice(start, destination) {
   let distance = distanceTravelledInFeet(start, destination);
  
   
   if (distance <= 400){
       return 0; 
    }else if (distance >=401 && distance <= 2000){
        return Math.abs((distance - 400) * 0.02);
    }else if (distance >= 2001 && distance <= 2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
    
    
 }
 