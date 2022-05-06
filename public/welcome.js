document.addEventListener('DOMContentLoaded', bindButton);

function bindButton() {
    document.getElementById('begin').addEventListener('click', async (event) => {
        try {
            const url = await fetch('/start_oauth', { method: 'GET' });
            const data = await url.json();
            
            fetch(data.oauth_url, {method: 'GET'});
        } catch (err) {
            console.log(err);
        }
        
    });
}
