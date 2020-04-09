/*eslint-disable*/
exports.normalizeDays=({ periodType, timeToElapse })=>{
let days;
switch(periodType) {
    case 'weeks':
        days= timeToElapse*7;
        break;
        case 'months':
            days= timeToElapse*30;
            break;
            default:
                days=timeToElapse;
                break;

}
return days;

};