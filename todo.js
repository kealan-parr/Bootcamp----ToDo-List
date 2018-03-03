$("ul").on("click", "li", function(){
	$(this).toggleClass("highlighted");
});

// This is where you click to delete tings
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropogation();
});

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var textToDo = $(this).val(); 
		$("ul").append("<li> <span> <i class='fa fa-trash' aria-hidden='true' ></i> </span>" + textToDo + "</li>")
		$(this).val(""); 
	}
});

$("i").on("click", function(){

	$("input").toggleClass("hidden");
})