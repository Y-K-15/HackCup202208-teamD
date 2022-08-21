"use strict";
{
  const map = document.getElementById("map");

  function Snake() {
    this.width = 20;
    this.height = 20;
    this.direction = "right";
    this.bodyPosition = [
      { x: 20, y: 20 },
      { x: 19, y: 20 },
      { x: 18, y: 20 },
      { x: 17, y: 20 },
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
        this.bodyPosition[0].x > 49 ||
        this.bodyPosition[0].y < 0 ||
        this.bodyPosition[0].y > 29
      ) {
        clearInterval(timer);
        alert("Game Over!");

        for (let i = 0; i < this.bodyPosition.length; i++) {
          if (this.bodyPosition[i].flag !== null) {
            map.removeChild(this.bodyPosition[i].flag);
          }
        }
        this.bodyPosition = [
          { x: 2, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 0 },
        ];
        this.direction = "right";
        this.show();
        return false;
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

      // eat_self => game over
      for (let i = 4; i < this.bodyPosition.length; i++) {
        if (
          this.bodyPosition[0].x === this.bodyPosition[i].x &&
          this.bodyPosition[0].y === this.bodyPosition[i].y
        ) {
          clearInterval(timer);
          alert("Game Over!");

          for (let i = 0; i < this.bodyPosition.length; i++) {
            if (this.bodyPosition[i].flag !== null) {
              map.removeChild(this.bodyPosition[i].flag);
            }
          }
          this.bodyPosition = [
            { x: 2, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 0 },
          ];
          this.direction = "right";
          this.show();
          return false;
        }
      }

      for (let i = 0; i < this.bodyPosition.length; i++) {
        if (this.bodyPosition[i].flag !== null) {
          map.removeChild(this.bodyPosition[i].flag);
        }
      }

      this.show();
    };
  }

  function Food() {
    this.width = 15;
    this.height = 15;
    this.show = function () {
      let food = document.createElement("div");
      this.flag = food;
      this.x = Math.floor(Math.random() * 50);
      this.y = Math.floor(Math.random() * 25);

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

  const timer = setInterval("snake.run()", 500);
}
