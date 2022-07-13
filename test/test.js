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