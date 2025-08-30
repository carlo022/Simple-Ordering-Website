 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	var slider = function() {
		$('.nonloop-block-3').owlCarousel({
	    center: true,
	    items: 3,
	    loop: true,
	    smartSpeed: 700,
			stagePadding: 15,
	    margin: 20,
	    autoplay: true,
	    nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
	    responsive:{
        0:{
        	margin: 20,
          items: 2
        },
        600:{
        	margin: 20,
          items: 3
        },
        900:{
        	margin: 20,
          items: 3
        }
	    }
		});
	};
	slider();


	var siteMenuClone = function() {

		$('<div class="site-mobile-menu"></div>').prependTo('.site-wrap');

		$('<div class="site-mobile-menu-header"></div>').prependTo('.site-mobile-menu');
		$('<div class="site-mobile-menu-close "></div>').prependTo('.site-mobile-menu-header');
		$('<div class="site-mobile-menu-logo"></div>').prependTo('.site-mobile-menu-header');

		$('<div class="site-mobile-menu-body"></div>').appendTo('.site-mobile-menu');

		

		$('.js-logo-clone').clone().appendTo('.site-mobile-menu-logo');

		$('<span class="ion-ios-close js-menu-toggle"></div>').prependTo('.site-mobile-menu-close');
		

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();

	var searchShow = function() {
		// alert();
		var searchWrap = $('.search-wrap');
		$('.js-search-open').on('click', function(e) {
			e.preventDefault();
			searchWrap.addClass('active');
			setTimeout(function() {
				searchWrap.find('.form-control').focus();
			}, 300);
		});
		$('.js-search-close').on('click', function(e) {
			e.preventDefault();
			searchWrap.removeClass('active');
		})
	};
	searchShow();

});

/**document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const viewCartButton = document.querySelector(".view-cart");
    const cartModal = document.getElementById("cart-modal");
    const closeModalButton = document.querySelector(".close");
    const continueShoppingButton = document.querySelector(".continue-shopping");
    const checkoutButton = document.querySelector(".checkout");
    let cartviewsspan = document.querySelector('.cartviews span');

    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    let cart = [];

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const productName = button.getAttribute("data-name");
            const productPrice = parseFloat(button.getAttribute("data-price"));

            const existingItem = cart.find(item => item.name === productName);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            updateCartModal();
        });
    });

    viewCartButton.addEventListener("click", function () {
        cartModal.style.display = "block";
        updateCartModal();
    });

    closeModalButton.addEventListener("click", function () {
        cartModal.style.display = "none";
    });

    continueShoppingButton.addEventListener("click", function () {
        cartModal.style.display = "none";
    });

    checkoutButton.addEventListener("click", function () {
        // Send email using the user's default email client.
        const cartDetails = generateCartDetails();
        window.open(`mailto:youremail@gmail.com?subject=Shopping Cart&body=${cartDetails}`);
    });

    function updateCartModal() {
        cartItemsList.innerHTML = "";
        let total = 0;
        let totalitem = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.className = "cart-item";
            li.innerHTML = `
                <div>${item.name}</div>
                <div>₱${item.price.toFixed(2)}</div>
                <input type="number" value="${item.quantity}" min="1">
                <div>TotalPrice: ₱${(item.price * item.quantity).toFixed(2)}</div>
            `;
            cartItemsList.appendChild(li);

            total += item.price * item.quantity;
            totalitem += item.quantity;
        });

        cartTotal.textContent = `₱${total.toFixed(2)}`;
        cartviewsspan.innerText = totalitem;
        
    }

    function generateCartDetails() {
        let details = "Shopping Cart:\n\n";
        cart.forEach(item => {
            details += `${item.name} - Quantity: ${item.quantity}, Price: ₱${(item.price * item.quantity).toFixed(2)}\n`;
        });
        details += `\nTotal: ${cartTotal.textContent}`;
        return details;
    }
});**/
document.addEventListener("DOMContentLoaded", function () {
       const BuyMeButton = document.querySelector(".Buy-Uri-Ari-Care");
       const cartModal = document.getElementById("myForm");
        /**image change**/
       const imagechage = document.getElementById("img");
       /**overlay**/
       var overlay = document.getElementById('overlay');


       const Closespan = document.querySelector(".otherclose");
       /**product 1**/
       const Buyirespecare = document.querySelector(".Buy-I-RESPI-CARE");
       /**product 2**/
       const BuyCCN = document.querySelector(".BuyC-CN");
       /**product 3**/
       const Buycetylpure = document.querySelector(".Buy-cetyl-pure");
        /**product 4**/
       const Buyclacore = document.querySelector(".Buy-cla-core");
        /**product 5**/
       const BuyPooPourri = document.querySelector(".Buy-Poo-Pourri");

       /** edit text value **/
       var edittextbox = document.getElementById("product");
       var priceperunit = document.getElementById("price");
       var quantityof = document.getElementById("quantity");
       var totalamountproduct = document.getElementById("totalAmount");

     /**product 0**/
     BuyMeButton.addEventListener("click", function () {
       cartModal.style.display = "block";
       edittextbox.value = "Uri Ari Care";
       priceperunit.value ="₱1999"
       totalamountproduct.value = priceperunit.value;
       imagechage.src = "images/URI AI.png";
       overlay.style.display = 'block';

    });

     Closespan.addEventListener("click", function () {
      cartModal.style.display = "none";
      quantityof.value = "1"
      overlay.style.display = 'none';

    });

     /**product 1**/
    Buyirespecare.addEventListener("click", function () {
      cartModal.style.display = "block";
      edittextbox.value = "I-RESPI CARE";
      priceperunit.value ="₱1999"
      totalamountproduct.value = priceperunit.value;
      imagechage.src = "images/I-RESPE CARE.png";
      overlay.style.display = 'block';
    });

     /**product 2**/
    BuyCCN.addEventListener("click", function () {
      cartModal.style.display = "block";
      edittextbox.value = "C&CN";
      priceperunit.value = "₱1999"
      totalamountproduct.value = priceperunit.value;
      imagechage.src = "images/C&CN.png";
      overlay.style.display = 'block';
    });

      /**product 3**/
    /**Buycetylpure.addEventListener("click", function () {
      cartModal.style.display = "block";
      edittextbox.value = "cetyl pure";
      priceperunit.value = "20"
      totalamountproduct.value = priceperunit.value;
    });**/

      /**product 4**/
      /**Buyclacore.addEventListener("click", function () {
      cartModal.style.display = "block";
      edittextbox.value = "CLA Core";
      priceperunit.value = "38"
      totalamountproduct.value = priceperunit.value;
    });**/

      /**product 5**/
      /**BuyPooPourri.addEventListener("click", function () {
      cartModal.style.display = "block";
      edittextbox.value = "Poo Pourri";
      priceperunit.value = "38"
      totalamountproduct.value = priceperunit.value;
    });**/

});

const container = document.getElementById('testimonialContainer');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const slides = document.querySelectorAll('.testimonial');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function updateSlider() {
      const slideWidth = slides[0].offsetWidth;
      container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) { // stop at last slide
        currentIndex++;
        updateSlider();
    }
    else{
      currentIndex = 0;
      updateSlider();
    }

    });

    prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) { // stop at first slide
        currentIndex--;
        updateSlider();
    }
    else{
      currentIndex = totalSlides - 1;
      updateSlider();
    }
    });



