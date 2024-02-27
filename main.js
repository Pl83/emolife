if (window.location.href.indexOf('index')) {
    let temp = localStorage.getItem('auth')
    if (temp != 'success') {
        window.location.href = 'login.html'
    }
}