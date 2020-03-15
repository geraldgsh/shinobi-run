import 'phaser';
// import { SimpleScene } from './scenes/simple-scene';
// import { Stage } from './scenes/stage';

const gameCanvas = document.getElementById('gameCanvas')

export class Stage extends Phaser.Scene {
 
  
  preload() {
    this.load.image('shinobi', 'assets/ninja/Idle__000.png');

    this.load.image('kunaiLeft', 'assets/ninja/Kunai-left.png');
    this.load.image('kunaiRight', 'assets/ninja/Kunai-right.png');

    this.load.image('shinobi-id0', 'assets/ninja/Idle__000.png');
    this.load.image('shinobi-id1', 'assets/ninja/Idle__001.png');
    this.load.image('shinobi-id2', 'assets/ninja/Idle__002.png');
    this.load.image('shinobi-id3', 'assets/ninja/Idle__003.png');
    this.load.image('shinobi-id4', 'assets/ninja/Idle__004.png');
    this.load.image('shinobi-id5', 'assets/ninja/Idle__005.png');
    this.load.image('shinobi-id6', 'assets/ninja/Idle__006.png');
    this.load.image('shinobi-id7', 'assets/ninja/Idle__007.png');
    this.load.image('shinobi-id8', 'assets/ninja/Idle__008.png');
    this.load.image('shinobi-id9', 'assets/ninja/Idle__009.png');

    this.load.image('shinobi-rn0', 'assets/ninja/run__000.png');
    this.load.image('shinobi-rn1', 'assets/ninja/run__001.png');
    this.load.image('shinobi-rn2', 'assets/ninja/run__002.png');
    this.load.image('shinobi-rn3', 'assets/ninja/run__003.png');
    this.load.image('shinobi-rn4', 'assets/ninja/run__004.png');
    this.load.image('shinobi-rn5', 'assets/ninja/run__005.png');
    this.load.image('shinobi-rn6', 'assets/ninja/run__006.png');
    this.load.image('shinobi-rn7', 'assets/ninja/run__007.png');
    this.load.image('shinobi-rn8', 'assets/ninja/run__008.png');
    this.load.image('shinobi-rn9', 'assets/ninja/run__009.png');

    this.load.image('shinobi-jp0', 'assets/ninja/jump__000.png');
    this.load.image('shinobi-jp1', 'assets/ninja/jump__001.png');
    this.load.image('shinobi-jp2', 'assets/ninja/jump__002.png');
    this.load.image('shinobi-jp3', 'assets/ninja/jump__003.png');
    this.load.image('shinobi-jp4', 'assets/ninja/jump__004.png');
    this.load.image('shinobi-jp5', 'assets/ninja/jump__005.png');
    this.load.image('shinobi-jp6', 'assets/ninja/jump__006.png');
    this.load.image('shinobi-jp7', 'assets/ninja/jump__007.png');
    this.load.image('shinobi-jp8', 'assets/ninja/jump__008.png');
    this.load.image('shinobi-jp9', 'assets/ninja/jump__009.png');

    this.load.image('shinobi-tw0', 'assets/ninja/Throw__000.png');
    this.load.image('shinobi-tw1', 'assets/ninja/Throw__001.png');
    this.load.image('shinobi-tw2', 'assets/ninja/Throw__002.png');
    this.load.image('shinobi-tw3', 'assets/ninja/Throw__003.png');
    this.load.image('shinobi-tw4', 'assets/ninja/Throw__004.png');
    this.load.image('shinobi-tw5', 'assets/ninja/Throw__005.png');
    this.load.image('shinobi-tw6', 'assets/ninja/Throw__006.png');
    this.load.image('shinobi-tw7', 'assets/ninja/Throw__007.png');
    this.load.image('shinobi-tw8', 'assets/ninja/Throw__008.png');
    this.load.image('shinobi-tw9', 'assets/ninja/Throw__009.png');

    this.load.image('cityBGSunSet', 'assets/city/city_bg_sunset.png') 

    this.load.image('platform', 'assets/platform/platform.png')

    // this.load.image('forest-bg1', 'assets/forest/forest-bg1.png');
    // this.load.image('forest-bg2', 'assets/forest/forest-bg2.png');
    // this.load.image('forest-bg3', 'assets/forest/forest-bg3.png');
    // this.load.image('forest-bg4', 'assets/forest/forest-bg4.png');
    // this.load.image('forest-bg5', 'assets/forest/forest-bg5.png');
    // this.load.image('forest-bg6', 'assets/forest/forest-bg6.png');
    // this.load.image('forest-bg7', 'assets/forest/forest-bg7.png');

    
  }

  create() {
    gameState.active = true;
    gameState.player = this.physics.add.sprite(100, 500, 'shinobi').setDepth(1000);

    this.add.image(2560, 320, 'cityBGSunSet');

    // gameState.bgColor = this.add.rectangle(0, 0, gameConfig.width, gameConfig.height, 0x00ffbb).setOrigin(0, 0);
    // this.createParallaxBackgrounds();

    gameState.cursors = this.input.keyboard.createCursorKeys();
    const platforms = this.physics.add.staticGroup();    
    const floors = [
      { x: 0, y: 640 },
      { x: 302, y: 640 },
      { x: 604, y: 640 },
      { x: 906, y: 640 },
      { x: 1208, y: 640 },
      { x: 1510, y: 640 },
      { x: 1812, y: 640 },
      { x: 2114, y: 640 },
      { x: 2416, y: 640 },
      { x: 2718, y: 640 },
      { x: 3020, y: 640 },
      { x: 3322, y: 640 },
      { x: 3624, y: 640 },
      { x: 3926, y: 640 },
      { x: 4228, y: 640 },
      { x: 4530, y: 640 },
      { x: 4832, y: 640 },
      { x: 5134, y: 640 },
      
    ];
    floors.forEach(floor => {
      platforms.create(floor.x, floor.y, 'platform')
    });

    this.physics.add.collider(gameState.player, platforms);

    this.cameras.main.setBounds(0, 0, gameState.width, gameState.height);
    this.physics.world.setBounds(0, 0, gameState.width, gameState.height);
    gameState.player.setCollideWorldBounds(true);
    gameState.player.onWorldBounds = true;
    this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5);

    // gameState.map = this.make.tilemap({ key: 'map' });
    // gameState.tileset = gameState.map.addTilesetImage('CityScape', 'tiles');
    // gameState.platforms = gameState.map.createStaticLayer('Platforms', gameState.tileset, 0, 200);
    // platforms.setCollisionByProperty({ collides: true});
    // this.matter.world.convertTilemapLayer(platforms);
      
    // gameState.platforms.setCollisionByExclusion(-1, true);
    // this.physics.add.collider(gameState.player, gameState.platforms);

    // gameState.player.setBounce(0.1);
    
    // this.physics.add.collider(this.player, platforms); 

    gameState.kunaiLeft = this.physics.add.group();
    gameState.kunaiRight = this.physics.add.group();
    gameState.kunaiLeft.enableBody = true;
    gameState.kunaiLeft.physicsBodyType = Phaser.Physics.ARCADE;
    gameState.kunaiRight.enableBody = true;
    gameState.kunaiRight.physicsBodyType = Phaser.Physics.ARCADE;


    this.anims.create({
      key: 'idle',
      frames: [
          { key: 'shinobi-id0' },
          { key: 'shinobi-id1' },
          { key: 'shinobi-id2' },
          { key: 'shinobi-id3' },
          { key: 'shinobi-id4' },
          { key: 'shinobi-id5' },
          { key: 'shinobi-id6' },
          { key: 'shinobi-id7' },
          { key: 'shinobi-id8' },
          { key: 'shinobi-id9' }
      ],
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'run',
      frames: [
          { key: 'shinobi-rn0' },
          { key: 'shinobi-rn1' },
          { key: 'shinobi-rn2' },
          { key: 'shinobi-rn3' },
          { key: 'shinobi-rn4' },
          { key: 'shinobi-rn5' },
          { key: 'shinobi-rn6' },
          { key: 'shinobi-rn7' },
          { key: 'shinobi-rn8' },
          { key: 'shinobi-rn9' }
      ],
      frameRate: 30,
      repeat: -1
    });
    
    this.anims.create({
      key: 'jump',
      frames: [
          { key: 'shinobi-jp0' },
          { key: 'shinobi-jp1' },
          { key: 'shinobi-jp2' },
          { key: 'shinobi-jp3' },
          { key: 'shinobi-jp4' },
          { key: 'shinobi-jp5' },
          { key: 'shinobi-jp6' },
          { key: 'shinobi-jp7' },
          { key: 'shinobi-jp8' },
          { key: 'shinobi-jp9' }
      ],
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'throw',
      frames: [
          { key: 'shinobi-tw0' },
          { key: 'shinobi-tw1' },
          { key: 'shinobi-tw2' },
          { key: 'shinobi-tw3' },
          { key: 'shinobi-tw4' },
          { key: 'shinobi-tw5' },
          { key: 'shinobi-tw6' },
          { key: 'shinobi-tw7' },
          { key: 'shinobi-tw8' },
          { key: 'shinobi-tw9' }
      ],
      frameRate: 10,
      repeat: -1,
    });    
  }

  update() {
    if(gameState.active){
      if (gameState.cursors.right.isDown) {
        gameState.player.flipX = false;
        gameState.player.x += 5;
        gameState.player.anims.play('run', true);
      } else if (gameState.cursors.left.isDown) {
        gameState.player.flipX = true;
        gameState.player.x -= 5;
        gameState.player.anims.play('run', true);
      } else {
        gameState.player.anims.play('idle', true);
      }
      if (Phaser.Input.Keyboard.JustDown(gameState.cursors.space) && gameState.player.body.touching.down) {
        gameState.player.setVelocityY(-500);
        gameState.player.anims.play('jump', true);
      }
      if (!gameState.player.body.touching.down){
        gameState.player.anims.play('jump', true);
      }
      if (Phaser.Input.Keyboard.JustUp(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z))) {
        if (gameState.player.flipX) {
          gameState.player.anims.play('throw', true);
          gameState.kunaiLeft.create(gameState.player.x, gameState.player.y, 'kunaiLeft').setVelocityX(-2800);
        } else {
          gameState.player.anims.play('throw', true);
          gameState.kunaiRight.create(gameState.player.x, gameState.player.y, 'kunaiRight').setVelocityX(2800);
        }        
      }
    }    
  }

  // createParallaxBackgrounds() {
  //   gameState.bg1 = this.add.image(0, 0, 'forest-bg1');
  //   gameState.bg2 = this.add.image(0, 0, 'forest-bg2');
  //   gameState.bg3 = this.add.image(0, 0, 'forest-bg3');
  //   gameState.bg4 = this.add.image(0, 0, 'forest-bg4');
  //   gameState.bg5 = this.add.image(0, 0, 'forest-bg5');
  //   gameState.bg6 = this.add.image(0, 0, 'forest-bg6');
  //   gameState.bg7 = this.add.image(0, 0, 'forest-bg7');
  // }
};

export const gameConfig = {
  type: Phaser.CANVAS,
  canvas: gameCanvas,
  width: 960,
  height: 640,
  scene: Stage,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 600 },
      debug: true,
      enableBody: true,
    }
  }
};

export const gameState = {
  speed: 240,
  ups: 640,
  width: 5120,
  height: 640,
};

new Phaser.Game(gameConfig);