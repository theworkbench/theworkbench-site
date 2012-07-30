$(document).ready(function(){
	$("#register-basic").colorbox({
		fixed: true,
		open: true,
		inline:true,
		overlayClose: true,
		escKey: true,
		transition: "fade" //,
		// width:"50%"
	});
	$("#register-lite").colorbox({inline:true, width:"50%"});
	$("#register-full").colorbox({inline:true, width:"50%"});
});