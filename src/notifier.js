import {configuration} from "./config";

let nodemailer = require('nodemailer');

let nodemailerTransporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: String(configuration.email),
        pass: String(configuration.password)
    }
});


export function sendEmail (email, subjectLine, slotDetails) {
    console.log("YaY!! we have validSlots: ",slotDetails)
    let options = {
        from: String('Vaccine Checker ' + email),
        to: email,
        subject: subjectLine,
        text: 'YaY!! Vaccine slots are available. Details are, \n\n'+ slotDetails
    };

    nodemailerTransporter.sendMail(options).then(response =>{
        console.log("Successfully sent email. ",response)
        }
    ).catch(e =>{
        console.log("Exception caught ",e)
    })
}
