const logoImg = document.getElementById("logo-img");
const logoDialog = document.getElementById("logo-dialog");

logoImg.addEventListener("click", (event) => {
    event.stopPropagation(); 

    if (logoDialog.open) {
        logoDialog.classList.remove("show");
        setTimeout(() => logoDialog.close(), 300); 
    } else {
        logoDialog.show();
        setTimeout(() => logoDialog.classList.add("show"), 10); 
    }
});

document.addEventListener("click", (event) => {
    if (!logoDialog.contains(event.target) && event.target !== logoImg) {
        logoDialog.classList.remove("show");
        setTimeout(() => logoDialog.close(), 300);
    }
});