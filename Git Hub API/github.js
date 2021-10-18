class Github{
    constructor(){
        this.client_id= '220f58c89938631d2387';
        this.client_secret='6ab97d403f66a23bfad8b43c9956414107da0820';
        this.repos_count=5;
        this.repos_sort='created: asc';
    }
    async getUser(user){
    
        const profileResponce=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponce=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile= await profileResponce.json();

        const repos= await reposResponce.json();

        return{
            profile,
            repos
        }
    }
}