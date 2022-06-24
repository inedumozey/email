const Email = require('@mozeyinedu/email');

const email = new Email({
    username: '<USERNAME>',
    password: '<PASSWORD>'
});

email.send({
    name: '<NAME>',
    receiver: 'example@gmail.com',
    subject: 'Test',
    html: 'Testing',
}, 
(err, res)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log(res)
    }
});