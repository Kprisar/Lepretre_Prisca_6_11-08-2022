
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const cryptojs = require('crypto-js');
require('dotenv').config();



exports.signup = (req, res, next) => {
    const emailCryptojs = cryptojs.HmacSHA256(req.body.email, 'SECRET_KEY').toString();
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: emailCryptojs,
          password: hash
        });
        user.save()
          .then(() => res.status(201).json({ message: 'User created!' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => {
        console.log(error)
        return res.status(500).json({ error })});
  };

  exports.login = (req, res, next) => {
    const emailCryptojs = cryptojs.HmacSHA256(req.body.email, 'SECRET_KEY').toString();
        User.findOne({ email: emailCryptojs })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'User not found!' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect!' })
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                          { userId: user._id },
                          process.env.TOKEN_KEY,
                          { expiresIn: '24h' }
                        )
                      });
                    })
                    .catch(error => res.status(500).json({ error }));
                })
                .catch(error => res.status(500).json({ error }));
            };