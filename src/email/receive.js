const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

function receive(options, cb){
    try{       
        if(!options.receiver){
            throw Error("receiver email is not defined!")
        }
        else{
            cb(null, "coming soon!")
        }
    }
    catch(err){
        cb(err, null)
    }
}

module.exports = receive;