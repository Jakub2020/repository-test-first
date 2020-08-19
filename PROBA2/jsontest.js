const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template');
const getDataButton = document.querySelector('.getDataBtn');



getDataButton.addEventListener('click',()=>{
    let year = document.getElementById('setYear').value;
    getData(year);

});
  

async function getData(y){
    postSection.innerText="";

    const postStream = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/'+y+'/es.1.json');
    const posts = await postStream.json();

    const rounds = posts.rounds;

    let i=1;
    rounds.forEach(rounds => {
      
            const matches = rounds.matches
            matches.forEach(matches => {
                if(matches.score != null)    
                {
                    if(matches.team1 == "FC Barcelona" || matches.team2 == "FC Barcelona")  
                    {                     
                    const data = matches.date;
                    const team1 = matches.team1;
                    const team2 = matches.team2;
                    const score = matches.score;
                    const scoreHome=score.ft[0];
                    const scoreAway=score.ft[1];
                    
                    const newPost = document.importNode(postTemplate.content, true);
                    const newNumber = newPost.querySelector('.post__number');
                    const postData = newPost.querySelector('.post__date');
                    const postTeam1 = newPost.querySelector('.post__team1');
                    const postTeam2 = newPost.querySelector('.post__team2');
                    const postScore = newPost.querySelector('.post__score');

                    newNumber.innerHTML="Kolejka: "+ i;
                    postData.innerText = data;
                    postTeam1.innerText = "Gospodarz: " + team1;
                    postTeam2.innerText = "Gość: " + team2;

                    postScore.innerText = "Wynik: " + scoreHome + " : " + scoreAway;

                    postSection.appendChild(newPost);
                    i++;
                    }
                }
                else{
                    if(matches.team1 == "FC Barcelona" || matches.team2 == "FC Barcelona")  
                    {                     
                    const data = matches.date;
                    const team1 = matches.team1;
                    const team2 = matches.team2;
                 
                    
                    const newPost = document.importNode(postTemplate.content, true);
                    const newNumber = newPost.querySelector('.post__number');
                    const postData = newPost.querySelector('.post__date');
                    const postTeam1 = newPost.querySelector('.post__team1');
                    const postTeam2 = newPost.querySelector('.post__team2');
                    const postScore = newPost.querySelector('.post__score');

                    newNumber.innerHTML="Kolejka: "+ i;
                    postData.innerText = data;
                    postTeam1.innerText = "Gospodarz: " + team1;
                    postTeam2.innerText = "Gość: " + team2;

                    postScore.innerText = "Wynik: nieznany";

                    postSection.appendChild(newPost);
                    i++;
                    }

                }
                
            });
        

    });
};


