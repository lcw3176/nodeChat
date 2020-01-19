var socket = io()
description.focus();


socket.on('chat', function(msg){
    var chat = document.getElementById('chatlist');
    var li = document.createElement('li'); 
    var username = msg.split(':');
    var nickname = document.getElementById('nickname').textContent;
    var date = new Date();
    var span = document.createElement('span');
    date = date.toLocaleTimeString();

    chat.append(li);
    chat.append(span);
    span.append(date);
    
    
    if(nickname == username[0].trim()){
        li.className = 'me';
        span.className = 'myTime';
        var description = document.getElementById('description');
        li.append(username[1]);
        description.value = null;
        description.focus();
    } else{
        span.className = 'yourTime';
        li.append(msg);
    }

    li.scrollIntoView();
});

function send(){
    var description = document.getElementById('description').value;
    var nickname = document.getElementById('nickname').textContent;

    if(description.trim() != ''){
        description = nickname + ' : ' + description;

        socket.emit('send', description);
    }
}
   

function enter(){
    if(window.event.keyCode == 13){
        send();
    }
}

