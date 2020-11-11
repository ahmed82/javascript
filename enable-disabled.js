
<script> (function() {

 var form = $j('#testResultsForm');

form.submit(function(evt) {

var disabled = form.find(':disabled');

disabled.each(function() {

$j(this).removeAttr('disabled');

});

});

 })() </script>
