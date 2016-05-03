var array;

function setSlider(slides){
		array = slides.split(',');
};

jQuery( document ).ready(function( $ ) {
	var mySlides = document.getElementById('my-slides');
	if (array.length == 1) {
		for (i = 0; i < array.length; i++) {
			var slide = document.createElement('div');
	  	var image = document.createElement('img');
	  	slide.className = 'sp-slide';
	  	image.className = 'sp-image';
	  	image.setAttribute('src', '/images/slider/' + array[i]);
	  	mySlides.appendChild(slide);
	  	slide.appendChild(image);
		}
		$( '#my-slider' ).sliderPro({
			forceSize: 'fullWindow',
			arrows: false,
			buttons: false,
			fade: false,
			autoplay: false,
			loop: false,
			touchSwipe: false,
			keyboard: false
		});
	}else if(array.length == 2){
		for (i = 0; i < array.length; i++) {
			var slide = document.createElement('div');
	  	var image = document.createElement('img');
	  	slide.className = 'sp-slide';
	  	image.className = 'sp-image';
	  	image.setAttribute('src', '/images/slider/' + array[i]);
	  	mySlides.appendChild(slide);
	  	slide.appendChild(image);
		}
		$( '#my-slider' ).sliderPro({
			forceSize: 'fullWindow',
			arrows: true,
			buttons: false,
			fade: false,
			autoplay: true,
			loop: false
		});
	}else if(array.length > 1){
		for (i = 0; i < array.length; i++) {
			var slide = document.createElement('div');
	  	var image = document.createElement('img');
	  	slide.className = 'sp-slide';
	  	image.className = 'sp-image';
	  	image.setAttribute('src', '/images/slider/' + array[i]);
	  	mySlides.appendChild(slide);
	  	slide.appendChild(image);
		}
		$( '#my-slider' ).sliderPro({
			forceSize: 'fullWindow',
			arrows: true,
			buttons: false,
			fade: false,
			autoplay: true
		});
	}else{
		var slide = document.createElement('div');
	  slide.className = 'sp-slide';
	  slide.innerHTML = "<p class='my-caption'><span class='my-span'>HOŞGELDİNİZ</span> <!--[if lte ie 7]><b></b><![endif]--></p>";
	  mySlides.appendChild(slide);
	  $( '#my-slider' ).sliderPro({
			forceSize: 'fullWindow',
			arrows: false,
			buttons: false,
			fade: false,
			autoplay: false,
			loop: false,
			touchSwipe: false,
			keyboard: false
		});
	}
});