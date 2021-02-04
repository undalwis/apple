var productDetail = new Vue({
  el: "#app",
  data: {
    productTitle: "Hire Umeesha",
    productChecks: [
      "100% cotton on the neckline",
      "certified and safe",
      "ash in color",
      "Smooth in quality"
    ],
    productImages: [
      {
        id: 3435,
        imageUrl: "https://i.imgur.com/Nmuu6Jh.jpg"
      },
      {
        id: 3436,
        imageUrl: "https://i.imgur.com/VFcTYyU.jpg"
      }
    ],
    cart: 0,
    stockAvailability: true,
    activeClass: 0
  },
  methods: {
    addToCart: function () {
      this.cart = this.cart + 1;
    },
    currentThumnail: function (image, index) {
      this.bannerImage = image;
      this.activeClass = index;
    }
  }
});


var swiper = new Swiper(".swiper-container", {
	spaceBetween: 50,
	slidesPerView: 1,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	pagination: {
		el: ".swiper-pagination"
	},
});

swiper.on("slideChange", function () {
	console.log("Текущий слайд", this.activeIndex);
	if (
		this.previousIndex < this.activeIndex ||
		this.slides - 1 == this.previousIndex
	) {
		console.log("Вперед");
		document.querySelector('#result').innerHTML = `Индекс ${this.activeIndex}, направление "вперед"`;
	} else {
		console.log("Назад");
		document.querySelector('#result').innerHTML = ` Индекс ${this.activeIndex}, направление "назад"`;
	}
});


// Accordian
var action="click";
var speed="500";

$(document).ready(function() {
    // Question handler
    $('li.q').on(action, function() {
        // Get next element
        $(this).next()
            .slideToggle(speed)
        // Select all other answers
                .siblings('li.a')
                    .slideUp();
    });
});
