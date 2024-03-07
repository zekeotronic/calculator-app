const theme = document.getElementById('theme-css');
const chooser = document.getElementById('theme-range');
function changeTheme() {
  let themeChoice = chooser.value;
  if (themeChoice === "1") {
    theme.href = "css/theme-1.css";
  } else if (themeChoice === "2") {
    theme.href = "css/theme-2.css";
  } else if (themeChoice === "3") {
    theme.href = "css/theme-3.css";
  }
}

chooser.addEventListener('input', changeTheme);