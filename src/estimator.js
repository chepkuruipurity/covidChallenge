/*eslint-disable*/

const covid19ImpactEstimator = (data) => {
/* {
        region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
        },
        periodType: "days",
        timeToElapse: 58,
        reportedCases: 674,
        population: 66622705,
        totalHospitalBeds: 1380614
        } */

 // Normalize timeToElapse to days
 if (data.periodType === 'weeks') {
    data.timeToElapse *= 7;
  } else if (data.periodType === 'months') {
    data.timeToElapse *= 30;
  }

  const days = data.timeToElapse;
  const factor = Math.floor(days / 3);

  const multiplier= 2 ** factor;

  //const capacityBeds= (0.90||0.95) * data.totalHospitalBeds;
  const availableBeds= 0.35 * 0.95 * data.totalHospitalBeds;




const currentlyInfected= (data.reportedCases * 10);
const severeCurrentlyInfected= (data.reportedCases * 50);

const infectionsByRequestedTime= currentlyInfected * multiplier;
const severeInfectionsByRequestedTime= severeCurrentlyInfected * multiplier;
 
const severeCasesByRequestedTime = Math.floor (0.15 * infectionsByRequestedTime);
const severelySevereCasesByRequestedTime= Math.floor(0.15 * severeInfectionsByRequestedTime);

const hospitalBedsByRequestedTime = Math.trunc(availableBeds - severelySevereCasesByRequestedTime);
const severeHospitalBedsByRequestedTime= Math.trunc(availableBeds - severelySevereCasesByRequestedTime);


return  { 
    data,
       impact : {
           currentlyInfected: currentlyInfected ,
           infectionsByRequestedTime: infectionsByRequestedTime,
           severeCasesByRequestedTime:severeCasesByRequestedTime,
           hospitalBedsByRequestedTime: hospitalBedsByRequestedTime
           },
    severeImpact:{
      currentlyInfected: severeCurrentlyInfected,
        infectionsByRequestedTime: severeInfectionsByRequestedTime,
        severeCasesByRequestedTime: severelySevereCasesByRequestedTime,
        hospitalBedsByRequestedTime: severeHospitalBedsByRequestedTime
        } }
           
     };

  /* const currentlyInfected = reportedCases * 10;
  const severeImpact = currentlyInfected * 50;

  const infectionsByRequestedTime = currentlyInfected * 1024;
  const severeCasesByRequestedTime = (0.15 * infectionsByRequestedTime);
  const hospitalBedsByRequestedTime = (0.35 * totalHospitalBeds);
  const casesForICUByRequestedTime = (0.05 * infectionsByRequestedTime);
  const casesForVentilatorsByRequestedTime = (0.02 * infectionsByRequestedTime);
  const dollarsInFlight = (infectionsByRequestedTime * 0.65) * 1.5 * 30;
 */



export default covid19ImpactEstimator;
