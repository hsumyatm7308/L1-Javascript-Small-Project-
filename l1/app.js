var getacctitles = document.getElementsByClassName("acctitle");
console.log(getacctitles); //HtML Collection
var getacccontents = document.querySelectorAll('.acccontent');
console.log(getacccontents) //Note List

for (var i = 0; i < getacctitles.length; i++) {
    // console.log(i)
    getacctitles[i].addEventListener("click", function(e) {
        // console.log(e.target)

        this.classList.toggle("active");
        var getcontent = this.nextElementSibling;
        // console.log(getcontent);

        if (getcontent.style.height) {
            getcontent.style.height = null;
        } else {
            getcontent.style.height = getcontent.scrollHeight + "px";
            console.log(getcontent.scrollHeight)
        }

    })

    if (getacctitles[i].classList.contains('active')) {
        getacccontents[i].style.height = getacccontents.scrollHeight + "px";
    }
}





// var getacctitles = document.getElementsByClassName("acctitle");
// // console.log(getacctitles);  //HTMLCollection
// var getacccontents = document.querySelectorAll(".acccontent");
// // console.log(getacccontent);  //NodeList

// for (var x = 0; x < getacctitles.length; x++) {
//     // console.log(x);

//     getacctitles[x].addEventListener('click', function(e) {
//         // console.log(e.target);
//         // console.log(this);


//         this.classList.toggle("active");
//         var getcontent = this.nextElementSibling;
//         // console.log(getcontent);

//         if (getcontent.style.height) {
//             getcontent.style.height = null; //beware can't set 0
//         } else {
//             getcontent.style.height = getcontent.scrollHeight + "px";
//             // getcontent.style.height="50px";
//             // console.log(getcontent.scrollHeight);
//         }

//     });

//     if (getacctitles[x].classList.contains("active")) {
//         getacccontents[x].style.height = getacccontents[x].scrollHeight + "px";
//     }
// }