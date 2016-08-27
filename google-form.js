$(document).ready(function() {

  // Variable to hold request
  var request;

  // Bind to the submit event of our form
  $("#app_submit").on("click", function(event){
      // Abort any pending request
      if (request) {
          request.abort();
      }
      // setup some local variables
      var $form = $("#apply");

      var serializedData = $form.serialize();

      // Let's select and cache all the fields
      var $inputs = $form.find("input, select, button, textarea");

      if(!verifyFormIsFilled()) {
        return;
      }

      $("#app_submit").html("Submitting");
      // Let's disable the inputs for the duration of the Ajax request.
      // Note: we disable elements AFTER the form data has been serialized.
      // Disabled form elements will not be serialized.
      $inputs.prop("disabled", true);

      // Fire off the request to google script and simple form
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxzGWM-De5HMXKwvmCZ8lfKxBJ4C-ii21jmHjkoQubuBNNrtRY/exec",
        type: "post",
        data: serializedData,
        success: function (response, textStatus, jqXHR){
            // Log a message to the console
            $inputs.prop("disabled", false);
            console.log(response);
            console.log(jqXHR);
            $form.submit();
        },
        error: function (jqXHR, textStatus, errorThrown){
            // Log the error to the console
            console.error(
                "The following error occurred: "+
                textStatus, errorThrown
            );
            alert("There was an error submitting your form.");
            $inputs.prop("disabled", false);
        }
      });

      // Prevent default posting of form
      //event.preventDefault();
      return false;
  });

  function verifyFormIsFilled() {
    if(!$("input[name='netid']").val()) {
      console.log($("input[name='netid']").val());
      return false;
    }
    if(!$("input[name='name']").val()) {
      return false;
    }
    if(!$("input[name='year']").val()) {
      return false;
    }
    if(!$("input[name='major']").val()) {
      return false;
    }
    if(!$("textarea[name='reference']").val()) {
      return false;
    }
    if(!$("textarea[name='subteams']").val()) {
      return false;
    }
    if(!$("input[name='resume']").val()) {
      return false;
    }
    return true;
  }
});
