const searchBy = "district"
// if you want to search by  pinCode then set searchBy to "pinCode"
// if you want to search by  district then set searchBy to "district"
const pinCode = "506330"
//You need to enter valid pinCode if you select searchBy as pinCode
const stateName = "Odisha"
const districtName = "Khurda"
// You need to enter valid state name and district name if you select searchBy as district

const age = 47
const preferredVaccines= ["COVAXIN"]
// this is an array of preferredVaccines
// if preferredVaccines is empty i.e. [] then we consider all vaccines as preferredVaccines
const doseNumber = 1
const email = ""
const password = ""
// Enable application access on your gmail with steps given here:
// https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor&visit_id=637554658548216477-2576856839&rd=1
const noOfDaysToCheck = 1

export const configuration = {
    searchBy: searchBy,
    pinCode: pinCode,
    StateName: stateName,
    DistrictName:districtName,
    noOfDaysToCheck: noOfDaysToCheck,
    age:age,
    preferredVaccines:preferredVaccines,
    doseNumber: doseNumber,
    email:email,
    password:password,
    searchByPinCodeUrl: "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin",
    searchByDistrictUrl: "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict",
    getStatesUrl :"https://cdn-api.co-vin.in/api/v2/admin/location/states",
    getDistrictsUrl: "https://cdn-api.co-vin.in/api/v2/admin/location/districts"
}

