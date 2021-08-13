const profile = new Profile();
const ui = new UI();

const search = document.querySelector("#search");

search.addEventListener('keyup',function(e){
    ui.clear();
    let text = e.target.value;
    if(text!==''){
        
        profile.getProfile(text)
        .then(res=>{
            if(res.profile.length!=0){
                ui.showProfile(res.profile[0]);
                ui.hideText();
                ui.showToDo(res.todo);
            }else{
                ui.showText(text);
            }
        });
    }
})