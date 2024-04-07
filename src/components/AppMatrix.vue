<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const canvas = document.querySelector('canvas');
  const $ = canvas.getContext('2d');
  const W = (canvas.width = innerWidth);
  const H = (canvas.height = innerHeight);

  const str = '0 1 2 3 4 5 6 7 8 9 Z Y X W V U T S R Q P O N M L K J I H G F E D C B A ! @ # $ % ^ & * ( ) _ + - = { } [ ] | ; : , . / < > ? ~ ` ウ シ ツ カ ノ ハ マ ヤ ラ ワ ン';

  const matrix = str.split('');

  let font = 15;
  let col = W / font;
  let arr = [];

  for (let i = 0; i < col; i++) arr[i] = 1;

  function draw() {
    $.fillStyle = 'rgba(17, 24, 39, 0.05)';
    $.fillRect(0, 0, W, H);
    $.fillStyle = '#0f0';
    $.font = `${font}px monospace`;
    for (let i = 0; i < arr.length; i++) {
      let txt = matrix[Math.floor(Math.random() * matrix.length)];
      $.fillText(txt, i * font, arr[i] * font);
      if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
      arr[i]++;
    }
  }

  setInterval(draw, 50);
});
</script>

<template>
  <canvas class="fixed top-0 left-0 f-full h-full" style="z-index: -10"> </canvas>
</template>

<style scoped></style>
