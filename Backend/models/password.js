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


// Validate against a password string
console.log(passwordSchema.validate('validPASS123'));
// => true
console.log(passwordSchema.validate('invalidPASS'));
// => false

// Get a full list of rules which failed
console.log(passwordSchema.validate('joke', { list: true }));
// => [ 'min', 'uppercase', 'digits' ]



module.exports = passwordSchema; 