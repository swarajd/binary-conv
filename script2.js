$(document).ready(function(){
    $('button').click(function(e){
	e.preventDefault();
	var res = 0;
	var orig = $('input[name=bininput]').val();
	var toConvert =  $('input[name=bininput]').val().split("").reverse().join("");
	for (var i = 0; i < toConvert.length; i++) {
	    if (toConvert[i] != "1" && toConvert[i] != "0") {
		res = "invalid binary value";
		break;
	    }
	    res = res + Math.pow(2,i) * parseInt(toConvert[i]);
	}
	res = res + "";
	console.log(res);
	$('table').append("<tr><td>"+orig+"</td><td>"+res+"</td></tr>");
    });
});

