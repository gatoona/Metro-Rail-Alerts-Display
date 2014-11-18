(function ($) {
	$.vscroller = function() {

		function resetBoxes(){

			var default_status = "<div class='block'>Normal service, no alerts</div>"
			document.getElementById("goldBox").innerHTML = default_status;
			document.getElementById("greenBox").innerHTML = default_status;
			document.getElementById("redBox").innerHTML = default_status;
			document.getElementById("purpleBox").innerHTML = default_status;
			document.getElementById("blueBox").innerHTML = default_status;
			document.getElementById("expoBox").innerHTML = default_status;
		
		}

		$.ajax({
			url: 'tweetledee/listsrss.php?list=unionstation',
			type: 'GET',
			dataType: 'xml',
			cache: false,
			success: function (xml) {
				resetBoxes();
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
						if (tz <= 4){
						//if (tz > 4){
							var newsText = $(this).find('detail').text();
							getText(newsText)
						}
					}
					
					else {
					}
				
				});
			
			},

			error: function() {
				resetBoxes();
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
			}
			else if (lapsedTime < (60*60)) {
				var t = Math.round(lapsedTime / 60);
				var u = 'min';
			}
			else if (lapsedTime < (24*60*60)) {
				var t = Math.round(lapsedTime / 3600);
				var u = 'hour';
			}
			else if (lapsedTime < (7*24*60*60)) {
				var t = Math.round(lapsedTime / 86400);
				var u = 'day';
			}
			else {
				var t = Math.round(lapsedTime / 604800);
				var u = 'week';
			}

			// Check for plural units
			if (t > 1) u += 's';
			var counting = t + ' ' + u + ' ago';
			return (" - <i>" + counting + "</i>");
		}

		//RegExp - Line Categories
		var Bluereg = new RegExp('(\^|[^A-Za-z])(Blue)(\b|[^A-Za-z]|$)', 'g');
		var Exporeg = new RegExp('(\^|[^A-Za-z])(Expo)(\b|[^A-Za-z]|$)', 'g');
		var Greenreg = new RegExp('(\^|[^A-Za-z])(Green)(\b|[^A-Za-z]|$)', 'g');
		var Goldreg = new RegExp('(\^|[^A-Za-z])(Gold)(\b|[^A-Za-z]|$)', 'g');
		var Purplereg = new RegExp('(\^|[^A-Za-z])(Purple)(\b|[^A-Za-z]|$)', 'g');
		var Redreg = new RegExp('(\^|[^A-Za-z])(Red)(\b|[^A-Za-z]|$)', 'g');					
		
		function getText(newsText) {

			newsText = newsText.split('Upcoming Advisories')[0];		
			newsText = newsText.replace(/.LA/g, '');
			newsText = newsText.replace(/.LH/g, '');
			newsText = newsText.replace(/.ST/g, '');
			
			var timmee = getCircle(totalElementsz);

			if(newsText.match(Bluereg)) {					  
				var iDiv = document.createElement('div');
				iDiv.id = 'blueblock';
				iDiv.className = 'block';
				document.getElementById("blueBox").appendChild(iDiv).innerHTML = newsText + timmee;
				$("div.blueBox").each(function(){
					$("div:not(:nth-of-type(2))", this).hide();
				});
			}

			if(newsText.match(Exporeg)) {					  
				var iDiv = document.createElement('div');
				iDiv.id = 'expoblock';
				iDiv.className = 'block';
				document.getElementById("expoBox").appendChild(iDiv).innerHTML = newsText + timmee;
				$("div.expoBox").each(function(){
					$("div:not(:nth-of-type(2))", this).hide();
				});
			}

			if(newsText.match(Greenreg)) {
				var iDiv = document.createElement('div');
				iDiv.id = 'greenblock';
				iDiv.className = 'block';
				document.getElementById("greenBox").appendChild(iDiv).innerHTML = newsText + timmee;
				$("div.greenBox").each(function(){
					$("div:not(:nth-of-type(2))", this).hide();
				});
			}

			if(newsText.match(Goldreg)) {
				var iDiv = document.createElement('div');
				iDiv.id = 'goldblock';
				iDiv.className = 'block';
				document.getElementById("goldBox").appendChild(iDiv).innerHTML = newsText + timmee;
				$("div.goldBox").each(function(){
					$("div:not(:nth-of-type(2))", this).hide();
				});
			}

			if(newsText.match(Purplereg)) {
				var iDiv = document.createElement('div');
				iDiv.id = 'purpleblock';
				iDiv.className = 'block';
				document.getElementById("purpleBox").appendChild(iDiv).innerHTML = newsText + timmee;
				$("div.purpleBox").each(function(){
					$("div:not(:nth-of-type(2))", this).hide();
				});
			}

			if(newsText.match(Redreg)) {				  
				var iDiv = document.createElement('div');
				iDiv.id = 'redblock';
				iDiv.className = 'block';
				document.getElementById("redBox").appendChild(iDiv).innerHTML = newsText + timmee;
				$("div.redBox").each(function(){
					$("div:not(:nth-of-type(2))", this).hide();
				});
			}
		}
	}
 
 })

(jQuery);