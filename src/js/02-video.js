import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('.video');
const player = new Player(video);
const playerSetTine = 0 + localStorage.getItem('videoplayer-current-time');

localStorage.setItem('videoplayer-current-time', 0);

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000),
);

player.setCurrentTime(playerSetTine);
