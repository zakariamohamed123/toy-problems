// function which takes the speed of a car
function speedDetector(speed){
  
    //Define the speed limit and DemeritPointPerSpeed.
  const speedLimit = 70;
  const demeritPointPerSpeed = 5;

     //if speed within limit , display ok.
    if (speed <= speedLimit) {
        console.log("Ok");
        return "Speed within limit"
      }


      //calculate number points based on speed given
    const demeritPoints = Math.floor((speed - speedLimit) / demeritPointPerSpeed);

    // display lincense suspended if demeritPoints > 12 else display number of demerit point
      if (demeritPoints > 12) {
          console.log("License suspended");
      } else {
          console.log(`Points: ${demeritPoints}`);
  }


}
console.log(speedDetector(180))
