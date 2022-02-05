const nav = document.querySelector('#nav');

//FoodHub

window.addEventListener("scroll", function(e){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    	nav.classList.add("nav-active");
  	} else if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    	nav.classList.remove("nav-active");
  }
});