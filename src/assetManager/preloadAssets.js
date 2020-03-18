// const preloader = () => {
//   const preloadShinobi = [
//     {
//       name: 'shinobi',
//       path: 'assets/ninja/Idle__000.png',
//     },
//     {
//       name: 'kunaiLeft',
//       path: 'assets/ninja/Kunai-left.png',
//     },
//     {
//       name: 'kunaiRight',
//       path: 'assets/ninja/Kunai-right.png',
//     },
//     {
//       name: 'shinobi-id0',
//       path: 'assets/ninja/Idle__000.png',
//     },
//     {
//       name: 'shinobi-id1',
//       path: 'assets/ninja/Idle__001.png',
//     },
//     {
//       name: 'shinobi-id2',
//       path: 'assets/ninja/Idle__002.png',
//     },
//     {
//       name: 'shinobi-id3',
//       path: 'assets/ninja/Idle__003.png',
//     },
//     {
//       name: 'shinobi-id4',
//       path: 'assets/ninja/Idle__004.png',
//     },
//     {
//       name: 'shinobi-id5',
//       path: 'assets/ninja/Idle__005.png',
//     },
//     {
//       name: 'shinobi-id6',
//       path: 'assets/ninja/Idle__006.png',
//     },
//     {
//       name: 'shinobi-id7',
//       path: 'assets/ninja/Idle__007.png',
//     },
//     {
//       name: 'shinobi-id8',
//       path: 'assets/ninja/Idle__008.png',
//     },
//     {
//       name: 'shinobi-id9',
//       path: 'assets/ninja/Idle__009.png',
//     },
//     {
//       name: 'shinobi-rn0',
//       path: 'assets/ninja/run__000.png',
//     },
//     {
//       name: 'shinobi-rn1',
//       path: 'assets/ninja/run__001.png',
//     },
//     {
//       name: 'shinobi-rn2',
//       path: 'assets/ninja/run__002.png',
//     },
//     {
//       name: 'shinobi-rn3',
//       path: 'assets/ninja/run__003.png',
//     },
//     {
//       name: 'shinobi-rn4',
//       path: 'assets/ninja/run__004.png',
//     },
//     {
//       name: 'shinobi-rn5',
//       path: 'assets/ninja/run__005.png',
//     },
//     {
//       name: 'shinobi-rn6',
//       path: 'assets/ninja/run__006.png',
//     },
//     {
//       name: 'shinobi-rn7',
//       path: 'assets/ninja/run__007.png',
//     },
//     {
//       name: 'shinobi-rn8',
//       path: 'assets/ninja/run__008.png',
//     },
//     {
//       name: 'shinobi-rn9',
//       path: 'assets/ninja/run__009.png',
//     },
//     {
//       name: 'shinobi-jp0',
//       path: 'assets/ninja/jump__000.png',
//     },
//     {
//       name: 'shinobi-jp1',
//       path: 'assets/ninja/jump__001.png',
//     },
//     {
//       name: 'shinobi-jp2',
//       path: 'assets/ninja/jump__002.png',
//     },
//     {
//       name: 'shinobi-jp3',
//       path: 'assets/ninja/jump__003.png',
//     },
//     {
//       name: 'shinobi-jp4',
//       path: 'assets/ninja/jump__004.png',
//     },
//     {
//       name: 'shinobi-jp5',
//       path: 'assets/ninja/jump__005.png',
//     },
//     {
//       name: 'shinobi-jp6',
//       path: 'assets/ninja/jump__006.png',
//     },
//     {
//       name: 'shinobi-jp7',
//       path: 'assets/ninja/jump__007.png',
//     },
//     {
//       name: 'shinobi-jp8',
//       path: 'assets/ninja/jump__008.png',
//     },
//     {
//       name: 'shinobi-jp9',
//       path: 'assets/ninja/jump__009.png',
//     },
//     {
//       name: 'shinobi-tw0',
//       path: 'assets/ninja/throw__000.png',
//     },
//     {
//       name: 'shinobi-tw1',
//       path: 'assets/ninja/throw__001.png',
//     },
//     {
//       name: 'shinobi-tw2',
//       path: 'assets/ninja/throw__002.png',
//     },
//     {
//       name: 'shinobi-tw3',
//       path: 'assets/ninja/throw__003.png',
//     },
//     {
//       name: 'shinobi-tw4',
//       path: 'assets/ninja/throw__004.png',
//     },
//     {
//       name: 'shinobi-tw5',
//       path: 'assets/ninja/throw__005.png',
//     },
//     {
//       name: 'shinobi-tw6',
//       path: 'assets/ninja/throw__006.png',
//     },
//     {
//       name: 'shinobi-tw7',
//       path: 'assets/ninja/throw__007.png',
//     },
//     {
//       name: 'shinobi-tw8',
//       path: 'assets/ninja/throw__008.png',
//     },
//     {
//       name: 'shinobi-tw9',
//       path: 'assets/ninja/throw__009.png',
//     },
//   ];
  
//   const preloadStar = [
//     {
//       name: 'star',
//       path: 'assets/star/star-1.png',
//     },
//   ];
  
//   const preloadBG = [
//     {
//       name: 'cityBGSunSet',
//       path: 'assets/city/city_bg_sunset.png',
//     },
//   ];
  
//   const preloadPlatform = [
//     {
//       name: 'platform',
//       path: 'assets/platform/platform.png',
//     },
//   ];
  
//   const preloadEnemy = [
//     {
//       name: 'snowman',
//       path: 'assets/enemy/snowman.png',
//     },
//   ];
  
//   const preloadSpriteSheet = [
//     {
//       name: 'door',
//       url: 'assets/door/door.png',
//       frameWidth: 64,
//       frameHeight: 64,
//     },
//   ];
//   if (preloadShinobi) {
//     for (let i = 0; preloadShinobi.length; i += 1) {
//       const { name, path } = preloadShinobi[i];
//       this.load.image(name, path);
//     }
//   }
//   if (preloadStar) {
//     for (let i = 0; preloadStar.length; i += 1) {
//       const { name, path } = preloadStar[i];
//       this.load.image(name, path);
//     }  
//   }
//   if (preloadBG) {
//     for (let i = 0; preloadBG.length; i += 1) {
//       const { name, path } = preloadBG[i];
//       this.load.image(name, path);
//     }
//   }
//   if (preloadPlatform) {
//     for (let i = 0; preloadPlatform.length; i += 1) {
//       const { name, path } = preloadPlatform[i];
//       this.load.image(name, path);
//     }
//   }
//   if (preloadEnemy) {
//     for (let i = 0; preloadEnemy.length; i += 1) {
//       const { name, path } = preloadEnemy[i];
//       this.load.image(name, path);
//     }
//   }
//   if (preloadSpriteSheet) {
//     for (let i = 0; preloadSpriteSheet.length; i += 1) {
//       const { 
//         name,
//         path,
//         frameWidth,
//         frameHeight
//       } = preloadSpriteSheet[i];
//       this.load.spritesheet(name, path, frameWidth, frameHeight);
//     }
//   }
// }

const preloader = () => {
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

export default preloader;