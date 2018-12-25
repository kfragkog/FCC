{"index.js":"// Setup\nvar collection = {\n    \"2548\": {\n      \"album\": \"Slippery When Wet\",\n      \"artist\": \"Bon Jovi\",\n      \"tracks\": [ \n        \"Let It Rock\", \n        \"You Give Love a Bad Name\" \n      ]\n    },\n    \"2468\": {\n      \"album\": \"1999\",\n      \"artist\": \"Prince\",\n      \"tracks\": [ \n        \"1999\", \n        \"Little Red Corvette\" \n      ]\n    },\n    \"1245\": {\n      \"artist\": \"Robert Palmer\",\n      \"tracks\": [ ]\n    },\n    \"5439\": {\n      \"album\": \"ABBA Gold\"\n    }\n};\n// Keep a copy of the collection for tests\nvar collectionCopy = JSON.parse(JSON.stringify(collection));\n\n// Only change code below this line\nfunction updateRecords(id, prop, value) {\n  if (value != \"\"){\n    if (prop != \"tracks\"){\n      collection[id][prop] = value;\n    }\n    else {\n      if (collection[id].hasOwnProperty(\"tracks\") == false){\n      collection[id][prop] = [];\n      // console.log(value);\n      }\n\n      collection[id][prop].push(value);\n    }   \n  }\n  else{\n    delete collection[id][prop];\n  }\n\n  return collection;\n} \n\n\n\n// Alter values below to test your code\n// updateRecords(5439, \"tracks\", \"lslal\");\n\n"}


// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (value != ""){
    if (prop != "tracks"){
      collection[id][prop] = value;
    }
    else {
      if (collection[id].hasOwnProperty("tracks") == false){
      collection[id][prop] = [];
      // console.dir(collection); ASK LAURA I GET SO MANY OBJECTS IN THE CONSOLE
      }

      collection[id][prop].push(value);
    }
  }
  else{
    delete collection[id][prop];
  }

  return collection;
}



// Alter values below to test your code
// updateRecords(5439, "tracks", "lslal");
