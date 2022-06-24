* Emailing using gmail, nodemailer and mailgun
* send emails
* receive emails

*** Usage

** Send Emails

*** Steps
1. Go to your Google account at https://myaccount.google.com/
2. Go to Security
3. In "Signing in to Google" section choose 2-Step Verification - here you have to verify yourself, in my case it was with phone number and a confirmation code send as text message. After that you will be able to enabled 2-Step Verification
4. Back to Security in "Signing in to Google" section choose App passwords
5. From the Select app drop down choose Other (Custom name) and put a name e.g. nodemailer
6. A modal dialog will appear with the password. Get that password and use it in your  as seen below.

If there is still a problem, try clearing captcha by visiting https://accounts.google.com/DisplayUnlockCaptcha from your Google account.


```
    const Email = require('@mozeyinedu/emailing')

    const email = new Email({
        username: '<YOUR_GMAIL_USERNAME>',
        password: 'THE_PASSWORD_YOU_OBTAINED_ABOVE'
    });

    email.send({
        name: '<WEBSITE_NAME>',
        receiver: 'example@gmail.com',
        subject: 'Test',
        html: `<h3>Testing</h3>`,
    }, 
    (err, res)=>{
        if(err){
            console.log(err.message)
        }
        else{
            console.log(res)
        }
    });
```



** Receive Emails