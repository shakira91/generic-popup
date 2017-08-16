(function($){ 

	var addCookie = function() {
    	$.cookie('hias-popup', 'seen', { expires: 2 , path: '/' });
	} 

	var displayPopup = function() {
	  	var donateImageUrl = "https://www.hias.org/sites/default/files/03.17-hias_popup_v562.png";
	  	var gaCampaignUrl = 'https://secure2.convio.net/hias/site/Donation2?df_id=1961&1961.donation=form1?&utm_source=hias.org&utm_campaign=second-eo&utm_medium=pop-up&utm_content=donate_now';
	  	var donatePopUpOverlay = '<div class="popup-overlay"></div>';
		var donatePopupHtml =
		    [ '<div class="hias-popup" style="height: 460px;background: #224886; border: 1px solid white;">'
				, '  <div id="donate-wrapper" style="position:relative;max-width:776px;">'
				, '<form style="" action="' +gaCampaignUrl+ '"' 
				, 'style="position:relative;" method="post" id="donationForm">'
				, '<div class="popup-button-wrapper">'
				, '<div style="width: 28%; right: 57%; position: absolute;top: 250px;">'
				, '<span onmouseover="this.style.backgroundColor=\'#e10267\'" onmouseout="this.style.backgroundColor=\'#ffffff\'" style="font-size:24px;margin-bottom: 45px;background-color: white;display: inline-block;text-align: center;border-width: 2px; border-radius: 5px;box-shadow: rgba(40, 81, 147, 0.74902) 0px 4px 3px 0px; width:76%; height: 60px;"><label style="margin-top: 9px;display:block;text-decoration:none;color:white;"><a onmouseover="this.style.color=\'#ffffff\'" onmouseout="this.style.color=\'rgb(0, 125, 186)\'" style="color: rgb(0, 125, 186); margin-top: -10px;display: inline-block;cursor:pointer;text-decoration:none;" href="https://secure2.convio.net/hias/site/Donation2?df_id=1961&1961.donation=form1">$18</a></label></span>'
				, '<label for="level_standardexpanded2471" onmouseover="this.style.backgroundColor=\'#e10267\'" onmouseout="this.style.backgroundColor=\'#ffffff\'" style="font-size: 24px; background-color: rgb(255, 255, 255); display: block; text-align: center; border-width: 2px; border-radius: 5px; box-shadow: rgba(40, 81, 147, 0.74902) 0px 4px 3px 0px; width: 76%; height: 60px;"><span onmouseover="this.style.color=\'#ffffff\'" onmouseout="this.style.color=\'rgb(0, 125, 186)\'" style="cursor: pointer; margin-top: -15px; display: block; text-decoration: none; color: rgb(0, 125, 186);"><input onclick="document.getElementById(\'donationForm\').submit();" type="radio" name="level_standardexpanded" id="level_standardexpanded2471" value="2471" style="top:40px;left: 80px;opacity:0.01;z-index:100;position: relative;left: 0px;"><span style="margin-top:7px;margin-left: -19px;display: inline-block;">$100</span></span></label>'				
				, '</div>'
				, '<div style="width: 28%;position: absolute;top: 250px;right: 32%;">'
				, '<label for="level_standardexpanded2473" onmouseover="this.style.backgroundColor=\'#e10267\'" onmouseout="this.style.backgroundColor=\'#ffffff\'" style="font-size: 24px; margin-top: 15px; background-color: rgb(255, 255, 255); display: block; text-align: center; border-width: 2px; border-radius: 5px; box-shadow: rgba(40, 81, 147, 0.74902) 0px 4px 3px 0px; width: 76%; height: 60px;"><span onmouseover="this.style.color=\'#ffffff\'" onmouseout="this.style.color=\'rgb(0, 125, 186)\'" style="cursor: pointer; margin-top: -15px; display: block; text-decoration: none; color: rgb(0, 125, 186);"><input onclick="document.getElementById(\'donationForm\').submit();" type="radio" name="level_standardexpanded" id="level_standardexpanded2473" value="2473" style="top:40px;left: 80px;left: 80px;opacity:0.01;z-index:100;position: relative;left: 0px;"><span style="margin-left: -19px;margin-top: 7px;display: inline-block;">$36</span></span></label>'				
				, '<label for="level_standardexpanded2470" onmouseover="this.style.backgroundColor=\'#e10267\'" onmouseout="this.style.backgroundColor=\'#ffffff\'" style="font-size: 24px; margin-top: 45px; background-color: rgb(255, 255, 255); display: block; text-align: center; border-width: 2px; border-radius: 5px; box-shadow: rgba(40, 81, 147, 0.74902) 0px 4px 3px 0px; width: 76%; height: 60px;"><span onmouseover="this.style.color=\'#ffffff\'" onmouseout="this.style.color=\'rgb(0, 125, 186)\'" style="cursor: pointer; margin-top: -15px; display: block; text-decoration: none; color: rgb(0, 125, 186);"><input onclick="document.getElementById(\'donationForm\').submit();" type="radio" name="level_standardexpanded" id="level_standardexpanded2470" value="2470" style="top: 6px;opacity:0.01;z-index:100;position: relative;left: 0px;"><span style="margin-top: 7px;margin-left: -19px;display: inline-block;">$250</span></span></label>'				
				, '</div>'
				, '<div style="width: 28%;position: absolute;top: 250px;right: 7%;">'
				, '<label for="level_standardexpanded2472" onmouseover="this.style.backgroundColor=\'#e10267\'" onmouseout="this.style.backgroundColor=\'#ffffff\'" style="font-size: 24px; margin-top: 15px; background-color: rgb(255, 255, 255); display: block; text-align: center; border-width: 2px; border-radius: 5px; box-shadow: rgba(40, 81, 147, 0.74902) 0px 4px 3px 0px; width: 76%; height: 60px;"><span onmouseover="this.style.color=\'#ffffff\'" onmouseout="this.style.color=\'rgb(0, 125, 186)\'" style="cursor: pointer; margin-top: -15px; display: block; text-decoration: none; color: rgb(0, 125, 186);"><input onclick="document.getElementById(\'donationForm\').submit();" type="radio" name="level_standardexpanded" id="level_standardexpanded2472" value="2472" style="top:40px;left: 80px;opacity:0.01;z-index:100;position: relative;left: 0px;"><span style="margin-top: 7px;margin-left: -19px;display: inline-block;">$50</span></span></label>'				
				, '<span onmouseover="this.style.backgroundColor=\'#e10267\'" onmouseout="this.style.backgroundColor=\'#ffffff\'" style="font-size:24px;margin-top: 30px;background-color: white;display:block;text-align: center;border-width: 2px; border-radius: 5px;box-shadow: rgba(40, 81, 147, 0.74902) 0px 4px 3px 0px; width:76%; height: 60px;"><label style="margin-top: 7px;display:block;text-decoration:none;color:white;"><a onmouseover="this.style.color=\'#ffffff\'" onmouseout="this.style.color=\'rgb(0, 125, 186)\'" style="color: rgb(0, 125, 186);margin-top: 9px;display: inline-block;cursor: pointer;text-decoration:none;" href="https://secure2.convio.net/hias/site/Donation2?df_id=1961&1961.donation=form1">Other</a></label></span>'
				, '</div>'
				, '</div>'
				, '    <img src="'+donateImageUrl+'" />'
				, '</form>'
				, '</div>'
				, '<button class="hias-popup-close" style="position: absolute;top: 0px;right: 0;color: white;background: none;border: none;">x</button>'
				, '</div>'

		    ].join ("\n");


	        $(donatePopUpOverlay).popup({type: 'overlay', pagecontainer: '.page', closeelement: '.hias-popup-close', autoopen: true, onopen: function() {
	        	$(this).append(donatePopupHtml); }
	        });       


	    $('.popup-overlay, .hias-popup').popup(addCookie());

    }
if (window.location.href.indexOf('passover2017') > -1) {
	return false; 
}    

else if ($.cookie('hias-popup') !== 'seen') {
	
	setTimeout (function() { 
	displayPopup();
	}, 5000);
}


}) (jQuery);



//Code in Luminate
<script type="text/javascript">
var result;
var finalResult;
var finalFinalResult;
var optionSelected;
var option;

if(window.location.href.indexOf("level_standardexpanded") > -1) {

result = decodeURIComponent(location.search); 
finalResult = result.substring(0, result.indexOf('&utm_campaign=second-eo')); 
finalFinalResult = finalResult.substring(finalResult.indexOf('&level_standardexpanded=') + 1);
optionSelected = finalFinalResult.split("=")[1];
option = $("#level_standardexpanded" + optionSelected); 

if (option) {
  setTimeout(function () {
  $("body").find(option).parent().parent().addClass("active");
}, 500);
option.attr('checked', true);

    
}

if(window.location.href.indexOf("donation-amount=18") > -1) { 
 $("input[name='level_standardexpanded2474amount']").val($(this).val());
}

}

</script>
