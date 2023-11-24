const buttons = document.querySelectorAll(".goForm")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = `http://127.0.0.1:5501/html/form.html?price=${button.id}`
    })
});