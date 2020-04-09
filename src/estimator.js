/*eslint-disable*/
import { normalizeDays } from './helper';
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
  const multiplier=(data)=>{
    let days= normalizeDays(data);
    let factor= Number.parseInt(days/3,10);
    return 2 ** factor;
};
const currentlyInfected= (data.reportedCases * 10);
const severeCurrentlyInfected= (data.reportedCases * 50);
const infectionsByRequestedTime= currentlyInfected * multiplier;
const severeInfectionsByRequestedTime= severeCurrentlyInfected * multiplier;
   return  { 
    data: {  
        region: {
        name: "Africa",
        avgAge : 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
        },
        periodType: "days",
        timeToElapse: 58,
        reportedCases: 674,
        population: 66622705,
        totalHospitalBeds: 1380614
        },
       impact : {
           currentlyInfected ,
           infectionsByRequestedTime
           },
    severeImpact:{
        severeCurrentlyInfected,
        severeInfectionsByRequestedTime
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
