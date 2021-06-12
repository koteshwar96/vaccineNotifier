
// if you want to search by pinCode then set searchBy to "pinCode"
// if you want to search by district then set searchBy to "district"
const searchBy = "district"

//if you select searchBy as pinCode, You need to enter valid pinCode here
const pinCode = "506002"

// if you select searchBy as district, You need to enter valid state name and district name
const stateName = "Telangana"
const districtName = "Warangal(Urban)"

const age = 24

// preferredVaccines is list of your vacccine choices .
//If you are interested in both covaxin and covishield then,
// const preferredVaccines= ["COVAXIN", "COVISHIELD"]
// if preferredVaccines is empty i.e.
// const preferredVaccines= [], then all vaccines are considered as your choice
const preferredVaccines= ["COVAXIN"]

const doseNumber = 1

// Enable application access on your gmail with steps given here:
// https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor&visit_id=637554658548216477-2576856839&rd=1
// Basically you are giving permission for this application to send email on your behalf of the below email
const email = ""
// Enter the password you have got from the steps mentioned in above url
const password = ""



export const configuration = {
    searchBy: searchBy,
    pinCode: pinCode,
    StateName: stateName,
    DistrictName:districtName,
    noOfDaysToCheck: 1,
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

