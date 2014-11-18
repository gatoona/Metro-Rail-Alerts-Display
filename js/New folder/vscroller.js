(function ($) {
    $.fn.extend({
        vscroller: function (options) {
            var settings = $.extend({ speed: 500, stay: 1000, newsfeed: '', cache: false }, options);
            return this.each(function () {
				
                var interval = null;
                var mouseIn = false;
                var totalElements;
                var isScrolling = false;
                var h;
                var t;
                var wrapper = $(this).addClass('news-wrapper');
                if (settings.newsfeed == '') { alert('No XML file specified'); return; }
                $.ajax({
                    url: settings.newsfeed,
                    type: 'GET',
                    dataType: 'xml',
                    cache: settings.cache,
                    success: function (xml) {
                        //if there are news headlines then build the html
                        var contentWrapper = $('<div/>').addClass('news-contents-wrapper');
                        var newsHeader = $('<div/>').addClass('news-header');
                        var newsContents = $('<div/>').addClass('news-contents');
                        wrapper.append(contentWrapper);
                        contentWrapper.append(newsHeader);
                        contentWrapper.append(newsContents);
                        newsHeader.html("<img src='http://www.metro.net/interactives/thelab/alerts_ticker/alerts.png'>" + $(xml).find('newslist').attr('title'));
                        var i = 0;
                    
                       var row = 'odd';
					   
					    $(xml).find('news').each(function () {
							
						var todayDatez = new Date("February 10, 2014 19:55:02 -0800");	
						 var todayDategetz = todayDatez.getTime();	
						totalElementsz = $(this).attr('date');
						var pastDatez = new Date(totalElementsz);
						 var pastDategetz = pastDatez.getTime();
						 
						 
						 var lapsedTimez = (todayDategetz - pastDategetz)/1000;
						 var tz = Math.round(lapsedTimez / 3600);
					
					
					if (tz <= 0){
							
                            var news = $('<div/>').addClass('news ' + row);
							
							if (row == 'odd') {
				row = 'even';
			} else {
				row = 'odd';
			}			
			
						
                            newsContents.append(news);
								
                            var history = $('<div/>').addClass('history');
                            var description = $('<div/>').addClass('description');
                            news.append(history);
                            news.append(description);
                            history.append(getCircle($(this).attr('category'), $(this).attr('date')));
                            var url = $(this).attr('url');
                            var htext = $(this).find('headline').text();
							var newsImage = $(this).find('image').text();
                            description.append($('<div/>').html("<img src='"+newsImage+"'><a href='#'>" + htext + "</a>"));
                            var newsText = $(this).find('detail').text();
					
                         
                            description.append($('<div/>').addClass('detail').html(newsText));}
							
							
						else{
							
							
							}
                        
						});
                        h = parseFloat($('.news:eq(0)').outerHeight());
                        $('.news', wrapper).each(function () {
                            $(this).css({ top: i++ * h });
							
                        });
						
						    totalElements = $('.news').length;
				if (totalElements > 0){
						
                        t = (totalElements - 1) * h;}
						
						else { 
						 
						var noAlerts = $('<div/>').html("No Recent Alerts at This Time").addClass('noAlerts');

						newsContents.append(noAlerts);
               
							
							
							}
                       // MOUSE ENTER/EXIT function
					   
					   /*
					   
					    newsContents.mouseenter(function () {
                            mouseIn = true;
                            if (!isScrolling) {
                                $('.news').stop(true, false);
                                clearTimeout(interval);
                            }
                        });
                        newsContents.mouseleave(function () {
                            mouseIn = false;
                            interval = setTimeout(scroll, settings.stay);
                        });
						
						*/
						//inital delay on scroll
                        interval = setTimeout(scroll, settings.stay);
                   
				    }
					
                });
                //$.get(settings.newsfeed, );
                function scroll() {
                    if (!mouseIn && !isScrolling) {
                        isScrolling = true;
						
                        $('.news:eq(0)').stop(true, false).animate({ top: -h }, settings.speed, function () {
                            clearTimeout(interval);
                            var current = $('.news:eq(0)').clone(true);
                            current.css({ top: t });
                            $('.news-contents').append(current);
                            $('.news:eq(0)').remove();
                            isScrolling = false;
                            interval = setTimeout(scroll, settings.stay);

                        });
                        $('.news:gt(0)').stop(true, false).animate({ top: '-=' + h }, settings.speed);
                    }
                }
				

				
                function getCircle(category, date) {
					
				

					
                    date = date.replace(/-/g, '/'); 
				 var todayDate = new Date("February 10, 2014 19:55:02 -0800");	
				  // var todayDate = new Date();	
			
				   
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
				   
				   
                    var day = pastDate.getDate();
                    var month = pastDate.getMonth();
					
                 //   return $('<div/>').addClass('circle-outer').append($('<div/>').addClass('circle').addClass(category)
                       //    .append($('<span/>').addClass('day').html(counting)));
                   
                    return $('<div/>').addClass('day').html(counting);
                                                                                                          //      .append($('<span/>').html('').addClass('elipses'))
                                                                                                             //   .append($('<span/>').addClass('month').html("ago")));
                }

            });
        }
    });
})(jQuery);
