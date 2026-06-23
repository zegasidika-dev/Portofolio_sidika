function showPage(id){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
window.scrollTo({top:0,behavior:"smooth"});
}

function changePhoto(src){
document.getElementById("mainPhoto").src = src;
}