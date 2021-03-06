define({ "api": [
  {
    "type": "PUT",
    "url": "/contact/:id/email",
    "title": "Change Email",
    "name": "Change_Email",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>keyword namesearch</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currentEmail",
            "description": "<p>current email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newEmail",
            "description": "<p>new email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"currentEmail\":\"sofyan@mail.com\",\n \"newEmail\": \"sofyan2@mail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "PUT",
    "url": "/contact/:id/name",
    "title": "Change Name",
    "name": "Change_Name_or_address_or_company_or_title",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>keyword namesearch</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>new name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"name\":\"Muhammad Sofyan Qusyairi\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "PUT",
    "url": "/contact/:id",
    "title": "Change Namesearch",
    "name": "Change_Namesearch",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>keyword namesearch</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "namesearch",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"namesearch\":\"sofyan2\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "PUT",
    "url": "/contact/:id/phone",
    "title": "Change Phone",
    "name": "Change_Phone",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>keyword namesearch</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currentPhone",
            "description": "<p>current phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPhone",
            "description": "<p>new phone</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"currentPhone\":\"081xxx\",\n \"newPhone\":\"08123xxx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "POST",
    "url": "/contact/new",
    "title": "Create New Contact",
    "name": "Create_New_Contact",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "namesearch",
            "description": "<p>unique string untuk keyword pencarian kontak</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Optional</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "String",
            "description": "<p>address Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Optional</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"namesearch\":sofyan\",\n \"name\":\"Muhammad Sofyan\",\n \"email\": \"sofyan@mail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "DELETE",
    "url": "/contact/:id/address",
    "title": "Delete Address",
    "name": "Delete_Address",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>keyword namesearch</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "DELETE",
    "url": "/contact/:id/company",
    "title": "Delete Company",
    "name": "Delete_Company",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>keyword namesearch</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "DELETE",
    "url": "/contact/:id",
    "title": "Delete Contact",
    "name": "Delete_Contact",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>keyword namesearch</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "DELETE",
    "url": "/contact/:id",
    "title": "Delete Name",
    "name": "Delete_Name",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>keyword namesearch</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "DELETE",
    "url": "/contact/:id/title",
    "title": "Delete Title",
    "name": "Delete_Title",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>keyword namesearch</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "GET",
    "url": "/contact",
    "title": "Get All Contacts",
    "name": "View_All_Contacts",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\",\n    \"contacts\"     : [\n        {\n            \"namesearch\": \"sofyan\",\n            \"name\": \"Muhammad Sofyan Qusyairi\",\n            \"title\": \"Mr.\",\n            \"company\": \"Pt.nnn\",\n            \"phones\":[\"081xx\",\"08123xxx\"],\n            \"email\": [\"a@com\",\"b@com\"]\n        }\n    ],\n    number_of_instances: 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "GET",
    "url": "/contacts",
    "title": "Get All Contacts",
    "name": "View_All_Contacts",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\",\n    \"contacts\"     : [\n        {\n            \"namesearch\": \"sofyan\",\n            \"name\": \"Muhammad Sofyan Qusyairi\",\n            \"title\": \"Mr.\",\n            \"company\": \"Pt.nnn\",\n            \"phones\":[\"081xx\",\"08123xxx\"],\n            \"email\": [\"a@com\",\"b@com\"]\n        }\n    ],\n    number_of_instances: 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "POST",
    "url": "/contact/:id/email",
    "title": "add email",
    "name": "add_email",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>keyword namesearch</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>new email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"email\":\"sofyan2@mail.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "POST",
    "url": "/contact/:id/name",
    "title": "add name",
    "name": "add_name",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>keyword namesearch</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"name\":\"Muhammad Sofyan\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "POST",
    "url": "/contact/:id/phone",
    "title": "add phone",
    "name": "add_phone",
    "group": "Contacts",
    "description": "<p>Deskripsi</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>keyword namesearch</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>new phone</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"phone\":\"08123xx\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\"    : \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/doc.js",
    "groupTitle": "Contacts"
  }
] });
