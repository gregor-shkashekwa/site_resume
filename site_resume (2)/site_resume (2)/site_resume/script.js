function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}
  
function sendMessage() {

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // if (phone.value.length > 11) {
    //     phone.value = phone.value.slice(0,11); 
    //     return phone.value;
    // }

    // if (message.value.length > 150) {
    //     message.value = message.value.slice(0,150); 
    //     return phone.value;
    // }

    // if (name.value.length > 50) {
    //     name.value = name.value.slice(0,50); 
    //     return name.value;
    // }

    if (name.trim() == '' || phone.trim() == '' || message.trim() == '') {
        alert('Пожалуйста, заполните все поля!');
    }
    else{
        var telegramToken = '';
        var chatId = '';
  
        var url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
        var data = `chat_id=${chatId}&text=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nMessage: ${message}`)}`;
  
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
        xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            clearForm();
            alert('Сообщение отправлено успешно!');
            }
        };
  
    xhr.send(data);
    }
}