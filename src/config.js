const searchBy = "district"
// if you want to search by  pinCode then set searchBy to "pinCode"
// if you want to search by  district then set searchBy to "district"
const pinCode = "506330"
const stateName = "Odisha"
const districtName = "Khurda"
const noOfDaysToCheck = 1
const age = 47
const preferredVaccines= ["COVAXIN"]
// this is an array of preferredVaccines
// if preferredVaccines is empty then we consider all vaccines as preferredVaccines
const doseNumber = 1

const email = ""
const password = ""
// Enable application access on your gmail with steps given here:
// https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor&visit_id=637554658548216477-2576856839&rd=1

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

