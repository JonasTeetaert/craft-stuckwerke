class AudioSample {
  constructor(node, audioSamples) {
    if (!node) return;
    this.node = node;
    this.audio = node.querySelector('audio');
    this.canvas = node.querySelector('canvas');
    this.control = node.querySelector('button');
    this.audioSamples = audioSamples;
    this.isStarted = false;
    this.control.addEventListener('click', this.toggle.bind(this));
    this.init();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = 263;
    this.ctx = this.canvas.getContext("2d");
    this.icon = this.control.querySelector('.icon');
    this.word = this.control.querySelector('.word');

    // scroll
    this.footer = document.querySelector('footer');
    const mq = window.matchMedia('(min-width: 992px');
    if (mq.matches) {
      document.addEventListener('scroll', this.scroll.bind(this));
    }
  }

  scroll() {
    const scrollPos = document.documentElement.scrollTop;
    const rect = this.footer.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      this.canvas.style.transform = `translateY(${-(window.innerHeight - rect.top)}px)`;
    }
  }

  toggle(e) {
    e.preventDefault();
    if (!this.isStarted) {
      this.start();
      this.isStarted = true;
    }
    if (this.node.classList.contains('playing')) {
      this.pause();
    } else {
      this.play();
    }
  }

  stop() {
    this.audioSamples.forEach(item => item.pause());
  }

  pause() {
    this.node.classList.remove('playing');
    this.icon.classList.remove('icon-pause');
    this.icon.classList.add('icon-play');
    this.word.innerHTML = 'Play';
    this.audio.pause();
  }

  play() {
    this.stop();
    this.node.classList.add('playing');
    this.icon.classList.remove('icon-play');
    this.icon.classList.add('icon-pause');
    this.word.innerHTML = 'Pause';
    this.audio.play();
  }

  start() {
    var context = new AudioContext();
    var src = context.createMediaElementSource(this.audio);
    var analyser = context.createAnalyser();

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = this.canvas.width;
    var HEIGHT = this.canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;
    var ctx = this.ctx;

    function renderFrame() {
      requestAnimationFrame(renderFrame.bind(this));

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];

        // var r = barHeight + (25 * (i / bufferLength));
        // var g = 250 * (i / bufferLength);
        // var b = 50;

        ctx.fillStyle = "#06044d";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    this.audio.play();
    renderFrame();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // const audioPlayer = new AudioPlayer();
  const audioSamples = document.querySelectorAll('.m-album__sample');
  let objects = [];
  audioSamples.forEach(sample => {
    objects.push(new AudioSample(sample, objects));
  });
});