const nodemailer = require('nodemailer');

async function send(options, username, password, cb){
    try{       
        if(!options.receiver){
            throw Error("receiver email is not defined!")
        }
        else{
            
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                service: 'gmail',
                port: '587',
                auth: {
                    user: username,
                    pass: password
                }
            });
            const name = options.name || ''
            const subject = options.subject || ''
            const html = options.html || ''
            const feedback = options.feedback || `Email has been successfully sent to ${options.receiver}`
            
            
            const mailOptions = {
                from: `${name} <no-reply>`,
                to: options.receiver,
                subject,
                html,
                feedback
            }

            transporter.sendMail(mailOptions, (err, res)=>{
                try{
                    if(err){
                        throw Error(err)
                    }else{
                        cb(null, feedback)
                    }
                }catch(err){
                    throw Error(err);
                }
                
            })
        }
    }
    catch(err){
        cb(err, null)
    }
}

module.exports = send;

