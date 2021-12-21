// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress__filled').first();
let playBtn = $('.player__button').first();
let vol = $('#volume');
let rate = $('#playbackRate');



playBtn.click(function (){
    if(playBtn.text() === "►" ){
        player.trigger('play');
        playBtn.text("II");
    }
    else {
        player.trigger('pause');
        playBtn.text("►")
    }
})

player.get(0).addEventListener('timeupdate', function (){
    let t = (player.get(0).currentTime / 596.5) * 100;
    progress.css('width', t + "%")
    player.get(0).volume = vol.val();
    player.get(0).playbackRate = rate.val();
})

