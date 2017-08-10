/*
File ini berfungsi melakukan routing pada request HTTP
*/

var express = require('express');
var router = express.Router();
var contactRoute = require('./contactRoute');
var passport = require('passport');

router.get('/contacts', contactRoute.getAllContacts);
router.get('/contact/:id/details', passport.authenticate('basic', { session: false }), contactRoute.getContact);
router.get('/contact/:id/name', passport.authenticate('basic', { session: false }), contactRoute.getName);
router.get('/contact/:id/title', passport.authenticate('basic', { session: false }), contactRoute.getTitle);
router.get('/contact/:id/email', passport.authenticate('basic', { session: false }), contactRoute.getEmail);
router.get('/contact/:id/address', passport.authenticate('basic', { session: false }), contactRoute.getAddress);
router.get('/contact/:id/phone', passport.authenticate('basic', { session: false }), contactRoute.getPhone);
router.get('/contact/:id/company', passport.authenticate('basic', { session: false }), contactRoute.getCompany);

router.post('/contact/new', passport.authenticate('basic', { session: false }), contactRoute.addNewContact);
router.post('/contact/:id/name', passport.authenticate('basic', { session: false }), contactRoute.setName);
router.post('/contact/:id/title', passport.authenticate('basic', { session: false }), contactRoute.setTitle);
router.post('/contact/:id/email', passport.authenticate('basic', { session: false }), contactRoute.addEmail);
router.post('/contact/:id/address', passport.authenticate('basic', { session: false }), contactRoute.setAddress);
router.post('/contact/:id/phone', passport.authenticate('basic', { session: false }), contactRoute.addPhone);
router.post('/contact/:id/company', passport.authenticate('basic', { session: false }), contactRoute.setCompany);

router.put('/contact/:id', passport.authenticate('basic', { session: false }), contactRoute.updateNameSearch);
router.put('/contact/:id/name', passport.authenticate('basic', { session: false }), contactRoute.setName);
router.put('/contact/:id/title', passport.authenticate('basic', { session: false }), contactRoute.setTitle);
router.put('/contact/:id/email', passport.authenticate('basic', { session: false }), contactRoute.updateEmail);
router.put('/contact/:id/address', passport.authenticate('basic', { session: false }), contactRoute.setAddress);
router.put('/contact/:id/phone', passport.authenticate('basic', { session: false }), contactRoute.updatePhone);
router.put('/contact/:id/company', passport.authenticate('basic', { session: false }), contactRoute.setCompany);

router.delete('/contact/:id', passport.authenticate('basic', { session: false }), contactRoute.removeContact);
router.delete('/contact/:id/name', passport.authenticate('basic', { session: false }), contactRoute.unsetName);
router.delete('/contact/:id/title', passport.authenticate('basic', { session: false }), contactRoute.unsetTitle);
//router.put('/contact/:id/email', passport.authenticate('basic', { session: false }), contactRoute.updateEmail);
router.delete('/contact/:id/address', passport.authenticate('basic', { session: false }), contactRoute.unsetAddress);
//router.put('/contact/:id/phone', passport.authenticate('basic', { session: false }), contactRoute.updatePhone);
//router.delete('/contact/:id/email', contactRoute.removeAllEmail);
//router.delete('/contact/:id/phone', contactRoute.removeAllPhone);
router.delete('/contact/:id/company', passport.authenticate('basic', { session: false }), contactRoute.unsetCompany);

router.use('/doc', express.static('apidoc'))

module.exports = router;