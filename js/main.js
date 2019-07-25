const search = document.querySelector('#search');
const matchList = document.querySelector('#match-list');
let characters;

// fetch('https://raw.githubusercontent.com/arkadiuszpasek/Game-of-Thrones-Characters-Lookup/master/data/characters.jsonadd')
// .then(res => res.json())
// .then((out) => {
//   console.log('Checkout this JSON! ', out);
// })
// .catch(err => { throw err });

const loadCharacters = async () =>{
  const res = await fetch('https://raw.githubusercontent.com/arkadiuszpasek/Game-of-Thrones-Characters-Lookup/master/data/characters.json');
  characters = await res.json();
}
loadCharacters();

const searchCharacters = inputText => {
  const regex = new RegExp(`^${inputText}`, 'gi');
  // characters.forEach(ch => console.log(ch.characterName));
  let matches = characters.filter( character => {
   const nameArray = character.characterName.split(' ')
   return nameArray.some(el => el.match(regex)) || character.characterName.match(regex);
  });

  if(inputText.length == 0) matches = [];
  outputHTML(matches);
}

const outputHTML = matches => {
  if(matches.length > 0) {
    const html = matches.map(character => {
      let actor = '';
      if(character.actorName != null) {
        actor = character.actorName;
      } else if (character.actors != null) {
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