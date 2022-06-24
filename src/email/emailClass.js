const send = require('./send')
const receive = require('./receive')


class Email {
    constructor({username, password}){
        this.username = username
        this.password = password
    }

    validate = async()=>{
        try{
            if(!this.username) throw Error('username is not defined')
            if(!this.password) throw Error('password is not defined')
        }
        catch(err){
            throw err
        }
    }

    send = async function handleSend(options, cb){
        try{
            await this.validate()
            return send(options, this.username, this.password, cb)
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