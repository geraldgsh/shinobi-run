# Shinobi Run
[Capstone  Project]

### Snapshot

![](https://github.com/geraldgsh/shinobi-run/blob/feature/assets/screenshot/shinobi-run-screenshot.JPG)

### Introduction.

This project is one of many Javascript project to be completed by [Microverse](https://www.microverse.org/) students.

This game was inspired by [Shinobi](https://en.wikipedia.org/wiki/Shinobi_(series)) series from the early 90's. The protagonist have to fight enemy with his ninja tools and skill to clear each level. In Shinobi Run, the hero have to collect stars and fight snowman before reaching a portal at the end of each stage.

### How to play

At the start of the game, Shinobi is dropped where the player have to run, jump, collect stars and fight snowmen to gain points while the camera pans to the end of the stage. Use arrow buttons to run. Spacebar to jump. "Z" to throw deadly "kunais" and "X" to start camera pan.

### Project Objectives

[Here](https://www.notion.so/Platform-game-4a55a7d1fcc245bcb012c76814764712)

### Project Objectives

The first 2 days was exploring Phaser.js framework through tutorials and readings. Following by sourcing for sprites and images on [openart](https://opengameart.org/). I wanted simple game mechanics to give players the perception of endless running by panning the camera instead having random spawning moving platforms across the screen. To accummulate points, player will need to collect start worth 10 points and destroy Snowmen worth 30 points. For that I had to stitch city background image several times to achieve a long stage. Of course I slowly discovered sprites and images have to be scaled in ratio to set game screen canvas size. By the end of stage 4, player will be looped in the same stage till the game refreshes.  

#### Built with

This is a testing app built with babel & JS.

### Wiki

Checkout our [wikipage](https://github.com/geraldgsh/shinobi-run/wiki) for more details. 

- JavaScript
- HMTL
- PHASER JS
- npm
- webpack

#### Live Demo

[Live](https://shinobi-run.netlify.com/)

#### To play locally

Clone repo 
```sh
$ git clone https://github.com/geraldgsh/shinobi-run.git
```

Change directory, install tools and begin

```sh
$ yarn add --dev webpack webpack-cli
$ yarn add -D webpack-dev-server@latest
$ yarn run webpack-dev-server 
```

Open http://127.0.0.1:8080 using your preferred broswer

#### Prerequisites
Web browser like Chrome, Mozilla or similar.


### Github Repo
https://github.com/geraldgsh/shinobi-run

### Future enhancement

1. Leaderboard with highest scores and player name.
2. Get individual tweens to move back and forth
3. JSONIFY names and score to be sent to a public server using APIs
4. Reset game to stage 1 when game is over
5. Set physically camera bounds to pushes shinobi as it pans left to right
6. Add background music and sound effects
7. Unit testing for the game

and many more.....

👤 **Author**

Github: [geraldgsh](https://github.com/geraldgsh)

Twitter: [geraldgsh](https://github.com/geraldgsh)

Linkedin: [Gerald Goh](https://www.linkedin.com/geraldgsh)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/geraldgsh/shinobi-run/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](lic.url) licensed.
