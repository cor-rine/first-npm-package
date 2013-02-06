(function() {
    //Declaring variables  
    var fs, reptxt, filedata;

    //Requiring files
    fs = require('fs');
    reptxt = require ('./replace');

    //Reading files
    fs.readFile( "../test.txt",'utf8',function(err,data){
      if(err) {
        console.error("Could not open file: %s", err);
        process.exit(1);
     }
     //Calling replacement function
     filedata = reptxt.replacethis(data,"npm","123");

     //Writing replaced text into a new file
     fs.writeFile(__dirname + "out.txt", filedata, function(err){
            if(err) {
                console.error("Error saving file %s", err);
                process.exit(1);
            }
            console.log('out.txt file saved!');
        });

    });

}).call(this)