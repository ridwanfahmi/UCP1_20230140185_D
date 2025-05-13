
window.onload = function() {
  const popup = document.getElementById("promoPopup");
  const overlay = document.getElementById("overlay");

  popup.style.display = "block";
  overlay.style.display = "block";
};


function closePopup() {
  document.getElementById("promoPopup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function showPopup() {
  alert("Terima kasih telah mendaftar!");
  return false; 
}
