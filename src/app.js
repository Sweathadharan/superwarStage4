const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  // "Popcorn",
  // "Gemwoman",
  // "Bolt",
  // "Antwoman",
  // "Mask",
  // "Tiger",
  // "Captain",
  // "Catwoman",
  // "Fish",
  // "Hulk",
  // "Ninja",
  // "Black Cat",
  // "Volverine",
  // "Thor",
  // "Slayer",
  // "Vader",
  // "Slingo"
];

// Player Class
class Player {
  constructor(id,name) {
    // Progression 1: Create member variables and assign values
    this.id = id;
    this.strength = this.getRandomStrength();
    this.image = 'images/super-' + (id + 1) + '.png';
    this.name = name;
    this.type = id % 2 === 0 ? 'hero' : 'villain';
  }
  // getting random strength
  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  // Progression 2: Create a player for displaying
  view = () => {
    // Accumulate HTML template
    // Type your code here
        let player = document.createElement('div');
        player.classList.add('player');
        player.setAttribute('data-id', this.id);

        let imgElement = document.createElement('img');
        imgElement.src = this.image;

        let nameElement = document.createElement('div');
        nameElement.classList.add('name');
        nameElement.textContent = this.name;

        let strengthElement = document.createElement('div');
        strengthElement.classList.add('strength');
        strengthElement.textContent = this.strength;

        player.appendChild(imgElement);
        player.appendChild(nameElement);
        player.appendChild(strengthElement);
    
    return player;
    
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    // Progression 3:
    // Create a field players
    // Use Map method to loop through players argument and create new players
    // Type your code here
    this.players = players.map((name, index) => new Player(index, name));
  }

  // Display players in HTML
  viewPlayers = () => {
    let team = document.getElementById('heroes');
    team.innerHTML = '';
    let fragment = this.buildPlayers('hero');
    team.append(fragment);

    team = document.getElementById('villains');
    team.innerHTML = '';
    fragment = this.buildPlayers('villain');
    team.append(fragment);
  };

  // Build players fragment
  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type == type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };
}

// uncomment this part -- only after you complete progression 3
window.onload = () => {
  const superwar = new Superwar(PLAYERS);
  superwar.viewPlayers();
};
