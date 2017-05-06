var deleteLog = false;


$(document).ready(function() {

	// Remove Class from first page to align verticle center 
	// Only on small devices

			if ( $(window).width() < 514) {
		     $( "#mainPageContent, #mainPageImages, .p2_content ").removeClass('valign-wrapper');
		    }
		    else {}

		

			 $(window).resize(function() {
			    /*If browser resized, check width again */
			    if ($(window).width() < 514) {
			     $("#mainPageContent, #mainPageImages, .p2_content ").removeClass('valign-wrapper');
			    }
			    else {$("#mainPageContent, #mainPageImages, .p2_content ").addClass('valign-wrapper');}
			 });

			



	$('#fullpage').fullpage({
		sectionsColor: ['#f6f6f6', '#f6f6f6', '#7BAABE', 'whitesmoke', '#ccddff'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu',
		onLeave: function(index, nextIndex, direction){
			if(deleteLog){
				$('#callbacksDiv').html('');

			}
			$('#callbacksDiv').append('<p>onLeave - index:' + index + ' nextIndex:' + nextIndex + ' direction:' + direction + '</p>')
			console.log("onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " +  direction);
			
		},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			if(deleteLog){
				$('#callbacksDiv').html('');
			}
			$('#callbacksDiv').append('<p>onSlideLeave - anchorLink:' + anchorLink + " index:" + index + " slideIndex:" + slideIndex +" direction:" + direction + " nextSlideIndex:" + nextSlideIndex + '</p>');
			console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
		},
		afterRender: function(){
			$('#callbacksDiv').append('<p>afterRender</p>');
			console.log("afterRender");
		},
		afterResize: function(){
			$('#callbacksDiv').append('<p>afterResize</p>');
			console.log("afterResize");
		},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			$('#callbacksDiv').append('<p>afterSlideLoad - anchorLink:' + anchorLink + " index:" + index + " slideAnchor:" + slideAnchor +" slideIndex:" + slideIndex + '</p>');
			deleteLog = true;
			console.log("afterSlideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideAnchor: " + slideAnchor + " slideIndex: " + slideIndex);
			console.log("----------------");
		},
		afterLoad: function(anchorLink, index){
            console.log("after Load  " + index);
			$('#callbacksDiv').append('<p>afterLoad - anchorLink:' + anchorLink + " index:" + index + '</p>');
			deleteLog = true;
			console.log('===============');
			console.log("afterLoad--" + "anchorLink: " + anchorLink + " index: " + index );
			// Animation on load on first screen 
			if ( index == 1) {
				
				$(".test")
					.animate({ top: '100'}, 2000, 'easeInSine')
					
					
					
					
					


			} else if (index == 2) {
				console.log("pokaz tylko na index 2");
			}
		}
	});
});