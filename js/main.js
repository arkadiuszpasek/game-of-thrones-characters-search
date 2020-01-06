// handle for DOM element which holds user input
const search = document.querySelector('#search');
// handle for DOM element which displays matching elements
const matchList = document.querySelector('#match-list');

// variable for storing characters, since its demo hosted on static website
// we're allowed to do only one data fetch while loading 
let characters;

const loadCharacters = async () =>{
  const res = await fetch('https://raw.githubusercontent.com/arkadiuszpasek/Game-of-Thrones-Characters-Lookup/master/data/characters.json');
  characters = await res.json();
}

const searchCharacters = inputText => {
  if(inputText.length == 0) {
    matches = [];
    return;
  }

  const regex = new RegExp(`^${inputText}`, 'gi');
  
  let matches = characters.filter( character => {
    // split name to display when someone starts typing name or surname or name and surname
    const nameArray = character.characterName.split(' ')
    return nameArray.some(el => el.match(regex)) || character.characterName.match(regex);
  });
  
  outputHTML(matches);
}

const outputHTML = matches => {
  if(matches.length > 0) {
    const html = matches.map(character => {
      let actor = '';

      // characters may have been played by multiple actors
      if(character.actorName != null) {
        actor = character.actorName;
      }
      else if (character.actors != null) {
        const actors = character.actors
        let array = [];
        actors.forEach(a => {
          array.push(a.actorName);
        });
        actor = array.join(', ');
      };
      
      let result = `
      <div class="card card-body mb-2">
      <h5>${character.characterName} <span class="text-info">${actor}</span></h5>
      <p class="text-muted mb-0">`
      if(character.houseName != null) {
        result += `<small class="pr-4">House: ${character.houseName}</small>`
      }
      if(character.killedBy != null) {
        result += `<small class="pr-4">Killed by: ${character.killedBy}</small>`
      }
      if(character.nickname != null) {
        result += `<small class="pr-4">Nickname: ${character.nickname}</small>`
      }
      result += `</p>
      </div>
      `;
      
      return result;
    }).join('')
    
    matchList.innerHTML = html;
  }
  
  else matchList.innerHTML = '';
}

search.addEventListener('input', () => searchCharacters(search.value));
loadCharacters();