/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { floors } from '../assetManager/flooring';
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
} from '../assetManager/preloadAssets';
import {
  shinobiAnimsIdle,
  shinobiAnimsRun,
  shinobiAnimsJump,
  shinobiAnimsThrow,
} from '../assetManager/anims';

const gameState = {
  speed: 240,
  ups: 640,
  width: 5120,
  height: 640,
};

export class Stage extends Phaser.Scene {
  constructor(key) {
    super({ key });
    this.stageKey = key;
    this.nextStage = {
      Stage1: 'Stage2',
      Stage2: 'Stage3',
      Stage3: 'Stage4',
    };
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
      { frameWidth: 32, frameHeight: 32 });
  }

  create() {
    gameState.active = true;
    gameState.player = this.physics.add.sprite(
      100, 500, 'shinobi',
    ).setDepth(1000);
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
      setXY: { x: 12, y: 0, stepX: 100 },
    });
    gameState.stars.enableBody = true;
    gameState.stars.physicsBodyType = Phaser.Physics.ARCADE;

    gameState.stars.children.iterate((child) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.3, 0.6));
    });

    const scoreText = this.add.text(
      16, 16, 'score : 0',
      { fontSize: '32px', fill: '#000' },
    ).setScrollFactor(0);

    function getStar(player, star) {
      star.disableBody(true, true);
      this.score += 10;
      scoreText.setText(`Score: ${this.score}`);
      if (gameState.stars.countActive(true) === 0) {
        stars.children.iterate((child) => {
          child.enableBody(true, child.x, 0, true, true);
        });
      }
      this.showScore(this.score);
    }

    this.physics.add.collider(gameState.stars, gameState.platforms);
    this.physics.add.overlap(
      gameState.player,
      gameState.stars,
      getStar, null, this,
    );
  }

  showScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = `Current Score: ${this.score}`;
    scoreElement.setAttribute('class', 'has-text-white has-text-weight-bold');
  }

  enemies() {
    const enemies = [
      'nigel', 'ben', 'edgar',
      'barnes', 'pollock', 'pickle',
      'rory', 'borg', 'teeth',
      'finn', 'clint', 'keith',
    ];
    const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
    async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index += 1) {
        // eslint-disable-next-line no-await-in-loop
        await callback(array[index], index, array);
      }
    }

    function hitEnemyRight(kunaiRight, enemy) {
      this.score += 30;
      kunaiRight.destroy();
      enemy.destroy();
      this.showScore(this.score);
    }

    function hitEnemyLeft(kunaiLeft, enemy) {
      this.score += 30;
      kunaiLeft.destroy();
      enemy.destroy();
      this.showScore(this.score);
    }

    function hitPlayer(player) {
      this.add.text(
        gameState.player.x, 50,
        '      Game Over...\n  Click to play again.',
        { fontFamily: 'Arial', fontSize: 36, color: '#ffffff' },
      );
      this.physics.pause();
      gameState.active = false;
      player.anims.play('turn');
      this.score = 0;
      this.input.on('pointerup', () => {
        this.scene.restart(this.stageKey);
      });
    }

    const start = async () => {
      await asyncForEach(enemies, async () => {
        await waitFor(400);
        gameState.enemy = this.physics.add.sprite(
          gameState.width * Math.random(), 200, 'snowman',
        );
        this.physics.add.collider(gameState.enemy, gameState.platforms);
        this.physics.add.collider(
          gameState.kunaiRight,
          gameState.enemy,
          hitEnemyRight, null, this,
        );
        this.physics.add.collider(
          gameState.kunaiLeft,
          gameState.enemy,
          hitEnemyLeft, null, this,
        );
        this.physics.add.collider(
          gameState.player,
          gameState.enemy,
          hitPlayer, null, this,
        );
        gameState.enemy = this.physics.add.group();
      });
    };
    start();
  }

  makeFloors() {
    floors.forEach(floor => {
      gameState.platforms.create(floor.x, floor.y, 'platform');
    });
  }

  camera() {
    this.cameras.main.setBounds(0, 0, gameState.width, gameState.height);
    this.physics.world.setBounds(
      0, 0,
      gameState.width,
      gameState.height + gameState.player.height,
    );
    gameState.player.setCollideWorldBounds(true);
    gameState.player.onWorldBounds = true;
    const cam = this.cameras.main;
    this.input.keyboard.on('keydown-X', () => {
      cam.pan(4640, 320, 25000);
    });
  }

  makeAnimations() {
    shinobiAnimsIdle.forEach(idle => {
      this.anims.create({
        key: idle.key,
        frames: idle.frames,
        frameRate: idle.frameRate,
        repeat: idle.repeat,
      });
    });

    shinobiAnimsRun.forEach(run => {
      this.anims.create({
        key: run.key,
        frames: run.frames,
        frameRate: run.frameRate,
        repeat: run.repeat,
      });
    });

    shinobiAnimsJump.forEach(jump => {
      this.anims.create({
        key: jump.key,
        frames: jump.frames,
        frameRate: jump.frameRate,
        repeat: jump.repeat,
      });
    });

    shinobiAnimsThrow.forEach(toss => {
      this.anims.create({
        key: toss.key,
        frames: toss.frames,
        frameRate: toss.frameRate,
        repeat: toss.repeat,
      });
    });

    this.anims.create({
      key: 'door',
      frames: this.anims.generateFrameNumbers('door', { start: 0, end: 16 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  makePlatform(xIndex, yIndex) {
    if (typeof yIndex === 'number' && typeof xIndex === 'number') {
      gameState.platforms.create(
        (220 * xIndex), yIndex * 70, 'platform',
      ).setOrigin(-0.5, 0.5).refreshBody();
    }
  }

  stageSetup() {
    // eslint-disable-next-line no-restricted-syntax
    for (const [xIndex, yIndex] of this.heights.entries()) {
      this.makePlatform(xIndex, yIndex);
    }
    gameState.goal = this.physics.add.sprite(
      gameState.width - 100, 100, 'door',
    ).setDepth(1000);
    this.physics.add.overlap(gameState.player, gameState.goal, () => {
      this.cameras.main.fade(800, 0, 0, 0, false, (camera, progress) => {
        if (progress > 0.9) {
          this.scene.start(this.nextStage[this.stageKey]);
        }
      });
    }, null, this);
  }

  update() {
    if (gameState.active) {
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
      if (Phaser.Input.Keyboard.JustDown(
        gameState.cursors.space,
      ) && gameState.player.body.touching.down
      ) {
        gameState.player.setVelocityY(-500);
        gameState.player.anims.play('jump', true);
      }
      if (!gameState.player.body.touching.down) {
        gameState.player.anims.play('jump', true);
      }
      if (Phaser.Input.Keyboard.JustUp(
        this.input.keyboard.addKey(
          Phaser.Input.Keyboard.KeyCodes.Z,
        ),
      )) {
        if (gameState.player.flipX) {
          gameState.player.anims.play('throw', true);
          gameState.kunaiLeft.create(
            gameState.player.x,
            gameState.player.y,
            'kunaiLeft',
          ).setVelocityX(-2800);
        } else {
          gameState.player.anims.play('throw', true);
          gameState.kunaiRight.create(
            gameState.player.x,
            gameState.player.y,
            'kunaiRight',
          ).setVelocityX(2800);
        }
      }
      if (gameState.player.y > gameState.height) {
        this.cameras.main.shake(
          240, 0.01,
          false, (camera, progress) => {
            if (progress > 0.9) {
              this.scene.restart(this.stageKey);
            }
          },
        );
      }
    }
  }
}
