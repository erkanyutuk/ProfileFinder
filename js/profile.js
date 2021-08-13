class Profile{

    constructor(){
        this.clientid = '';
        this.clientSecret = '';
    }

    async getProfile(username){
        let user = this.capitalize(username);
        let todo = null;
        
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${user}`);
        const profile = await profileResponse.json();

        if(profile.length>0){
        let id =  profile[0].id;
        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
        todo = await todoResponse.json();        
        }
        return{
            profile,todo
        }
    }
    
    capitalize(text) {
        if (typeof text !== 'string') return '';
        return text.charAt(0).toUpperCase() + text.slice(1);
      }

}