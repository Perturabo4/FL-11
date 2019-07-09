let email = prompt('Enter your email'),
    minEmailLength = 6,
    pass,
    minPassLength = 5,
    changePass,
    newPass,
    oldPass,
    user = {
        email : 'user@gmail.com',
        pass : 'UserPass'
    },
    admin = {
        email : 'admin@gmail.com',
        pass : 'AdminPass'
    };

    if(!email || !email.trim()){
        alert('Canceled');
    }else if(email.trim().length < minEmailLength ){
        alert(`I don't know any emails having name length less than ${minEmailLength} symbols`);
    }else if(email.trim().toLowerCase() === user.email || email.trim().toLowerCase() === admin.email) {
        pass = prompt('Enter your password');
        if(!pass){
            alert('Canceled');
        }else if(email.trim() === user.email && pass === user.pass){
            changePass = confirm('Do you want to change your password?');
            if(changePass){
                oldPass = prompt('Enter your old password');
                if(oldPass){
                    if(user.pass === oldPass){
                        newPass = prompt('Enter a new password');
                        if(newPass.length < minPassLength){
                            alert(`It's too short password. Sorry.`);
                        }else {
                            if(newPass === prompt('Enter it again')){
                                user.pass = newPass;
                                alert('You have successfully changed your password.');
                            }else {
                                alert('You wrote the wrong password.');
                            }
                        }
                    }else {
                        alert('Wrong password');
                    }
                }else {
                    alert('Canceled');
                }
            }else {
                alert('You have failed the change.');
            }
        }else if(email.trim() === admin.email && pass === admin.pass){
            changePass = confirm('Do you want to change your password?');
            if(changePass){
                oldPass = prompt('Enter your old password');
                if(oldPass){
                    if(admin.pass === oldPass){
                        newPass = prompt('Enter a new password');
                        if(newPass.length < minPassLength){
                            alert(`It's too short password. Sorry.`);
                        }else {
                            if(newPass === prompt('Enter it again')){
                                admin.pass = newPass;
                                alert('You have successfully changed your password.');
                            }else {
                                alert('You wrote the wrong password.');
                            }
                        }
                    }else {
                        alert('Wrong password');
                    }
                }else {
                    alert('Canceled');
                }
            }else {
                alert('You have failed the change.');
            }
        }else {
            alert('Wrong password');
        }
    }else {
        alert(`I don't know you`);
    }

