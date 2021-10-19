const slider = document.querySelector('.slider'); 
const middle = document.querySelector('.middle');  



// Fixed position for the middle header
let sticky = middle.offsetTop;
let previousScroll = 0; 

document.addEventListener('scroll', () => {
	if (window.pageYOffset > 148) {
		middle.classList.add("sticky")
		console.log(document.height)
	} else {
		middle.classList.remove("sticky")
	}
})

// Slider function for the 3rd header
width = 0;

const moveRight = () => {
	if (width < -200) {
		width = 0;
	} else if (width >= -200) {
		slider.style.right = `${width}vw`
		width -=100; 
	}
}

setInterval(moveRight,10000)






/*
1) Creat a scrolling navbar 
	maybe have set the background to white 
	have it set off when scrolling up 
	have it only happen at a certain point of the page

	add a sticky class 
	insert it to the html navbar when it reaches a certain position on the page 

	OffsetY greater than 148

*/

