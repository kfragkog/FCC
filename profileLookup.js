function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName == name){
            if (contacts[i].hasOwnProperty(prop) == true){
                return contacts[i][prop];
            }
            else {
                return "No such property";
            }
        }
    }

    return "No such contact";
}
