* Emailing using smtp server, nodemailer and mailgun
* send emails
* receive emails

*** Usage

** Send Emails

1. Get your smtp host, (for some private emails, host: email.privateemail.com), for gmail, it is smtp.gmail.com. for Outlook, it is smtp-mail.outlook.com. for Hotmail, it is smtp.live.com or smtp.office365.com. Default here is set to smtp.gmail.com for gmail users.

2. port (can be 465 for SSL or 587 for TLS). Default here is set to be 465

3. secure (true or false). Default here is set to be true

4. Your email username

5. Your email password

*** Steps to send in gmail as google do not allowed your email password, it requires special configuration as shown below.

1. Go to your Google account at https://myaccount.google.com/
2. Go to Security
3. In "Signing in to Google" section choose 2-Step Verification - here you have to verify yourself, in my case it was with phone number and a confirmation code send as text message. After that you will be able to enabled 2-Step Verification
4. Back to Security in "Signing in to Google" section choose App passwords
5. From the Select app drop down choose Other (Custom name) and put a name e.g. nodemailer
6. A modal dialog will appear with the password. Get that password and use it in your  as seen below.

If there is still a problem, try clearing captcha by visiting https://accounts.google.com/DisplayUnlockCaptcha from your Google account.


```
    const Email = require('@mozeyinedu/email');

    const email = new Email({
        user: process.env.USER,
        pass: process.env.PASS,
        host: 'mail.privateemail.com',
        port: '465',
        secure: true,
    });

    email.send({
        from: process.env.USER,
        to: 'example@gmail.com',
        subject: 'Test',
        html: `<h1>testing</h1>`,
    }, 

    (err, res)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
        }
    });

```



** Receive Emails