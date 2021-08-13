class Profile{

    constructor(){
        this.clientid = '';
        this.clientSecret = '';
    }

    async getProfile(username){
        let user = capitalize(username);
        const profileResponse = await fetch(`https://jsonplaceholder.typicode.com/users?username=${user}`);

        const profile = await profileResponse.json();

        return{
            profile:profile
        }
    }
    
    capitalize(text) {
        if (typeof text !== 'string') return '';
        return text.charAt(0).toUpperCase() + text.slice(1);
      }

}