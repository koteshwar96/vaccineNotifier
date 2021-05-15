## Vaccine Availability Notifier

This application checks the Co-Win portal periodically i.e every 15 mins to find if vaccination slots available as per your requirement


You can check vaccine Availability either by searchByDistrict / searchByPinCode

There are various configurable params like age, preferred vaccines

As soon there is an availability of vaccine slot as per your requirement, you would be notified over e-mail.

````
YaY!! Vaccine slots are available. Details are,

vaccine: COVISHIELD
min_age_limit: 18
date: 17-05-2021
available_capacity: 3
PHNT GIALGORA GOVINDPUR 2.0
GIALGORA GOVINDPUR

,vaccine: COVISHIELD
min_age_limit: 18
date: 16-05-2021
available_capacity: 1
BARWA GOVINDPUR 2.0
BARWA GOVINDPUR DHANABD

,vaccine: COVISHIELD
min_age_limit: 18
date: 17-05-2021
available_capacity: 2
BARWA GOVINDPUR 2.0
BARWA GOVINDPUR DHANABD
````


### Steps to run the script:
````
1. Enable application access on your gmail with steps given here: https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor&visit_id=637554658548216477-2576856839&rd=1

2. Enter your details in config.js in src folder. You can modify params as per your requirement

3. npm install   
    npm start
    
4. To keep the process running in background you use cmds like nohup
````