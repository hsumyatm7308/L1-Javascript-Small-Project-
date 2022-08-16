var slides = document.getElementsByClassName("carousel-item");
// console.log(slides);
var dots = document.querySelectorAll(".dot")
    // console.log(dots)

var currslide = 1;

// prev btn 
document.getElementById('prev').addEventListener('click', function() {
    carousel(currslide -= 1);
})

// next btn 
document.getElementById('next').addEventListener('click', function() {
    carousel(currslide += 1)
})

for (var d = 0; d < dots.length; d++) {
    dots[d].addEventListener('click', function() {
        // console.log(this.getAttribute("data-bs-slide-to"));
        currslide = this.getAttribute('data-bs-slide-to')
        carousel(currslide)
    })
}

carousel(currslide);

function carousel(slidenum) {
    // console.log(slidenum)

    for (var x = 0; x < slides.length; x++) {
        slides[x].style.display = "none"
    }

    for (var y = 0; y < dots.length; y++) {
        // dots[y].classList.remove('active')
        // dots[y].className = 'dot'
        dots[y].className = dots[y].className.replace("active", "");
    }

    if (slidenum > slides.length) {
        currslide = 1;
    } else if (slidenum < 1) {
        currslide = slides.length
    }
    console.log(currslide)

    // slides[carousel - 1].style.display = 'block'
    slides[currslide - 1].style.display = 'block'
        // dots[currslide - 1].className = 'dot active'
    dots[currslide - 1].className += ' active'
        // dots[currslide -1].classList.add('active')
}

// slid      0   1   2 
// currslide 1-1 2-1 3-1

// 15DT