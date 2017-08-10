/*
File ini berfungsi memodelkan database & aksi-aksi yang dapat diberikan untuk memanipulasi data
*/

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/demodb');
var Schema = mongoose.Schema;

// name, title, email, phone, address, company
var contactSchema = new Schema({
    namesearch: { type: String, required: true, unique: true },
    name: String,
    title: String,
    emails: [String],
    phones: [String],
    address: String,
    company: String,
    created_at: Date,
    updted_at: Date
});

// make model

contactSchema.pre('save', function(next) {
    var currentDate = new Date();

    this.updated_at = currentDate;

    if (!this.created_at) this.created_at = currentDate;

    next();
});

// method

var isExist = function(s, arr) {
    var status = false;
    var i = 0;
    while (!status && i < arr.length) {
        if (arr[i] == s) status = true;
        console.log(status)
        i = i + 1;
    }
    return status;
}

var getIndexOf = function(s, arr) {
    var index = -1;
    var status = false;
    while (!status && i < arr.length) {
        if (arr[i] == s) {
            status = true;
            index = i;
        }
    }
    return index;
}

// atribut namesearch method
contactSchema.methods.setNameSearch = function(namesearch) {
    this.namesearch = namesearch;
}

// atribut name method
contactSchema.methods.setName = function(name) {
    this.name = name;
}

contactSchema.methods.unsetName = function() {
    this.name = ''
}

// atribut title method
contactSchema.methods.setTitle = function(title) {
    this.title = title;
}

contactSchema.methods.unsetTitle = function() {
    this.title = '';
}

// atribut email method
contactSchema.methods.addEmail = function(email, msg) {
    var params = this._id;
    if (isExist(email, this.emails)) {
        msg({ statusCode: false, detail: 'email was exist' });
    } else {
        this.emails.push(email);
        msg({ statusCode: true, detail: 'added' });
    }
}

contactSchema.methods.updateEmail = function(prevEmail, newEmail, msg) {
    var index = this.emails.indexOf(prevEmail);
    if (~index && !isExist(newEmail, this.emails)) {
        console.log(this.emails[index])
        this.emails[index] = newEmail;
        console.log(this.emails[index]);
        msg({ statusCode: true, detail: 'updated' })
    } else {
        msg({ statusCode: false, detail: 'previous email is not found, or new email was exist' });
    }
}

contactSchema.methods.removeEmail = function(email, msg) {
    var index = this.emails.indexOf(email);
    if (~index) {
        this.emails.splice(index, 1);
        msg({ statusCode: true, detail: 'removed' })
    } else {
        msg({ statusCode: false, detail: 'email is not found' });
    }
}

contactSchema.methods.makeEmptyEmail = function() {
    this.emails = [];
}

// atribut phone method
contactSchema.methods.addPhone = function(phone, msg) {
    if (isExist(phone, this.phones)) {
        msg({ statusCode: false, detail: 'phone was existed' });
    } else {
        this.phones.push(phone);
        msg({ statusCode: true, detail: 'added' });
    }
}

contactSchema.methods.updatePhone = function(prevPhone, newPhone, msg) {
    var index = this.phones.indexOf(prevPhone);
    if (~index && !isExist(newPhone, this.phones)) {
        this.phones[index] = newPhone;
        msg({ statusCode: 1, detail: 'updated' })
    } else {
        msg({ statusCode: 0, detail: 'previous phone is not found, or new phone number was existed' });
    }
}

contactSchema.methods.removePhone = function(phone, msg) {
    var index = this.phones.indexOf(phone);
    if (~index) {
        this.phones.splice(index, 1);
        msg({ statusCode: 0, detail: 'removed' })
    } else {
        msg({ statusCode: 1, detail: 'phone is not found' });
    }
}

contactSchema.methods.makeEmptyPhone = function() {
    this.phones = [];
}

// atribut address method
contactSchema.methods.setAddress = function(address) {
    this.address = address;
}

contactSchema.methods.unsetAddress = function() {
    this.address = '';
}

// atribut company method
contactSchema.methods.setCompany = function(company) {
    this.company = company;
}

contactSchema.methods.unsetCompany = function() {
    this.company = '';
}

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;