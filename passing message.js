document.getElementById("message-form").addEventListener('submit', function (e) {
    e.preventDefault();
    const msg = document.getElementById("mytext").value;
    const warn = document.getElementsByClassName("modal");
    const content = document.getElementById("delivered");

    if (msg === '') {
        for (var i = 0; i < warn.length; i++) {
            const cls = warn[i].classList.add('modal-show');
        }
        setTimeout(() => {
            for (var i = 0; i < warn.length; i++) {
                const cls = warn[i].classList.remove('modal-show');
            }
        }, 2000);
    } else {
        content.innerHTML = msg;
        document.msgForm.reset();
        return false;
    }
});