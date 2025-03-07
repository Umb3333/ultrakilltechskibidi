//Toggle för content tab så att den visar contents

document.querySelector('.toggle').addEventListener('click', function(){
    let nested = this.nextElementSibling;
    if(nested.style.display === "block") {
        nested.style.display = "none";
        this.textContent = "▶ ";
    } else {
        nested.style.display = "block";
        this.textContent = "▼ ";
    }
});

//Hide button för content bar ifall man vill få bort den
document.querySelector('.hide-btn').addEventListener('click', function() {
    let tocList = document.querySelector('.toc-list');
    if (tocList.style.display === "none") {
        tocList.style.display = "block";
        this.textContent = "[hide]";
    } else {
        tocList.style.display = "none";
        this.textContent = "[show]";
    }
});