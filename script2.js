$(document).ready(function(){
    $('button').click(function(e){
	e.preventDefault();
	var res = 0;
	var toConvert =  $('input[name=bininput]').val().split("").reverse().join("");
	for (var i = 0; i < toConvert.length; i++) {
	    res = res + Math.pow(2,i) * parseInt(toConvert[i]);
	}
	res = res + "";
	console.log(res);
	//alert(res);
	$('#result').text("result: " + res);
    });
});

