var nodemailer = require('nodemailer');

const mailgun= require('nodemailer-mailgun-transport');
 

const auth ={
    auth:{
        api_key:'8656ee40161acebce782760fc714ddfe-f8faf5ef-8d60e8e0',
        domain:'sandboxb8a44574ddbf4b1e83dd1ef8272d6f83.mailgun.org	'
    }
};

var transporter = nodemailer.createTransport(mailgun(auth))

const sendMail=(emailid,fname,lname,cb)=>{
var mailOptions = {
  from: emailid, 
  to: 'narender007bisht@gmail.com',
  fristname:fname,
  lastname:lname,
  name:name,

}

transporter.sendMail(mailOptions, function(err,data){
  if (error) {
    cb(err,null);
  } else {
    cb(null,data);
  }
});
}

module.exports=sendMail;