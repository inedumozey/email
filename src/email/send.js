const nodemailer = require('nodemailer');

async function send(options, user, pass, host, port, secure, cb){
    try{       
        if(!options.from){
            throw Error("sender email is not defined! {from: ''}")
        }

        if(!options.to){
            throw Error("receiver email is not defined! {to: ''}")
        }
        else{

            const transporter = nodemailer.createTransport({
                host,
                secure,
                port,
                auth: {
                    user,
                    pass
                }
            });

            const subject = options.subject || ''
            const html = options.html || ''
            const feedback = options.feedback || `Email has been successfully sent to ${options.to}`
            
            const mailOptions = {
                from: options.from,
                to: options.to,
                subject,
                html
            }

            transporter.sendMail(mailOptions, (err, res)=>{
                if(err){
                    cb(err, null)
                }
                else{
                    cb(null, {...mailOptions, feedback})
                }
            })
        }
    }
    catch(err){
        cb(err, null)
    }
}

module.exports = send;

