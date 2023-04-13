"use strict";

var storage = {
    keyContacts: "contacts_1",
    getContacts: function() {
        // get string from local storage
        var storageString = localStorage.getItem(this.keyContacts) || null;
        var jsObject = JSON.parse(storageString);
        if(storageString !== null){
          return jsObject;
        }else{
         return [];
        }
        // convert string to JavaScript object and return, or return empty array if string is null

    },
    setContacts: function(value) {
        // convert JavaScript object to string
        var storageString = JSON.stringify(value);
        console.log(storageString);
        // store string in local storage
        localStorage.setItem(this.keyContacts, storageString);
    },
    clearContacts: function() {
        localStorage.setItem(this.keyContacts, "");
    }
};
