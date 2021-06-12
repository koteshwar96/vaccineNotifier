## Vaccine Availability Notifier

This application checks the Co-Win portal periodically i.e. every 1 min to find if vaccination slots available as per your requirement

You can check vaccine Availability either by searchByDistrict / searchByPinCode

You can configure your age, preferred vaccines,dose number

As soon there is an availability of vaccine slot as per your requirement, you would be notified over e-mail.

Sample E-Mail content,

````
YaY!! Vaccine slots are available. Details are,

vaccine: COVAXIN
min_age_limit: 18
date: 12-06-2021
available_capacity (dose number: 1): 130
Jaya Hospital
Chowrasta Hanamkonda
````


### Steps to get started with the application:

1. Install nodejs if not installed already (https://nodejs.dev/learn/how-to-install-nodejs )

2.  In order to send emails, enable application access on your gmail with steps given here: https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor&visit_id=637554658548216477-2576856839&rd=1
    
3. Enter your details and requirements in config.js in src folder like mail Id, password(obtained from prev step), age, preferred vaccines, dose numbers, searchPreference i.e. byDistrict or byPinCode as per your requirement

4. To start application enter the following command in terminal
   ````
   npm install && npm start
   ````