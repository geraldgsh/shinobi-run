import 'phaser';
import { Animations } from 'phaser';
// import { SimpleScene } from './scenes/simple-scene';
// import { Stage } from './scenes/stage';

const gameCanvas = document.getElementById('gameCanvas');

export class Stage extends Phaser.Scene {
  constructor(key) {
    super({key});
    this.stageKey = key
    this.nextStage = {
      'Stage1': 'Stage2',
      'Stage2': 'Stage3',
      'Stage3': 'Stage4',
    }
    this.score = 0;
  }
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

    this.load.image('star', 'assets/star/star-1.png');

    this.load.image('cityBGSunSet', 'assets/city/city_bg_sunset.png') 

    this.load.image('platform', 'assets/platform/platform.png')
    this.load.spritesheet('door', 'assets/door/door.png', { frameWidth: 32, frameHeight: 32});
    this.load.image('snowman', 'assets/enemy/snowman.png')
  
  }

  create() {
    gameState.active = true;
    gameState.player = this.physics.add.sprite(100, 500, 'shinobi').setDepth(1000);
    this.add.image(2560, 320, 'cityBGSunSet');
    gameState.cursors = this.input.keyboard.createCursorKeys();
    gameState.platforms = this.physics.add.staticGroup();
    gameState.kunaiLeft = this.physics.add.group();
    gameState.kunaiRight = this.physics.add.group(); 
    this.makeFloors();
    this.makeAnimations();
    this.stageSetup();
    this.enemies();
    this.makeStars();
    this.camera();
    this.physics.add.collider(gameState.player, gameState.platforms);
    this.physics.add.collider(gameState.goal, gameState.platforms);      
  }

  makeStars() {
    gameState.stars = this.physics.add.group({
      key: 'star',
      repeat: 50,
      setXY: { x: 12, y: 0, stepX: 100 }
    });
    gameState.stars.enableBody = true;
    gameState.stars.physicsBodyType = Phaser.Physics.ARCADE;
  
    gameState.stars.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.3, 0.6));
    });
  
    this.physics.add.collider(gameState.stars, gameState.platforms);
    this.physics.add.overlap(gameState.player, gameState.stars, getStar, null, this);
    
    function getStar(player, star) {
      star.disableBody(true, true);
      this.score += 10;
      scoreText.setText('Score: ' + this.score);
      if (gameState.stars.countActive(true) === 0)
      {
        stars.children.iterate(function (child) {
          child.enableBody(true, child.x, 0, true, true);
        });
        // var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        // var bomb = bombs.create(x, 16, 'bomb');
        // bomb.setBounce(1);
        // bomb.setCollideWorldBounds(true);
        // bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        
      }
      this.showScore(score);  
      
    };
    let scoreText = this.add.text(16, 16, 'score : 0', {fontSize: '32px', fill: '#000'});
    
  }

  showScore(score) {
    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = `Current Score: ${this.score}`
     scoreElement.setAttribute("class", "has-text-white has-text-weight-bold");
  }

  enemies() {
    let enemies = [
      'nigel', 'ben', 'edgar', 
      'barnes', 'pollock', 'pickle', 
      'rory', 'borg', 'teeth', 
      'finn', 'clint', 'keith'
    ];
    const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
    async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index++) {
        // eslint-disable-next-line no-await-in-loop
        await callback(array[index], index, array);
      }
    }
    const start = async () => {
      await asyncForEach(enemies, async (enemy) => {
        await waitFor(400);
        gameState.enemy = this.physics.add.sprite(gameState.width * Math.random(), 200, 'snowman');
        this.physics.add.collider(gameState.enemy, gameState.platforms);
        this.physics.add.collider(gameState.kunaiRight, gameState.enemy, hitEnemyRight, null, this);
        this.physics.add.collider(gameState.kunaiLeft, gameState.enemy, hitEnemyLeft, null, this);
        this.physics.add.collider(gameState.player, gameState.enemy, hitPlayer, null, this);
        gameState.enemy = this.physics.add.group();
      });
    }
    start();

    function hitEnemyRight(kunaiRight, enemy) {
      this.score += 30;
      kunaiRight.destroy();
      enemy.destroy();
      this.showScore(score);      
    }
    
    function hitEnemyLeft(kunaiLeft, enemy) {
      this.score += 30;
      kunaiLeft.destroy();
      enemy.destroy();
      this.showScore(score);      
    }
    
    function hitPlayer(player) {
      this.add.text(gameState.player.x, 50, '      Game Over...\n  Click to play again.', 
      { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' });
      this.physics.pause();
      gameState.active = false;
      player.anims.play('turn');
      this.input.on('pointerup', () => {
        this.scene.restart();
      })
    }
  }

  makeFloors() {
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
      gameState.platforms.create(floor.x, floor.y, 'platform')
    });
  }

  camera() {
    this.cameras.main.setBounds(0, 0, gameState.width, gameState.height);
    this.physics.world.setBounds(0, 0, gameState.width, gameState.height + gameState.player.height);
    gameState.player.setCollideWorldBounds(true);
    gameState.player.onWorldBounds = true;
    this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5);
  }

  makeAnimations() {
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
    this.anims.create({
      key: 'door',
      frames: this.anims.generateFrameNumbers('door', { start: 0, end: 16 }),
      frameRate: 10,
      repeat: -1
    });
  }

  makePlatform(xIndex, yIndex) {
    // Creates a platform evenly spaced along the two indices.
    // If either is not a number it won't make a platform
    if (typeof yIndex === 'number' && typeof xIndex === 'number') {
      gameState.platforms.create((220 * xIndex),  yIndex * 70, 'platform').setOrigin(- 0.5, 0.5).refreshBody();
    }
  }

  stageSetup() {
    for (const [xIndex, yIndex] of this.heights.entries()) {
      this.makePlatform(xIndex, yIndex);
    }
    gameState.goal = this.physics.add.sprite(gameState.width - 100, 100, 'door').setDepth(1000);
    this.physics.add.overlap(gameState.player, gameState.goal, function() {
      // Add in the collider that will fade out to the next level here
      this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress) {
        if (progress > .9) {
          this.scene.start(this.nextStage[this.stageKey]);
        }
      })
    }, null, this)      
  }

  update() {
    if(gameState.active){
      gameState.goal.anims.play('door', true);
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
      if (gameState.player.y > gameState.height) {
        this.cameras.main.shake(240, .01, false, function(camera, progress) {
          if (progress > .9) {
            this.scene.restart(this.stageKey)
          }          
        })
      }
    }  
  }
};

// Create a Level1 class that inherits from Level
class Stage1 extends Stage {
  constructor() {
    super('Stage1');
    this.heights = [
      4, 7, 5, 
      null, 5, 4, 
      null, 4, 5, 
      3, null, 7, 
      5, 4, null, 
      null, 7, 6, 
      4, null, 4
    ];
  }
}

class Stage2 extends Stage {
  constructor() {
    super('Stage2')
    this.heights = [
      5, 4, null, 
      4, 6, 4, 
      6, 5, 4,
      null, null, 7,
      6, 5, 4,
      null, 7, null,
      7, 4, 1
    ];
  }
}

class Stage3 extends Stage {
  constructor() {
    super('Stage3')
    this.heights = [
      6, null, 6, 
      4, 6, 4, 
      5, null, 4,
      8, 6, 4,
      null, 7, null,
      7, 5, 4,
      3, null, null
    ];
  }
}

class Stage4 extends Stage {
  constructor() {
    super('Stage4')
    this.heights = [
      4, null, 7, 
      6, null, 6, 
      null, 5, 4,
      null, 7, 5,
      6, 7, 5,
      null, null, null,
      7, 6, 5
    ];
  }
}

export const gameConfig = {
  type: Phaser.CANVAS,
  canvas: gameCanvas,
  width: 960,
  height: 640,  
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 550 },
      debug: true,
      enableBody: true,
    }
  },
  scene: [Stage1, Stage2, Stage3, Stage4]
};

export const gameState = {
  speed: 240,
  ups: 640,
  width: 5120,
  height: 640,
};

var game = new Phaser.Game(gameConfig);
