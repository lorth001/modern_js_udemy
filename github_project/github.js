class GitHub {
    constructor() {
        this.client_id = '7f860cc1c6403e8521c9';
        this.client_secret = 'c588dcf16b4a7906075fe1dac3d596eb9233e290';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();


        return {
            profile,
            repos
        }
    }
}