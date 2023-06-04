const request = require('request');
const username = "test@liferay.com";
const password = "admin";

const arr = [
    {
        "offer": {
            "title": "Osnovni net",
            "type": "INTERNET",
            "active": true,
            "downloadSpeed": 10,
            "uploadSpeed": 2,
            "fullDurationMonths": 24,
            "discountDurationMonths": 12,
            "basePrice": 19.99,
            "discountPrice": 12.99
        }
    },
    {
        "offer": {
            "title": "Extra net",
            "type": "INTERNET",
            "active": true,
            "downloadSpeed": 100,
            "uploadSpeed": 15,
            "fullDurationMonths": 24,
            "discountDurationMonths": 12,
            "basePrice": 29.99,
            "discountPrice": 19.99
        }
    },
    {
        "offer": {
            "title": "Super pro net",
            "type": "INTERNET",
            "active": true,
            "downloadSpeed": 690,
            "uploadSpeed": 420,
            "fullDurationMonths": 24,
            "discountDurationMonths": 12,
            "basePrice": 39.99,
            "discountPrice": 24.99
        }
    },


    {
        "offer": {
            "title": "Osnovni",
            "type": "MOBILE",
            "active": true,
            "mobileMinutes": 5000,
            "mobileSms": 5000,
            "mobileData": 3000,
            "fullDurationMonths": 24,
            "discountDurationMonths": 12,
            "basePrice": 9.99,
            "discountPrice": 6.99
        }
    },
    {
        "offer": {
            "title": "Extra",
            "type": "MOBILE",
            "active": true,
            "mobileMinutes": -1,
            "mobileSms": -1,
            "mobileData": 10000,
            "fullDurationMonths": 24,
            "discountDurationMonths": 12,
            "basePrice": 12.99,
            "discountPrice": 9.99
        }
    },
    {
        "offer": {
            "title": "Super pro",
            "type": "MOBILE",
            "active": true,
            "mobileMinutes": -1,
            "mobileSms": -1,
            "mobileData": -1,
            "fullDurationMonths": 24,
            "discountDurationMonths": 12,
            "basePrice": 19.99,
            "discountPrice": 12.99
        }
    },




    {
        "offer": {
            "title": "Osnovni",
            "type": "TELEVSION",
            "active": true,
            "programsNumber": 100,
            "defaultNumberOfTvs": 2,
            "fullDurationMonths": 24,
            "discountDurationMonths": 12,
            "basePrice": 12.99,
            "discountPrice": 8.99
        }
    },
    {
        "offer": {
            "title": "Extra",
            "type": "TELEVSION",
            "active": true,
            "programsNumber": 200,
            "defaultNumberOfTvs": 3,
            "fullDurationMonths": 24,
            "discountDurationMonths": 12,
            "basePrice": 19.99,
            "discountPrice": 12.99
        }
    },
    {
        "offer": {
            "title": "Super pro",
            "type": "TELEVSION",
            "active": true,
            "programsNumber": 300,
            "defaultNumberOfTvs": 4,
            "fullDurationMonths": 24,
            "discountDurationMonths": 12,
            "basePrice": 29.99,
            "discountPrice": 19.99
        }
    }
];

for (let i in arr) {
    postData(arr[i]);
}

function postData(data) {
    const options = {
        'method': 'POST',
        'url': 'http://localhost:8080/o/sp/api/offer',
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(username + ":" + password),
            'Cookie': 'COOKIE_SUPPORT=true; GUEST_LANGUAGE_ID=en_US'
        },
        body: JSON.stringify(data)
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
    });
}




