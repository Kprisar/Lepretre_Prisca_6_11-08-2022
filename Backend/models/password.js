const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(6)   // Minimum length 6                                  
.is().max(20)    // Maximum length 20                           
.has().uppercase()    // Must have uppercase letters                          
.has().lowercase()     // Must have lowercase letters                        
.has().digits()         // Must have at least  digits                       
.has().not().spaces()     // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values 




module.exports = passwordSchema; 