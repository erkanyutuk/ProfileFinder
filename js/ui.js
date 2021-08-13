class UI{
    constructor(){
        this.profileContainer = document.querySelector('.profileContainer');
        this.alert = document.querySelector('#alert');
        this.todo = document.querySelector('#todo');
    }

    showToDo(todo){
        let html = `<div class="card p-0 m-0">
                        <div class="card-body m-0">
                        <h3>To Do List</h3>
                        <ul class="list-group">`;
        todo.forEach(item => {
            
            if(item.completed){
                html+=`<li class="list-group-item">${item.title}</li>`;
            }else{
                html+=`<li class="list-group-item bg-warning">${item.title}</li>`;
            }
        });

        html+=`</ul>
            </div>
            </div>`;
        this.todo.innerHTML = html;
    }

    showProfile(profile){

        let html = `
        <div class="card p-3">
            <div class="row">
                <div class="col-md-3">
                <a href="https://placeholder.com"><img src="https://via.placeholder.com/350" class="img-thumbnail"></a>
                <br>
                </div>
                <div class="col-md-9">
                    <h3>Contact</h3>
                    <ul class="list-group">
                        <li class="list-group-item">name : ${profile.name}</li>
                        <li class="list-group-item">username : ${profile.username}</li>
                        <li class="list-group-item">email : ${profile.email}</li>
                        <li class="list-group-item">phone : ${profile.phone}</li>        
                        <li class="list-group-item">website :
                            <a href="https://${profile.website}">${profile.website}</a>
                        </li>
                        <li class="list-group-item">adress :
                        ${profile.address.city} /
                        ${profile.address.street} /
                        ${profile.address.suite} /
                        ${profile.address.zipcode}
                        </li>        
                        <li class="list-group-item">company : ${profile.company.name}
                        </li>                
                    </ul>     
                </div>
            </div>
        </div>`;
        
        this.profileContainer.innerHTML = html;
    }

    showText(text){
        if(text.length<=1){
            this.alert.textContent = null;
        }else{
            this.alert.textContent = text + " is not found";    
        }
    }
    hideText(){
        this.alert.textContent = null;  
    }
    clear(){
        this.profileContainer.textContent = null;
    }
}