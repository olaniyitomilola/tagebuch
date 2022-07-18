let username = document.getElementById('username');
let password = document.getElementById('password');
let errorlogger = document.getElementById('errorlogger'); 
let addedlist = document.getElementById('recentlyadded');
let wordoftheday = document.getElementById('wordoftheday')
let wordofthedaymeaning = document.querySelector('#wordmeaning span')              



function login (){
    let btn_login = document.getElementById('btn_login')
        
        errorlogger.style.color = 'red';
        errorlogger.style.fontSize = '0.7em';
        if(username.value.trim() == ''){
            errorlogger.textContent = "*kindly enter your username"
        } else{
            if(password.value.trim() === ''){
                errorlogger.textContent = "*kindly enter your password"
            } else{
                location.href = 'dashboard.html'

            }
        }
 
}

function removeError(){
    errorlogger.textContent = '';
}

//navselector
const actives = document.querySelectorAll('.nav');

actives.forEach((active) => {
    active.addEventListener('click', () => {
        removeActiveClasses();
        active.classList.add('active');

    });
});

function removeActiveClasses() {
    actives.forEach((active) => {
        active.classList.remove('active');
    });
}

let recentlyadded = {
    danke : 'thank you',
    hunger: 'hungry',
    durst: 'thirsty',
    sprachen: 'language',
    sage: 'say',
    spreche: 'speak',
    salat: 'salad'
};
let register =  [
    {herkommen : 'come here'},
    {eintreten: 'enter, occur, join, step in'},
    {reue: 'regret, repentance, contrition'},
    {nachtrauern: 'mourn, regret'},
    {geld: 'money'},
    {frau: 'woman, wife, Ms, Mrs'},
    {frauen: 'women'},
    {Frühstück: 'breakfast'},
    {schue: 'shoe'},
    {schulerin: 'Student(female)...Schuler for male'},
    {Arzt: 'doctor'},
    {food: 'essen'},
    {meat: 'fleisch'},
    {fish: 'fisch'},
    {boy: 'junge'},
    {girl: 'madchen'},
    {spielt : 'play'},
    {fahre : 'drive'},
    {brauche : 'need'},
    {will : 'wants'},
    {wollen: 'want'},
    {gesucht : 'wanted'},
    {einkehren: 'stop off, make a stop' },
    {denke : 'think'},
    {wissen : 'knowledge'},
    {erkenntnis: 'realization, recongnition, finding, insight'},
    {bekanntschaft: 'acquitance, familiarity, introduction'},
    {reise: 'trip, travel, tour'},
    {fliegen: 'fly'},
    {Wochenende:'weekend'},
    {urlahb: 'vacation'},
    {sonning: 'sunny'},
    {neu: 'new'},
    {neulich: 'recently'},
    {wartete: 'was waiting'},
    {pflegen: 'maintain'},
    {betreuen: 'look after'},
    {herumlungern: 'hang about'},
    {bedienen: 'service'},
    {pflegefachpersonen: 'nurses'},
    {selten: 'rare'},
    {ungewöhnlich: 'unusual, anomalous, offbeat, unique'},
    {bedeutet: 'mean, signify, imply, denote'},
    {erlebt: 'experienced'}

]
Object.entries(recentlyadded).forEach((entry) =>{
   const [wrd,meaning] = entry; 
   register.push({[wrd] : meaning});
   })
function dayword (){
    const choice = register[Math.floor(Math.random() * register.length)];
    for(const[word,meaning] of Object.entries(choice)){
        wordoftheday.textContent = word;
        wordofthedaymeaning.textContent = meaning;
    }
}


function recentwords(){
    if(Object.keys(recentlyadded).length < 1){
        addedlist.textContent = 'Keine kürzlich hinzugefügte Wörter'
     } else{
        
        if(Object.keys(recentlyadded).length > 5){
            let counter = 0
            for(const[word,meaning] of Object.entries(recentlyadded)){
                if(counter == 5){
                    return;
                }
                const wordwrapper = document.createElement('div');
                wordwrapper.className = 'wordwrapper';
                let wording = document.createElement('div');
                wording.className = 'word';
                let meanings = document.createElement('div');
                meanings.className = 'meaning';
                wording.textContent = word + ':';
                meanings.textContent = meaning;
                wordwrapper.appendChild(wording);
                wordwrapper.appendChild(meanings);
                addedlist.appendChild(wordwrapper);
                counter++;
            }                
            
        } else{
             Object.entries(recentlyadded).forEach((entry) =>{
             let wording = document.createElement('li');
             const [word,meaning] = entry;
             wording.textContent = word + ' : ' + meaning;
             addedlist.appendChild(wording); 

            })
        }

         

         }
     }
function test(){
    setTimeout(recentwords,0000);
}
dayword();

