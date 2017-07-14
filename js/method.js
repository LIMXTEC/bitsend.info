var active = 0;
var active_feature = 0;
var active_pagination = 1;
var active_pagination_tos = 1;

$( document ).ready(function() {
	$('.info-active').show();
    $("#homePage").on( 'click',function(){
	if(active==1){
			$(".pt-page-2").addClass("magictime vanishOut");
		
		$("#li-exchange").removeClass("active");
			$("#li-home").addClass("active");
		var wait = window.setTimeout( function(){
			$(".pt-page-2").hide();
		$(".pt-page-1").fadeIn();
			$('.pt-page-1').removeClass('magictime vanishIn');
			$('.pt-page-2').removeClass('magictime vanishOut');
			}, 1000 );
		active = 0;
	}
			$(".info-active").hide();
			$("#defult-info").addClass('magictime vanishIn');
			$("#pt-main").removeClass("feat-potrait").removeClass("tos-potrait").removeClass("spec-potrait").removeClass("feat-potrait2").removeClass("menu-potrait").removeClass("exchange-potrait");
				
			$("#li-exchange").removeClass("active");
			$("#li-home").addClass("active");
			var wait = window.setTimeout( function(){
			$('#default-info').show();
			$('.info').removeClass('magictime vanishIn').removeClass('info-active');
			$('#default-info').addClass('info-active');
			}, 1000 );
		
});
$("#homePage2").on( 'click',function(){
	
		if(active==1){
			$(".pt-page-2").addClass("magictime vanishOut");
		
		
		$("#li-exchange").removeClass("active");
			$("#li-home").addClass("active");
		var wait = window.setTimeout( function(){
			$(".pt-page-2").hide();
			$(".pt-page-1").fadeIn();
			$('.pt-page-1').removeClass('magictime vanishIn');
			$('.pt-page-2').removeClass('magictime vanishOut');
			}, 1000 );
		active = 0;
		}
			$(".info-active").hide();
			$("#defult-info").addClass('magictime vanishIn');
			$("#pt-main").removeClass("feat-potrait").removeClass("tos-potrait").removeClass("spec-potrait").removeClass("feat-potrait2").removeClass("menu-potrait").removeClass("exchange-potrait");
			
			var wait = window.setTimeout( function(){
			$('#default-info').show();
			$('.info').removeClass('magictime vanishIn').removeClass('info-active');
			$('#default-info').addClass('info-active');
			}, 1000 );
		
			
});
$("#exchangePage").on( 'click',function(){
	
		$(".pt-page-1").addClass("magictime vanishOut");
		
		
		
		$("#pt-main").removeClass("feat-potrait").removeClass("tos-potrait").removeClass("spec-potrait").removeClass("feat-potrait2").removeClass("menu-potrait");
			$("#pt-main").addClass("exchange-potrait");
		
			$("#li-home").removeClass("active");
			$("#li-exchange").addClass("active");
			active=1;
			var wait = window.setTimeout( function(){
			$(".pt-page-1").hide();
			$(".pt-page-2").fadeIn();
			
			$('.pt-page-2').removeClass('magictime vanishIn');
			$('.pt-page-1').removeClass('magictime vanishOut');
			}, 1000 );
});
});

function showInfo(id){
	$(".info-active").hide();
	$("#pt-main").removeClass("feat-potrait").removeClass("tos-potrait").removeClass("spec-potrait").removeClass("feat-potrait2").removeClass("menu-potrait");
		if(id==1){
		
			$("#ticker-info").addClass('magictime vanishIn');
			$('#ticker-info').show();
			$("#pt-main").addClass("menu-potrait");
			if (window.matchMedia("(orientation: portrait)").matches) {
			
			}
			var wait = window.setTimeout( function(){
			$('.info').removeClass('magictime vanishIn').removeClass('info-active');
			$('#ticker-info').addClass('info-active');
			}, 1000 );
		}
		
		else if(id==2){
			$("#masternodes-info").addClass('magictime vanishIn');
			$('#masternodes-info').show();
			$("#pt-main").addClass("menu-potrait");
			if (window.matchMedia("(orientation: portrait)").matches) {
			
			}
			var wait = window.setTimeout( function(){
			$('.info').removeClass('magictime vanishIn').removeClass('info-active');
			$('#masternodes-info').addClass('info-active');
			}, 1000 );
		
		}
		else if(id==3){
			$("#spec-info").addClass('magictime vanishIn');
			$('#spec-info').show();
			$('#pt-main').addClass('spec-potrait');
			if (window.matchMedia("(orientation: portrait)").matches) {
			$('#pt-main').addClass('spec-potrait');
			}
			var wait = window.setTimeout( function(){
			$('.info-active').hide();
			$('.info').removeClass('magictime vanishIn').removeClass('info-active');
			$('#spec-info').addClass('info-active');
			}, 1000 );
		
		}
		else if(id==4){
			$("#xevan-info").addClass('magictime vanishIn');
			$('#xevan-info').show();
			$("#pt-main").addClass("menu-potrait");
			if (window.matchMedia("(orientation: portrait)").matches) {
			
			}
			
			var wait = window.setTimeout( function(){
			$('.info').removeClass('magictime vanishIn').removeClass('info-active');
			$('#xevan-info').addClass('info-active');
			}, 1000 );
		
			
		}
		else if(id==5){
			$("#dk3-info").addClass('magictime vanishIn');
			$('#dk3-info').show();
			$("#pt-main").addClass("menu-potrait");
			if (window.matchMedia("(orientation: portrait)").matches) {
			
			}
			var wait = window.setTimeout( function(){
			$('.info').removeClass('magictime vanishIn').removeClass('info-active');
			$('#dk3-info').addClass('info-active');
			}, 1000 );
		}
		else if(id==6){
			$("#features-info").addClass('magictime vanishIn');
			$('#features-info').show();
			showFeatures(0);
			$('#pt-main').addClass('feat-potrait');
			if (window.matchMedia("(orientation: portrait)").matches) {
			
			}
			var wait = window.setTimeout( function(){
			$('.info').removeClass('magictime vanishIn').removeClass('info-active');
			$('#features-info').addClass('info-active');
			}, 1000 );
		}
		else if(id==7){
			showPaginationTos(1,1,3);
			$("#tos-info").addClass('magictime vanishIn');
			$('#tos-info').show();
			$('#pt-main').addClass('tos-potrait');
			if (window.matchMedia("(orientation: portrait)").matches) {
			
			$('.tos-page-1').css('height','35vh');
			}
			var wait = window.setTimeout( function(){
			$('.info').removeClass('magictime vanishIn').removeClass('info-active');
			$('#tos-info').addClass('info-active');
			}, 1000 );
		}
			active=id;
		
	}
	
	function showFeatures(id){
		
		active_pagination = 1;
		if(id==0){
		$("#pt-main").removeClass("feat-potrait2");
		$("#features-detail").hide();
		$(".features").hide();
		$("#features-menu").fadeIn();
		}else{
		$("#pt-main").addClass("feat-potrait2");
			var str = "";
		$("#features-menu").hide();
		
		if(id==1){
		showPagination(1,1,2);
		$("#features-detail-1").show();
		}
		else if(id==2){
		$("#features-detail-2").show();
		}
		else if(id==3){
		showPagination(3,1,2);
		$("#features-detail-3").show();
		}
		else if(id==4){
		showPagination(4,1,2);
		$("#features-detail-4").show();
		}
		else if(id==5){
		showPagination(5,1,2);
		$("#features-detail-5").show();
		}
		else if(id==6){
		showPagination(6,1,7);
		$("#features-detail-6").show();
		}
		if (window.matchMedia("(orientation: portrait)").matches) {
			$('.feat-page-'.id).css('height','20vh');
			}
		$("#features-detail").fadeIn();
		}
		
	}

	function showPagination(page, id, max){
		active_pagination = id;
		if(active_pagination==max){
			$("#next-page-"+page).hide();
			}
		else{
		$("#next-page-"+page).show();
		}
		
		
		$(".feat-"+page).removeClass("active");
		$("#feat-"+page+"-"+id).addClass("active");
		$(".feat-page-"+page).hide();
		$("#feat-"+page+"-p"+id).fadeIn();
	}
	
	function backPagination(page){
		if(active_pagination==1){
			showFeatures(0);
		}
		else{
		var id = active_pagination-1;
		active_pagination = id;
		$("#next-page-"+page).show();
		$(".feat-"+page).removeClass("active");
		$("#feat-"+page+"-"+id).addClass("active");
		$(".feat-page-"+page).hide();
		$("#feat-"+page+"-p"+id).fadeIn();	
		}
	}
	function nextPagination(page,max){
		var id = active_pagination+1;
		active_pagination = id;
		$(".feat-"+page).removeClass("active");
		$("#feat-"+page+"-"+id).addClass("active");
		$(".feat-page-"+page).hide();
		$("#feat-"+page+"-p"+id).fadeIn();
		if(active_pagination==max){
			$("#next-page-"+page).hide();
		}
		else{
			$("#next-page-"+page).show();
		}
	}
	

	function showPaginationTos(page, id, max){
		active_pagination_tos = id;
		if(active_pagination_tos==max){
			$("#next-tos-"+page).hide();
			$("#back-tos-"+page).show();
			}
		else if(active_pagination_tos==1){
		$("#next-tos-"+page).show();
		$("#back-tos-"+page).hide();
		}else{
		$("#next-tos-"+page).show();
		$("#back-tos-"+page).show();
		}
		
		
		$(".tos-"+page).removeClass("active");
		$("#tos-"+page+"-"+id).addClass("active");
		$(".tos-page-"+page).hide();
		$("#tos-"+page+"-p"+id).fadeIn();
	}
	function backPaginationTos(page){
	
		if(active_pagination_tos==1){
			$("#back-tos-"+page).hide();
		}
		else{
		var id = active_pagination_tos-1;
		active_pagination_tos = id;
		$("#next-tos-"+page).show();
		$(".tos-"+page).removeClass("active");
		$("#tos-"+page+"-"+id).addClass("active");
		$(".tos-page-"+page).hide();
		$("#tos-"+page+"-p"+id).fadeIn();	
		if(id==1){
		$("#back-tos-"+page).hide();
		}
		}
	}
	function nextPaginationTos(page,max){
	
		var id = active_pagination_tos+1;
		active_pagination_tos = id;
		$(".tos-"+page).removeClass("active");
		$("#tos-"+page+"-"+id).addClass("active");
		$(".tos-page-"+page).hide();
		$("#tos-"+page+"-p"+id).fadeIn();
		
			$("#back-tos-"+page).show();
		if(active_pagination_tos==max){
			$("#next-tos-"+page).hide();
		}
		else{
			$("#next-page-"+page).show();
		}
	}
	
	function moreSpec(){
		$("#more-spec").show();
		$("#more-spec-btn").hide();
	}
	function lessSpec(){
		$("#more-spec").hide();
		$("#more-spec-btn").show();
		}
	function showMail(){
		
			vex.dialog.prompt({
    message: 'Fill your email address below',
    placeholder: 'email',
	className: 'vex-theme-default',
    callback: function (value) {
        console.log(value)
    }
})
		}