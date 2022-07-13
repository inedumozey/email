const send = require('./send')
const receive = require('./receive')


class Email {
    constructor({user, pass, host="smtp.gmail.com", port='465', secure=true}){
        this.user = user,
        this.pass = pass,
        this.host = host,
        this.port = port,
        this.secure = secure
    }

    validate = async()=>{
        try{
            if(!this.user) throw Error('username is not defined')
            if(!this.pass) throw Error('password is not defined')
        }
        catch(err){
            throw err
        }
    }

    send = async function handleSend(options, cb){
        try{
            await this.validate()
            return send(options, this.user, this.pass, this.host, this.port, this.secure, cb)
        }
        catch(err){
            cb(err, null)
        }
    }

    receive = async function handleReceive(options, cb){      
        try{
            return receive(options, cb)
        }
        catch(err){
            cb(err, null)
        }
         
    }
}

module.exports = Email;