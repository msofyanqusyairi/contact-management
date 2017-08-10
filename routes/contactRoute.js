/*
File ini berfungsi melakukan kontrol informasi pada proses routing
*/

var Contact = require('../models/contacts');

// Method GET

module.exports.getAllContacts = function(req, res) {
    Contact.find({}, function(err, contact) {
        if (err) {
            res.send({ status: 'notOk', error: 'Query error' })
        } else {
            res.send({ status: 'Ok', contacts: contact, number_of_instances: contact.length });
        }
    });
};

module.exports.getContact = function(req, res) {
    var params = req.params.id;
    Contact.find({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            res.send({ status: 'Ok', contact: contact, number_of_instances: contact.length });
        }
    });
};

module.exports.getName = function(req, res) {
    var params = req.params.id;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            res.send({ status: 'Ok', namesearch: params, name: contact.name });
        }
    });
};

module.exports.getTitle = function(req, res) {
    var params = req.params.id;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            res.send({ status: 'Ok', namesearch: params, title: contact.title });
        }
    });
};

module.exports.getEmail = function(req, res) {
    var params = req.params.id;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            res.send({ status: 'Ok', namesearch: params, emails: contact.emails });
        }
    });
};

module.exports.getAddress = function(req, res) {
    var params = req.params.id;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            res.send({ status: 'Ok', namesearch: params, address: contact.address });
        }
    });
};

module.exports.getPhone = function(req, res) {
    var params = req.params.id;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            res.send({ status: 'Ok', namesearch: params, phones: contact.phones });
        }
    });
};

module.exports.getCompany = function(req, res) {
    var params = req.params.id;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            res.send({ status: 'Ok', namesearch: company, company: contact.company });
        }
    });
};

// Method POST
function ifStringIsNull(s) {
    if (s == null) {
        return '';
    } else {
        return s;
    }
}

function ifArrayIsNull(s) {
    if (s == null) {
        return [];
    } else {
        return [s];
    }
}

module.exports.addNewContact = function(req, res) {
    data = req.body;
    console.log(data)
    var namesearch = ifStringIsNull(data.namesearch);
    var name = ifStringIsNull(data.name);
    var title = ifStringIsNull(data.title);
    var emails = ifArrayIsNull(data.emails);
    var phones = ifArrayIsNull(data.phones);
    var address = ifStringIsNull(data.address);
    var company = ifStringIsNull(data.company);

    var newObj = {
        namesearch: namesearch,
        name: name,
        title: title,
        emails: emails,
        phones: phones,
        address: address,
        company: company
    }

    var newContact = new Contact(newObj);
    newContact.save(function(err) {
        if (err) {
            res.send({ status: 'notOk', error: err })
        } else {
            console.log('new contact created!');
            res.send({ status: 'Ok' })

        }
    })
};

module.exports.setName = function(req, res) {
    var params = req.params.id;
    var name = req.body.name;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.setName(name);
            contact.save(function(e) {
                if (e) {
                    res.send(res.send({ status: 'notOk', error: e }))
                } else {
                    res.send({ status: 'Ok' })
                }
            })
        }
    })
};

module.exports.setTitle = function(req, res) {
    var params = req.params.id;
    var title = req.body.title;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.setTitle(title);
            contact.save(function(e) {
                if (e) {
                    res.send(res.send({ status: 'notOk', error: e }))
                } else {
                    res.send({ status: 'Ok' })
                }
            })
        }
    })
};

module.exports.addEmail = function(req, res) {
    var params = req.params.id;
    var email = req.body.email;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.addEmail(email, function(msg) {
                if (msg.statusCode) {
                    contact.save(function(e) {
                        if (e) {
                            res.send(res.send({ status: 'notOk', error: e }))
                        } else {
                            res.send({ status: 'Ok', detail: msg.detail })
                        }
                    })
                } else {
                    res.send({ status: 'notOk', error: msg.detail })
                }
            });

        }
    })
};

module.exports.setAddress = function(req, res) {
    var params = req.params.id;
    var address = req.body.address;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.setAddress(address);
            contact.save(function(e) {
                if (e) {
                    res.send(res.send({ status: 'notOk', error: e }))
                } else {
                    res.send({ status: 'Ok' })
                }
            })
        }
    })
};

module.exports.addPhone = function(req, res) {
    var params = req.params.id;
    var phone = req.body.phone;
    console.log(phone);
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            console.log('masuk1')
            contact.addPhone(phone, function(msg) {
                console.log(JSON.stringify(msg))
                if (msg.statusCode) {
                    console.log('masuk')
                    contact.save(function(e) {
                        if (e) {
                            res.send(res.send({ status: 'notOk', error: e }))
                        } else {
                            res.send({ status: 'Ok', detail: msg.detail })
                        }
                    })
                } else {
                    res.send({ statusCode: 'notOk', error: msg.detail })
                }
            });

        }
    })
};

module.exports.setCompany = function(req, res) {
    var params = req.params.id;
    var company = req.body.company;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.setCompany(company);
            contact.save(function(e) {
                if (e) {
                    res.send(res.send({ status: 'notOk', error: e }))
                } else {
                    res.send({ status: 'Ok' })
                }
            })
        }
    })
};

//Method PUT

module.exports.updateNameSearch = function(req, res) {
    var params = req.params.id;
    var namesearch = req.body.namesearch;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.setNameSearch(namesearch);
            contact.save(function(e) {
                if (e) {
                    res.send(res.send({ status: 'notOk', error: e }))
                } else {
                    res.send({ status: 'Ok' })
                }
            })
        }
    })
};

module.exports.updateEmail = function(req, res) {
    var params = req.params.id;
    var currentEmail = req.body.currentEmail;
    var newEmail = req.body.newEmail;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.updateEmail(currentEmail, newEmail, function(msg) {
                if (msg.statusCode) {
                    contact.save(function(e) {
                        if (e) {
                            res.send(res.send({ status: 'notOk', error: e }))
                        } else {
                            res.send({ status: 'Ok', detail: msg.detail })
                        }
                    })
                } else {
                    res.send({ status: 'notOk', error: msg.detail })
                }
            });
        }
    })
};

module.exports.updatePhone = function(req, res) {
    var params = req.params.id;
    var currentPhone = req.body.currentEmail;
    var newPhone = req.body.newPhone;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.updatePhone(currentPhone, newPhone, function(msg) {
                if (msg.statusCode) {
                    console.log(JSON.stringify(contact))
                    contact.save(function(e) {
                        if (e) {
                            res.send(res.send({ status: 'notOk', error: e }))
                        } else {
                            res.send({ status: 'Ok', detail: msg.detail })
                        }
                    })
                } else {
                    res.send({ status: 'notOk', error: msg.detail })
                }
            });
        }
    })
};

// Method DELETE

module.exports.removeContact = function(req, res) {
    var params = req.params.id;
    Contact.remove({ namesearch: params }, function(err) {
        if (err) {
            res.send(res.send({ status: 'notOk', error: e }))
        } else {
            res.send({ status: 'Ok' })
        }
    })
};

module.exports.unsetName = function(req, res) {
    var params = req.params.id;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.unsetName();
            contact.save(function(e) {
                if (e) {
                    res.send(res.send({ status: 'notOk', error: e }))
                } else {
                    res.send({ status: 'Ok' })
                }
            })
        }
    })
};

module.exports.unsetTitle = function(req, res) {
    var params = req.params.id;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.unsetTitle();
            contact.save(function(e) {
                if (e) {
                    res.send(res.send({ status: 'notOk', error: e }))
                } else {
                    res.send({ status: 'Ok' })
                }
            })
        }
    })
};

module.exports.removeEmail = function(req, res) {
    var params = req.params.id;
    var selectedEmail = req.body.email;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.removeEmail(selectedEmail, function(msg) {
                if (msg.statusCode) {
                    contact.save(function(e) {
                        if (e) {
                            res.send(res.send({ status: 'notOk', error: e }))
                        } else {
                            res.send({ status: 'Ok', detail: msg.detail })
                        }
                    })
                } else {
                    res.send({ status: 'notOk', error: msg.detail })
                }
            });

        }
    })
};

module.exports.unsetAddress = function(req, res) {
    var params = req.params.id;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.unsetAddress();
            contact.save(function(e) {
                if (e) {
                    res.send(res.send({ status: 'notOk', error: e }))
                } else {
                    res.send({ status: 'Ok' })
                }
            })
        }
    })
};

module.exports.removePhone = function(req, res) {
    var params = req.params.id;
    var selectedPhone = req.body.phone;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.removePhone(selectedPhone, function(msg) {
                if (msg.statusCode) {
                    contact.save(function(e) {
                        if (e) {
                            res.send(res.send({ status: 'notOk', error: e }))
                        } else {
                            res.send({ status: 'Ok', detail: msg.detail })
                        }
                    })
                } else {
                    res.send(res.send({ status: 'notOk', error: msg.detail }))
                }
            });
        }
    })
};

module.exports.unsetCompany = function(req, res) {
    var params = req.params.id;
    Contact.findOne({ namesearch: params }, function(err, contact) {
        if (err || !contact) {
            res.send({ status: 'notOk', error: 'Query Error, contact is not found' })
        } else {
            contact.unsetCompany();
            contact.save(function(e) {
                if (e) {
                    res.send(res.send({ status: 'notOk', error: e }))
                } else {
                    res.send({ status: 'Ok' })
                }
            })
        }
    })
};