const github=new Github;
const ui= new UI;
//Search input
const searchUser=document.getElementById('searchUser');

//add event listener

searchUser.addEventListener('keyup',(e) => {
    const userText = e.target.value;

    if(userText!==''){
        //Making HTTP call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message ==='Not Found'){
                //Show an Alert
                ui.showAlert('User Not Found','alert alert-danger');
            }else{
                //Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        //Clear Profile
        ui.clearProfile();
    }
});