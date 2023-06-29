function changeLogin() {
    var login = document.getElementById("loginType");
    var selectedValue = login.options[login.selectedIndex].value;
    if (selectedValue == "NHS") {
      audit.style.display = 'inline-block';
      checkmaterials.style.display = 'none';
    }
    if (selectedValue == "MedTech") {
      checkmaterials.style.display = 'inline-block';
      audit.style.display = 'none';
    }
    if (selectedValue == "null") {
      audit.style.display = 'none';
      checkmaterials.style.display = 'none';
    }
}
