"use strict";
{
  {
    const windowWidth = window.innerWidth;
    if (windowWidth < 500) {
      var unit = 10;
    } else {
      var unit = 20;
    }

    const map = document.getElementById("js-map");
    const overMenu = document.getElementById("js-overMenu");
    const score = document.getElementById("js-score");
    const restartButton = document.getElementById("js-restartButton");
    const startMenu = document.getElementById("js-startMenu");
    const startButton = document.getElementById("js-startButton");
    var timer;

    function Snake() {
      this.width = unit;
      this.height = unit;
      this.direction = "right";
      this.bodyPosition = [
        { x: 6, y: 15 },
        { x: 5, y: 15 },
        { x: 4, y: 15 },
        { x: 3, y: 15 },
      ];

      // show snake
      this.show = function () {
        for (let i = 0; i < this.bodyPosition.length; i++) {
          if (this.bodyPosition[i].x !== null) {
            let snake = document.createElement("div");
            this.bodyPosition[i].flag = snake;

            snake.style.width = this.width + "px";
            snake.style.height = this.height + "px";
            snake.style.left = this.bodyPosition[i].x * this.width + "px";
            snake.style.top = this.bodyPosition[i].y * this.height + "px";

            map.appendChild(snake);
            snake.className = "snake";
          }
        }
      };

      this.gameOver = function () {
        clearInterval(timer);
        map.classList.add("disabled");
        overMenu.classList.remove("disabled");
        let snakeLength = this.bodyPosition.length;
        score.textContent = snakeLength;

        for (let i = 0; i < this.bodyPosition.length; i++) {
          if (this.bodyPosition[i].flag !== null) {
            map.removeChild(this.bodyPosition[i].flag);
          }
        }
        this.direction = "right";
        this.bodyPosition = [
          { x: 6, y: 15 },
          { x: 5, y: 15 },
          { x: 4, y: 15 },
          { x: 3, y: 15 },
        ];
        this.show();
      };

      this.run = function () {
        // body_move
        for (let i = this.bodyPosition.length - 1; i > 0; i--) {
          this.bodyPosition[i].x = this.bodyPosition[i - 1].x;
          this.bodyPosition[i].y = this.bodyPosition[i - 1].y;
        }

        // direction_move
        switch (this.direction) {
          case "left":
            this.bodyPosition[0].x -= 1;
            break;
          case "right":
            this.bodyPosition[0].x += 1;
            break;
          case "up":
            this.bodyPosition[0].y -= 1;
            break;
          case "down":
            this.bodyPosition[0].y += 1;
            break;
        }

        // map_out => game over
        if (
          this.bodyPosition[0].x < 0 ||
          this.bodyPosition[0].x > map.clientWidth/unit - 1 ||
          this.bodyPosition[0].y < 0 ||
          this.bodyPosition[0].y > map.clientHeight/unit - 1
        ) {
          this.gameOver();
          return false;
        }

        // eat_self => game over
        for (let i = 4; i < this.bodyPosition.length; i++) {
          if (
            this.bodyPosition[0].x === this.bodyPosition[i].x &&
            this.bodyPosition[0].y === this.bodyPosition[i].y
          ) {
            this.gameOver();
            return false;
          }
        }

        // eat_food
        if (
          this.bodyPosition[0].x === food.x &&
          this.bodyPosition[0].y === food.y
        ) {
          this.bodyPosition.push({ x: null, y: null, flag: null });

          map.removeChild(food.flag);
          food.show();
        }

        for (let i = 0; i < this.bodyPosition.length; i++) {
          if (this.bodyPosition[i].flag !== null) {
            map.removeChild(this.bodyPosition[i].flag);
          }
        }

        this.show();

        // eat_food
        if (
          this.bodyPosition[0].x === food.x &&
          this.bodyPosition[0].y === food.y
        ) {
          this.bodyPosition.push({ x: null, y: null, flag: null });

          map.removeChild(food.flag);
          food.show();
        }
      };
    }

    function Food() {
      this.width = unit;
      this.height = unit;
      this.show = function () {
        let food = document.createElement("div");
        this.flag = food;
        this.x = Math.floor(Math.random() * 25);
        this.y = Math.floor(Math.random() * 30);

        food.style.width = this.width + "px";
        food.style.height = this.height + "px";

        food.style.left = this.x * this.width + "px";
        food.style.top = this.y * this.height + "px";

        map.appendChild(food);
        food.className = "food";
      };
    }

    var snake = new Snake();
    var food = new Food();
    snake.show();
    food.show();

    document.body.onkeydown = function (e) {
      let event = e || window.event;
      switch (event.keyCode) {
        case 38:
          if (snake.direction !== "down") {
            snake.direction = "up";
          }
          break;
        case 40:
          if (snake.direction !== "up") {
            snake.direction = "down";
          }
          break;
        case 37:
          if (snake.direction !== "right") {
            snake.direction = "left";
          }
          break;
        case 39:
          if (snake.direction !== "left") {
            snake.direction = "right";
          }
          break;
      }
    };

    startButton.addEventListener("click", () => {
      startMenu.classList.add("disabled");
      map.classList.remove("disabled");
      timer = setInterval("snake.run()", 200);
    });

    restartButton.addEventListener("click", () => {
      overMenu.classList.add("disabled");
      map.classList.remove("disabled");
      timer = setInterval("snake.run()", 200);
    });
  }
}
