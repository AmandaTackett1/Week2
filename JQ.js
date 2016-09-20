

// $(function(){

//     $("#para").click(function(ev){
//         //$(#para). fadeOut('slow', "linear')
//         // $(this).fadeOut('slow', 'linear');
//         //ev.target == this
//         $(ev.target).fadeOut('slow', 'linear');
//     });
// });




// how to add actions to elements
$(function(){ 
    $("h3")
.css("text-decoration", "italic")
.css("font-style", "italic")
// $("ul li:first-child")
$("ul").find("li:first-child")
.css("color", "red")


});