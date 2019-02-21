console.log(1);
var aboutId = document.getElementById('btn-about');
    aboutId.classList.add('real-btn-active');
    aboutId.classList.remove('real-btn');
function toAbout(){
    document.getElementById('about').style.display="block";
    document.getElementById('charsec').style.display="none";
    var aboutId = document.getElementById('btn-about');
    aboutId.classList.add('real-btn-active');
    aboutId.classList.remove('real-btn');
    var charId = document.getElementById('btn-char');
    charId.classList.remove('real-btn-active');
    charId.classList.add('real-btn');
}

function toChar(){
    document.getElementById('charsec').style.display="block";
    document.getElementById('about').style.display="none";
    var charId = document.getElementById('btn-char');
    charId.classList.add('real-btn-active');
    charId.classList.remove('real-btn');
    var aboutId = document.getElementById('btn-about');
    aboutId.classList.remove('real-btn-active');
    aboutId.classList.add('real-btn');
}



