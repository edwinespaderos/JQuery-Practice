
console.log('El Edwin');


// ////////// jq3 ///////////////////

$(".one").hover(function(){
	
	$(this).fadeOut("slow");

})

// ///////////// jq2 //////////////////

$( ".two" ).mousemove(function( event ) {
  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  $( ".yo" ).text( "( event.pageX, event.pageY ) : " + pageCoords );
});

// ///////////// jq3 ///////////////////

var i = 0;
$( "div.overout" )
  .mouseover(function() {
    $( "p:first", this ).text( "mouse over" );
  })
  .mouseout(function() {
    $( "p:first", this ).text( "mouse out" );
    $( "p:last", this ).text( ++i );
  });