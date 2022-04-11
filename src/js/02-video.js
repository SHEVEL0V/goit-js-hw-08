import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const playerSetTine = 0 + localStorage.getItem('videoplayer-current-time');

localStorage.setItem('videoplayer-current-time', 0);
player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000),
);

player.setCurrentTime(playerSetTine);
