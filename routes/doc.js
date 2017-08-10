/**
 * @api {GET} /contacts Get All Contacts
 * @apiName View All Contacts
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * 
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok",
 *      "contacts"     : [
 *          {
 *              "namesearch": "sofyan",
 *              "name": "Muhammad Sofyan Qusyairi",
 *              "title": "Mr.",
 *              "company": "Pt.nnn",
 *              "phones":["081xx","08123xxx"],
 *              "email": ["a@com","b@com"]
 *          }
 *      ],
 *      number_of_instances: 1
 *  }
 */

/**
 * @api {GET} /contact Get All Contacts
 * @apiName View All Contacts
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * 
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok",
 *      "contacts"     : [
 *          {
 *              "namesearch": "sofyan",
 *              "name": "Muhammad Sofyan Qusyairi",
 *              "title": "Mr.",
 *              "company": "Pt.nnn",
 *              "phones":["081xx","08123xxx"],
 *              "email": ["a@com","b@com"]
 *          }
 *      ],
 *      number_of_instances: 1
 *  }
 */

/**
 * @api {POST} /contact/new Create New Contact
 * @apiName Create New Contact
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * 
 * @apiParam {String} namesearch unique string untuk keyword pencarian kontak
 * @apiParam {String} name Optional
 * @apiParam {String} title Optional
 * @apiParam [String] address Optional
 * @apiParam {String} company Optional
 * @apiParam {String} email Optional
 * @apiParam {String} phone Optional
 *
 * @apiParamExample {json} Request-Example:
 * {
 *  "namesearch":sofyan",
 *  "name":"Muhammad Sofyan",
 *  "email": "sofyan@mail.com"
 * }
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */

/**
 * @api {POST} /contact/:id/name add name
 * @apiName add name
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * @apiParam {String} id keyword namesearch
 * @apiParam {String} name name
 *
 * @apiParamExample {json} Request-Example:
 * {
 *  "name":"Muhammad Sofyan"
 * }
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */

/**
 * @api {POST} /contact/:id/email add email
 * @apiName add email
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * @apiParam {String} id keyword namesearch
 * @apiParam {String} email new email
 *
 * @apiParamExample {json} Request-Example:
 * {
 *  "email":"sofyan2@mail.com"
 * }
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */

/**
 * @api {POST} /contact/:id/phone add phone
 * @apiName add phone
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * @apiParam {String} id keyword namesearch
 * @apiParam {String} phone new phone
 *
 * @apiParamExample {json} Request-Example:
 * {
 *  "phone":"08123xx"
 * }
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */

/**
 * @api {PUT} /contact/:id Change Namesearch
 * @apiName Change Namesearch
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * 
 * @apiParam {String} id keyword namesearch
 * 
 * @apiParam {String} namesearch
 *
 * @apiParamExample {json} Request-Example:
 * {
 *  "namesearch":"sofyan2"
 * }
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */

/**
 * @api {PUT} /contact/:id/name Change Name
 * @apiName Change Name or address or company or title
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * 
 * @apiParam {String} id keyword namesearch
 * 
 * @apiParam {String} name new name
 *
 * @apiParamExample {json} Request-Example:
 * {
 *  "name":"Muhammad Sofyan Qusyairi"
 * }
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */

/**
 * @api {PUT} /contact/:id/email Change Email
 * @apiName Change Email
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * 
 * @apiParam {String} id keyword namesearch
 * 
 * @apiParam {String} currentEmail current email
 * @apiParam {String} newEmail new email
 *
 * @apiParamExample {json} Request-Example:
 * {
 *  "currentEmail":"sofyan@mail.com",
 *  "newEmail": "sofyan2@mail.com"
 * }
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */

/**
 * @api {PUT} /contact/:id/phone Change Phone
 * @apiName Change Phone
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * 
 * @apiParam {String} id keyword namesearch
 * 
 * @apiParam {String} currentPhone current phone
 * @apiParam {String} newPhone new phone
 *
 * @apiParamExample {json} Request-Example:
 * {
 *  "currentPhone":"081xxx",
 *  "newPhone":"08123xxx"
 * }
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */

/**
 * @api {DELETE} /contact/:id Delete Contact
 * @apiName Delete Contact
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * 
 * @apiParam {String} id keyword namesearch
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */

/**
 * @api {DELETE} /contact/:id Delete Name
 * @apiName Delete Name
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * 
 * @apiParam {String} id keyword namesearch
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */

/**
 * @api {DELETE} /contact/:id/title Delete Title
 * @apiName Delete Title
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * 
 * @apiParam {String} id keyword namesearch
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */

/**
 * @api {DELETE} /contact/:id/address Delete Address
 * @apiName Delete Address
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * 
 * @apiParam {String} id keyword namesearch
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */

/**
 * @api {DELETE} /contact/:id/company Delete Company
 * @apiName Delete Company
 * @apiGroup Contacts
 * @apiDescription Deskripsi
 * 
 * @apiParam {String} id keyword namesearch
 * 
 * @apiSuccessExample  {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "status"    : "Ok"
 *  }
 */