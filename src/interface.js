
$(document).ready(function() {
  var responder = new Responder();

  // $('#temperature').text(thermostat.temp);


  $("button").click(function( event ){
    $( this ).hide( 'slow' ).show( 'slow' ); // can also put a number in milliseconds instead of slow
  });

  $('#test').click(function() {
   responder.message();
    // $('#demo').text(responder.message);
    //  is the same as
  //  document.getElementById("temperature").innerHTML = thermostat.temp;
  });

  // $('#temp-down').click(function() {
  //  thermostat.down();
  //  document.getElementById("temperature").innerHTML = thermostat.temp;
  // });


 // $('#temp-reset').click(function() {
 //    thermostat.reset();
 //    // redo this in J query
 //    document.getElementById("temperature").innerHTML = thermostat.temp;
 //  });

 // $('#powersaving-switch').click(function() {
 //  thermostat.powerSavingButton();
 //  $('#power-saving-status').text('off') // get it to toggle b
 //  // https://stackoverflow.com/questions/309081/how-do-you-create-a-toggle-button
 // })

});
