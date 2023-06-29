audit.style.display = 'none';
checkmaterials.style.display = 'none';

if (document.URL.includes("login.html")) {
    var login = document.getElementById("loginType");
    var selectedValue = login.options[login.selectedIndex].value;
    if (selectedValue == "NHS") {
      audit.style.display = 'block';
    }
    if (selectedValue == "MedTech") {
      checkmaterials.style.display = 'block';
    }
}
