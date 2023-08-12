const navButtons = document.querySelectorAll('.nav-item'),
			expandBtn = document.querySelector('.btn-expand'),
			collapseBtn = document.querySelector('.btn-collapse'),
			navBar = document.querySelector('.navbar'),
			logo = document.querySelector('.logo');


const expand = () => {
	expandBtn.style.display = 'none';
	expandBtn.dataset.shown = false;
	collapseBtn.style.display = 'block';
	collapseBtn.dataset.shown = true;
	navBar.style.display = 'block';
}

const collapse = () => {
	expandBtn.style.display = 'block';
	expandBtn.dataset.shown = true;
	collapseBtn.style.display = 'none';
	collapseBtn.dataset.shown = false;
	navBar.style.display = 'none';
}

window.addEventListener("resize", () => {
	if (window.innerWidth >= 768) {
		collapseBtn.style.display = 'none';
		expandBtn.style.display = 'none';
		navBar.style.display = 'block';
	} else {
		if (expandBtn.dataset.shown === 'true') {
			collapseBtn.style.display = 'none';
			expandBtn.style.display = 'block';
			navBar.style.display = 'none';
		} else {
			expandBtn.style.display = 'none';
			collapseBtn.style.display = 'block';
			navBar.style.display = 'block';
		}
	}
});

navButtons.forEach( btn => {
	btn.addEventListener('click', () => {
		navButtons.forEach( item => item.dataset.active = false );
		btn.dataset.active = true;
		if (window.innerWidth < 768) { collapse(); } 
	})
});

logo.addEventListener('click', () => {
	collapseBtn.dataset.shown = false;
	expandBtn.dataset.shown = true;
	if (window.innerWidth < 768) { collapse(); } 
});

expandBtn.addEventListener('click', () => expand() );

collapseBtn.addEventListener('click', () => collapse() );
