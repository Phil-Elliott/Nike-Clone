const slider = document.querySelector('.slider'); 

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




