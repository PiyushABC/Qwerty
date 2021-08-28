var shopcart=[];
$(document).ready(function(){
$(".productItem").click(function(e){
e.preventDefault();
var iteminfo=$(this.dataset)[0];
iteminfo.qty=1;
var itemincart=false;
$.each(shopcart,function(index,value){
	if (value.id==iteminfo.id){
		value.qty=parseInt(value.qty)+parseInt(iteminfo.qty);
		itemincart=true;
	}
})
if (!itemincart) {
	shopcart.push(iteminfo);
} 
sessionStorage["sca"]=JSON.stringify(shopcart);
console.log(shopcart);
})
})