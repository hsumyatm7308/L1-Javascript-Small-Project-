var getprogressbar = document.getElementById("progress-bar");

window.onscroll = function() {
    scrollpoint()
};

function scrollpoint() {
    // console.log("i am working")




    // scrolltop 
    // project height 
    // current height 
    // project height - client height 
    // scrolltop * 100 / (project height - current height )

    var getscrolltop = document.documentElement.scrollTop;
    console.log(getscrolltop);
    //   top က စမှတ်ကနေ ဆုံးမှတ်တစ်ခုလုံး  screen size တစ်ခုလုံး ကို ပြောတာ (ဆက်သွားနေရင် top)
    var getscrollheight = document.documentElement.scrollHeight;
    console.log(getscrollheight)
        // height က ဘယ်နားရောက်နေလဲ ဆိုတာ ပြောတာ (project ta khu lone ye height)
    var getclientheight = document.documentElement.clientHeight;
    console.log(getclientheight)
        // မြ င် ကွ င်း scroll ကို ပြော တာ

    var calcheight = getscrollheight - getclientheight;
    console.log(calcheight);

    // var getfinalheight = Math.round(getscrolltop * 100) / calcheight;
    // console.log(getfinalheight)

    var getfinal = Math.round((getscrolltop / calcheight) * 100);
    console.log(getfinal)

    getprogressbar.style.width = `${getfinal}%`



};


function printme() {
    window.print()
}