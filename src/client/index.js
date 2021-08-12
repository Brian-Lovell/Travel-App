import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// TODO: Figure out how to make webpack use images
// Import weather icons
// import a01d from './images/a01d.png'
// import './images/a01n.png'
// import './images/a02d.png'
// import './images/a02n.png'
// import './images/a03d.png'
// import './images/a03n.png'
// import './images/a04d.png'
// import './images/a04n.png'
// import './images/a05d.png'
// import './images/a05n.png'
// import './images/a06d.png'
// import './images/a06n.png'
// import './images/c01d.png'
// import './images/c01n.png'
// import './images/c02d.png'
// import './images/c02n.png'
// import './images/c03d.png'
// import './images/c03n.png'
// import './images/c04d.png'
// import './images/c04n.png'
// import './images/d01d.png'
// import './images/d01n.png'
// import './images/d02d.png'
// import './images/d02n.png'
// import './images/d03d.png'
// import './images/d03n.png'
// import './images/f01d.png'
// import './images/f01n.png'
// import './images/r01d.png'
// import './images/r01n.png'
// import './images/r02d.png'
// import './images/r02n.png'
// import './images/r03d.png'
// import './images/r03n.png'
// import './images/r04d.png'
// import './images/r04n.png'
// import './images/r05d.png'
// import './images/r05n.png'
// import './images/r06d.png'
// import './images/r06n.png'
// import './images/s01d.png'
// import './images/s01n.png'
// import './images/s02d.png'
// import './images/s02n.png'
// import './images/s03d.png'
// import './images/s03n.png'
// import './images/s04d.png'
// import './images/s04n.png'
// import './images/s05d.png'
// import './images/s05n.png'
// import './images/s06d.png'
// import './images/s06n.png'
// import './images/t01d.png'
// import './images/t01n.png'
// import './images/t02d.png'
// import './images/t02n.png'
// import './images/t03d.png'
// import './images/t03n.png'
// import './images/t04d.png'
// import './images/t04n.png'
// import './images/t05d.png'
// import './images/t05n.png'
// import './images/u00d.png'
// import './images/u00n.png'

// Other images
// import './images/main.png'
// import './images/pixabay_logo.png'


export {
    handleSubmit
}

window.addEventListener("DOMContentLoaded", (e) => {
	// get reference to the form elemet
	const form = document.getElementById("form");
	// Add submit event listener on this form
	form.addEventListener("submit", handleSubmit);
});
