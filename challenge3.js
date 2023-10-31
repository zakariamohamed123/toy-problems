// function to calculate PAYE
function calculatePAYE(basicSalary){
  let PAYE = 0;;
  if (basicSalary <= 24000) {
      PAYE = basicSalary * 0.1;
  } else if (basicSalary >= 24000 && basicSalary <= 32333){
      PAYE = basicSalary * 0.25;
  } else if (basicSalary >= 32334 && basicSalary <= 500000){
      PAYE = basicSalary * 0.3
  } else if (basicSalary >= 500000 && basicSalary <= 800000){
      PAYE = basicSalary * 0.325
  } else if (basicSalary > 800000){
      PAYE = basicSalary * 0.35
  }
  return PAYE
}
//input the basic salary to find the value of the PAYE
console.log(calculatePAYE())

// Calculating the NHIF Deductions
function calculateNHIF(basicSalary){
  let NHIF = 0;
  if (basicSalary <= 5999){
      NHIF = 150
  } else if (basicSalary > 6000 && basicSalary <= 7999){
      NHIF = 300
  } else if (basicSalary >= 8000 && basicSalary <= 11999){
      NHIF = 400
  } else if (basicSalary >= 12000 && basicSalary <= 14999){
      NHIF = 500
  } else if (basicSalary >= 15000 && basicSalary <= 19999){
      NHIF = 600
  } else if (basicSalary >= 20000 && basicSalary <= 24999){
      NHIF = 750
  } else if (basicSalary >= 25000 && basicSalary <= 29999){
      NHIF = 850
  } else if (basicSalary >= 30000 && basicSalary <= 34999){
      NHIF =900
  } else if (basicSalary >= 35000 && basicSalary <= 39999){
      NHIF = 950
  } else if (basicSalary >= 40000 && basicSalary <= 44999){
      NHIF = 1000
  } else if (basicSalary >= 45000 && basicSalary <= 49999){
      NHIF = 1100
  } else if (basicSalary >= 50000 && basicSalary <= 59999){
      NHIF = 1200
  } else if (basicSalary >= 60000 && basicSalary <= 69999){
      NHIF = 1300
  } else if (basicSalary >= 70000 && basicSalary <= 79999){
      NHIF =1400
  } else if (basicSalary >= 80000 && basicSalary <= 89999){
      NHIF = 1500
  } else if (basicSalary >= 90000 && basicSalary <= 99999){
      NHIF = 1600
  } else (NHIF = 1700)
  
  return NHIF
}
//input the basic salary to calculate the total NHIF to be deducted
console.log(calculateNHIF())


//function to calculate the NSSF deductions

function calculateNSSF(basicSalary){
  let NSSF = 0;
  return  0.06 * basicSalary
  
}
// input basic salary to calculate the NSSF deductions
console.log(calculateNSSF())

//function to calculate the Net salary

function calculateNetSalary(basicSalary){
  const PAYE = calculatePAYE(basicSalary);
  const NHIF = calculateNHIF(basicSalary);
  const NSSF = calculateNSSF(basicSalary);
  const netSalary = basicSalary - PAYE - NHIF - NSSF;
  return {
      PAYE,
      NHIF,
      NSSF,
      netSalary
  }
  
}
//input to calcilate net salary and all the deductions
console.log(calculateNetSalary())
