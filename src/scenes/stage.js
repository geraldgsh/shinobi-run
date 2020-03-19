import { floors } from "../assetManager/flooring";
import {
  preloadShinobiIdle,
  preloadShinobiRun,
  preloadShinobiJump,
  preloadShinobiThrow,
  preloadShinobiKunai,
  preloadStar,
  preloadBG,
  preloadPlatform,
  preloadEnemy,
} from "../assetManager/preloadAssets";

const gameState = {
  speed: 240,
  ups: 640,
  width: 5120,
  height: 640,
};

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
    this.preloader();
  }

  preloader() {
    this.load.image('shinobi', 'assets/ninja/Idle__000.png');
    preloadShinobiKunai.forEach(kunai => {
      this.load.image(kunai.name, kunai.path);
    });
    preloadShinobiIdle.forEach(idle => {
      this.load.image(idle.name, idle.path);
    });
    preloadShinobiRun.forEach(run => {
      this.load.image(run.name, run.path);
    });
    preloadShinobiJump.forEach(jump => {
      this.load.image(jump.name, jump.path);
    });
    preloadShinobiThrow.forEach(toss => {
      this.load.image(toss.name, toss.path);
    });
    preloadStar.forEach(star => {
      this.load.image(star.name, star.path);
    });
    preloadBG.forEach(BG => {
      this.load.image(BG.name, BG.path);
    });
    preloadPlatform.forEach(platform => {
      this.load.image(platform.name, platform.path);
    });
    preloadEnemy.forEach(enemy => {
      this.load.image(enemy.name, enemy.path);
    });
    this.load.spritesheet('door', 'assets/door/door.png',
    { frameWidth: 32, frameHeight: 32});
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
    this.stageSetup();
    this.enemies();
    this.makeStars();
    this.makeAnimations();
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
      }
      this.showScore(score);  
      
    };
    let scoreText = this.add.text(16, 16, 'score : 0', {fontSize: '32px', fill: '#000'}).setScrollFactor(0);
    
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
      this.score = 0;
      this.input.on('pointerup', () => {
        this.scene.restart(this.stageKey);
      })
    }
  }

  makeFloors() {
    floors.forEach(floor => {
      gameState.platforms.create(floor.x, floor.y, 'platform')
    });
  }

  camera() {
    this.cameras.main.setBounds(0, 0, gameState.width, gameState.height);
    this.physics.world.setBounds(0, 0, gameState.width, gameState.height + gameState.player.height);
    gameState.player.setCollideWorldBounds(true);
    gameState.player.onWorldBounds = true;
    // this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5);
    const cam = this.cameras.main;
    this.input.keyboard.on('keydown-X', function () {      
      cam.pan(4640, 320, 25000);
    });
    
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