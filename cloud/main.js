var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

exports.fhdbSaveSig = function(params, callback) {
    console.log("Save signature to db");
    //console.log(params);
    $fh.db({
        "act" : "create",
        "type" : "signature",
        "fields" : {
            "sigData" : params.data
        }
    }, function(err, res){
        if(err) return callback(err);
        $fh.db({
        "act" : "read",
        "type" : "signature",
        "guid" : res.guid
        }, function(err, res){
            if(err) return callback(err);
            //$fh.log(res);
            callback(undefined, res);
        });
    });   
};