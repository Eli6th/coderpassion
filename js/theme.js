const themeButton = document.getElementById('theme_button');
const theme = localStorage.getItem('theme');

if (theme) {
    document.body.classList.add(theme);
} else {
    document.body.classList.add('light');
}

themeButton.addEventListener("click", (event) => {
    changeTheme();
});

function changeTheme() {
    console.log("Clicked");
    if(document.body.classList.contains('light')) {
        document.body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    }
};
  