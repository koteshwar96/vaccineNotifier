import {sendEmail} from "./notifier";
const {apiCall} = require("./apiCall")
const {configuration} = require("./config")
const moment = require('moment');
const cron = require('node-cron');

let districtCode
let stateCode

async function main(){
    try {
        districtCode = 0
        stateCode = 0
        await checkAvailability();
        cron.schedule('*/1 * * * *', async () => {
            await checkAvailability();
        });
    }catch (e){
        console.log("Exception caught ",e.error())
    }
}

async function checkAvailability(){
    let nextDates = fetchNextDays()
    let centers
    if (configuration.searchBy === "pinCode"){
        centers = await checkAvailabilityByPinCode(nextDates)
    } else if (configuration.searchBy === "district"){
        centers = await checkAvailabilityByDistrict(nextDates)
    }
    else {
        console.log("Please enter proper searchBy option in config.js")
    }

    let mailContent =[]
    let content
    let doseNumberCapacity = "available_capacity_dose"+configuration.doseNumber
    for (let center of centers){
        for (let session of center.sessions){
            if (session.min_age_limit <= configuration.age && session[doseNumberCapacity] >1 && (configuration.preferredVaccines.length > 0 || configuration.preferredVaccines.indexOf(session.vaccine))){
                content ="vaccine: "+session.vaccine+"\nmin_age_limit: "+session.min_age_limit+"\ndate: "+session.date+"\navailable_capacity (dose number: "+ configuration.doseNumber+"): "+session[doseNumberCapacity]+"\n"+ center.name + "\n"+center.address+"\n\n"
                mailContent.push(content)
            }
        }
    }


    if (mailContent.length > 0 ){
        sendEmail(configuration.email,'VACCINE AVAILABLE',mailContent)
    }

}

async function checkAvailabilityByPinCode(dates){
    let slots = []
    for (const date of dates) {
        let slot = await getAvailabilityByPinCode(configuration.pinCode,date)
        slots = slots.concat(slot)
    }
    return slots
}

async function checkAvailabilityByDistrict(dates){
    if (stateCode === 0 || districtCode === 0){
        stateCode =  await getStateCode(configuration.StateName)
        districtCode = await getDistrictCode(stateCode, configuration.DistrictName)
    }

    let slots = []
    for (const date of dates) {
        let slot = await getAvailabilityByDistrictCode(districtCode,date)
        slots = slots.concat(slot)
    }
    return slots
}

function fetchNextDays(){
    let dates = [];
    let today = moment();
    for(let i = 0 ; i < configuration.noOfDaysToCheck ; i ++ ){
        let dateString = today.format('DD-MM-YYYY')
        dates.push(dateString);
        today.add(1, 'day');
    }
    return dates;
}

async function getStateCode(stateName){
    try{
        let headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
        }
        let stateCodes = await apiCall("GET",configuration.getStatesUrl,headers)
        for (let i=0; i<stateCodes.data.states.length ; i++ ){
            if (stateCodes.data.states[i].state_name === stateName ){
                return stateCodes.data.states[i].state_id
            }
        }

        console.log("State Name did not match with any of the state names available. Please refer to the state Names. It is case sensitive")
        stateCodes.data.states.forEach(entry =>{
            console.log(entry.state_name)
        })
        process.exit(0)
        return "NA"
    }catch (e){
        console.log("execption caught at getStateCodeMap",e)
    }

}

async function getDistrictCode(stateCode,districtName){
    try{
        let headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
        }
        let url = configuration.getDistrictsUrl+"/"+stateCode
        let response = await apiCall("GET",url,headers)
        let districtCodes = response.data.districts

        for (let i=0; i<districtCodes.length ; i++ ){
            if (districtCodes[i].district_name === districtName ){
                return districtCodes[i].district_id
            }
        }

        console.log("District Name did not match with any of the district names available. Please refer to the district Names. It is case sensitive")
        districtCodes.forEach(entry =>{
            console.log(entry.district_name)
        })
        process.exit(0)
        return "NA"
    }catch (e){
        console.log("exection caught at getStateCodeMap",e)
    }
}

async function getAvailabilityByPinCode(pincode,date){
    let url = configuration.searchByPinCodeUrl + '?pincode=' + pincode + '&date=' + date
    let headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
    }
    let response = await apiCall("GET",url,headers)
    return response.data.centers
}

async function getAvailabilityByDistrictCode(districtCode,date){
    let url = configuration.searchByDistrictUrl + '?district_id=' + districtCode + '&date=' + date
    let headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
    }
    let response = await apiCall("GET",url,headers)
    return response.data.centers
}


main().then(r => console.log("started Vaccine Notifier")).catch(e =>{console.log(e)})