
<script> (function() {

 var form = $j('#testResultsForm');

form.submit(function(evt) {
disabled.css("pointer-events", "none"); // to disable user input 
var disabled = form.find(':disabled');

disabled.each(function() {

$j(this).removeAttr('disabled');

});

});

 })() </script>
