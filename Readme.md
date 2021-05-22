## Vaccine Availability Notifier

This application checks the Co-Win portal periodically i.e every 15 mins to find if vaccination slots available as per your requirement

There are various configurable constraints like age, preferred vaccines,dose number

You can check vaccine Availability either by searchByDistrict / searchByPinCode

As soon there is an availability of vaccine slot as per your requirement, you would be notified over e-mail.

Sample E-Mail content,

````
YaY!! Vaccine slots are available. Details are,

vaccine: COVAXIN
min_age_limit: 45
date: 26-05-2021
available_capacity (dose number: 1): 55
Ghatikia UPHC
In Front Of Jayadev Vatika Ghatikia

,vaccine: COVAXIN
min_age_limit: 45
date: 27-05-2021
available_capacity (dose number: 1): 68
Ghatikia UPHC
In Front Of Jayadev Vatika Ghatikia

,vaccine: COVAXIN
min_age_limit: 45
date: 28-05-2021
available_capacity (dose number: 1): 19
Ghatikia UPHC
In Front Of Jayadev Vatika Ghatikia
````


### Steps to get started with the application:

1. Install nodejs if not installed already (https://nodejs.dev/learn/how-to-install-nodejs )

2.  In order to send emails, enable application access on your gmail with steps given here: https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor&visit_id=637554658548216477-2576856839&rd=1
    
3. Enter your details and constraints in config.js in src folder like mail Id, password, age, preferred vaccines, dose numbers, searchPreference as per your requirement

4. To start application enter the following command in terminal
   ````
   npm install && npm start
   ````