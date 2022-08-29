document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider(".swiper");
  hero.start();
});

class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      effect: "coverflow",
      centeredSlides: true,
      slidesPerView: 1,
      speed: 1000,
    });
  }

  start(options = {}) {
    options = Object.assign(
      {
        delay: 4000,
        disableOnInteraction: false,
      },
      options
    );

    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();
  }
}

particlesJS("particles-js", {
  particles: {
    number: {
      value: 346, //この数値を変更すると星の数が増減できる
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle", //形状はcircleを指定
      stroke: {
        width: 0,
      },
    },
    opacity: {
      value: 1, //シェイプの透明度
      random: true, //シェイプの透明度をランダムにする
      anim: {
        enable: true, //シェイプの透明度をアニメーションさせる
        speed: 3, //シェイプの透明度をアニメーションさせる
        opacity_min: 0, //透明度の最小値０
        sync: false, //全てを同時にアニメーションさせない
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 120, //この数値を小さくするとゆっくりな動きになる
      direction: "none", //方向指定なし
      random: true, //動きはランダムに
      straight: true, //動きをとどめる
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
});
