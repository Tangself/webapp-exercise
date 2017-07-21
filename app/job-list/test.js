 $(document).ready(function () {
$('#checkbox_a1').on('click',function(){
	if(this.checked==true){
		$('#checkbox_a2,#checkbox_a3,#checkbox_a4,#checkbox_a5,#checkbox_a6').prop('checked',true);
	}
	else{
		$('#checkbox_a2,#checkbox_a3,#checkbox_a4,#checkbox_a5,#checkbox_a6').prop('checked',false);
	}
})
$('#checkbox_b1').on('click',function(){
	if(this.checked==true){
		$('#checkbox_b2,#checkbox_b3,#checkbox_b4,#checkbox_b5').prop('checked',true);
	}
	else{
		$('#checkbox_b2,#checkbox_b3,#checkbox_b4,#checkbox_b5').prop('checked',false);
	}
})

  })

 $(document).ready(function () {
        
        $("#clear").click(function () {
            $(":checkbox").attr("checked",false);
        })
    })
 
 $(document).ready(function(){
$('#p1').on('click',function(){ 

if($("#jiantou").text()=="∧"){
$("#jiantou").text("∨"); 
}
else{
$("#jiantou").text("∧"); 
}

}); 
})
 
 $(document).ready(function(){
$('#p2').on('click',function(){ 

if($("#jiantou2").text()=="∧"){
$("#jiantou2").text("∨"); 
}
else{
$("#jiantou2").text("∧"); 
}

}); 
})
 
$(document).ready(function(){
	
	$("#p1").click(function(){
		$("#div1").slideToggle("slow");
	})
})

$(document).ready(function(){
	
	$("#p2").click(function(){
		$("#div2").slideToggle("slow");
	})
})

