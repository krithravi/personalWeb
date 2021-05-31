const wH = window.innerHeight
const wW = window.innerWidth

const generateStars = n => {
	for (let i = 0; i < n; i++) {
		const div = document.createElement('div')
 
		if (i % 16 == 0){
			div.className = 'star star--big';
		}
		else if (i % 8 == 0){
			div.className = 'star star--medium';
		}
		else {
		  div.className = 'star'
		}
		div.setAttribute('style', 
						 `top:${Math.round(Math.random()*wH)}px;
						  left:${Math.round(Math.random()*wW)}px;`
						)
    	document.body.appendChild(div)
  }
}

generateStars(200)
