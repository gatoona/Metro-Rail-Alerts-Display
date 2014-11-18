(function ($) {

       $.vscroller = function() {

           
				
  
                
                $.ajax({
                    url: '../request/cached-listsrss.xml',
                    type: 'GET',
                    dataType: 'xml',
                    cache: false,
                    success: function (xml) {
 
               
					   
					    $(xml).find('news').each(function () {
							
						var todayDatez = new Date();
						var todayDategetz = todayDatez.getTime();	
						totalElementsz = $(this).attr('date');
						var pastDatez = new Date(totalElementsz);
						var pastDategetz = pastDatez.getTime();
						var htext = $(this).find('headline').text(); 
						 
						 var lapsedTimez = (todayDategetz - pastDategetz)/1000;
						 var tz = Math.round(lapsedTimez / 3600);
						 
						 if(htext == '@metrolaalerts'){
						 if (tz <= 3){
							
         
                           
                         
                         
                            var newsText = $(this).find('detail').text();
					
                         
                          getText(newsText)}}
								else{
							
							
							}
                        });

                       
          
                    
					   
                       
					
                    }
                });

				

				
                function getCircle(date) {
	
                    date = date.replace(/-/g, '/'); 
				// var todayDate = new Date("January 24, 2014 15:55:02 -0800");	
				   var todayDate = new Date();	
			
				   
				   var pastDate = new Date(date);
				 
				   var todayDateget = todayDate.getTime();	
				   var pastDateget = pastDate.getTime();

				   
				   var lapsedTime = (todayDateget - pastDateget)/1000;
				   
				if (lapsedTime < 60) {
			return '< 1 min';
		} else if (lapsedTime < (60*60)) {
			var t = Math.round(lapsedTime / 60);
			var u = 'min';
		} else if (lapsedTime < (24*60*60)) {
			var t = Math.round(lapsedTime / 3600);
			var u = 'hour';
		} else if (lapsedTime < (7*24*60*60)) {
			var t = Math.round(lapsedTime / 86400);
			var u = 'day';
		} else {
			var t = Math.round(lapsedTime / 604800);
			var u = 'week';
		}
		
		// Check for plural units
		if (t > 1) u += 's';
		var counting = t + ' ' + u + ' ago';
				   

			
                   
                    return (" - <i>" + counting + "</i>");
                }
				
				
				
				 function getText(newsText) {
					
			newsText = newsText.split('Upcoming Advisories')[0];		
	
					
                  //newsText = newsText.replace(/LA/g, 'Lily'); 
				  	  
		var timmee = getCircle(totalElementsz);


	if(newsText.indexOf('Blue') > -1) {

document.getElementById("BLineOK").style.display = "none"; 					  
var iDiv = document.createElement('div');
iDiv.id = 'blueblock';
iDiv.className = 'block';
document.getElementById("blueLine").appendChild(iDiv).innerHTML = newsText + timmee;

$("div.blueLine").each(function(){
    $("div:not(:nth-of-type(2))", this).hide();
});

}


	if(newsText.indexOf('Expo') > -1) {

document.getElementById("ELineOK").style.display = "none"; 					  
var iDiv = document.createElement('div');
iDiv.id = 'expoblock';
iDiv.className = 'block';
document.getElementById("expoLine").appendChild(iDiv).innerHTML = newsText + timmee;

$("div.expoLine").each(function(){
    $("div:not(:nth-of-type(2))", this).hide();
});

}

if(newsText.indexOf('Green') > -1) {
					  
document.getElementById("GLineOK").style.display = "none"; 
var iDiv = document.createElement('div');
iDiv.id = 'greenblock';
iDiv.className = 'block';
document.getElementById("greenLine").appendChild(iDiv).innerHTML = newsText + timmee;

$("div.greenLine").each(function(){
    $("div:not(:nth-of-type(2))", this).hide();
});


}
if(newsText.indexOf('Gold') > -1) {
					  
document.getElementById("GlLineOK").style.display = "none"; 
var iDiv = document.createElement('div');
iDiv.id = 'goldblock';
iDiv.className = 'block';
document.getElementById("goldLine").appendChild(iDiv).innerHTML = newsText + timmee;

$("div.goldLine").each(function(){
    $("div:not(:nth-of-type(2))", this).hide();
});


}

if(newsText.indexOf('Purple') > -1) {
					  
document.getElementById("PLineOK").style.display = "none"; 
var iDiv = document.createElement('div');
iDiv.id = 'purpleblock';
iDiv.className = 'block';
document.getElementById("purpleLine").appendChild(iDiv).innerHTML = newsText + timmee;

$("div.purpleLine").each(function(){
    $("div:not(:nth-of-type(2))", this).hide();
});


}


	if(newsText.indexOf('Red') > -1) {

document.getElementById("RLineOK").style.display = "none"; 					  
var iDiv = document.createElement('div');
iDiv.id = 'redblock';
iDiv.className = 'block';
document.getElementById("redLine").appendChild(iDiv).innerHTML = newsText + timmee;

$("div.redLine").each(function(){
    $("div:not(:nth-of-type(2))", this).hide();
});

}




			
		
                                          
                }

      
        }
 
})(jQuery);
