var val = document.querySelectorAll('ytd-playlist-panel-video-renderer ytd-thumbnail-overlay-time-status-renderer span');
var second=0, minute = 0,hour=0;
var dummy = [];
val.forEach((e)=>{
	dummy = e.innerText.trim();
	if(dummy.length === 5 || dummy.length === 4){
		dummy = "00:" + dummy ;
	}
	dummy = dummy.split(':');
	hour += isNaN(parseInt(dummy[0])) ? 0 : parseInt(dummy[0]);
	minute += isNaN(parseInt(dummy[1])) ? 0 : parseInt(dummy[1]);
	second += isNaN(parseInt(dummy[2])) ? 0 : parseInt(dummy[2]);
});
hour = Math.floor(hour + minute/60 + second/3600);
minute = Math.floor((minute%60 + second/60)%60);
second = Math.floor(second%60);

console.log(`%c${hour} hour,  ${minute} minute, ${second} second`,'color: blue; font-size: 20px');