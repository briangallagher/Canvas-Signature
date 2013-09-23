

$fh.ready(function() {

    document.getElementById('saveSig').onclick = function() {
    
        var canvas = document.getElementById("newSignature");
        // save canvas image as data url (png format by default)
        var dataURL = canvas.toDataURL("image/png");

        $fh.act({
            act:'fhdbSaveSig',
            req: {
                data: dataURL,
                timestamp: new Date().getTime()
            }
        }, function(res) {
            //console.log(res);
            document.getElementById("saveSignature").src = res.fields.sigData;
        });

    };
    
$fh.cam({
  act: "photo"
}, function(res) {
  var img = new Image();
    alert(res);
  img.src = "data:image/" + res.format + ";base64," + res.b64;
})
    
  
});