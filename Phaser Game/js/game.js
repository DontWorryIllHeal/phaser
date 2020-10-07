// create a new scene
let gameScene = new Phaser.Scene('Game');

// Load assets
gameScene.preload = function(){
  // Load images
  this.load.image('background', 'assets/background.png');
  this.load.image('player', 'assets/player.png');
};

// called once after the preload ends 
gameScene.create = function() {
    // create bg sprite
    let bg = this.add.sprite(0, 0, 'background');

  // change the origin to the top-left corner
  bg.setOrigin(0,0);

  // create the player
  let player = this.add.sprite(50, 180, 'player');
};

// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);
