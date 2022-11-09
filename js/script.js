const watch = document.querySelector("#watch");
let milliesecond = 0;
let timer;

const startwatch = () =>{
    watch.classList.remove('paused')
    clearInterval(timer);
    timer= setInterval(()=>{
        milliesecond += 10;
        let dataTimer = new Date(milliesecond)
        watch.innerHTML=
            ('0'+dataTimer.getUTCHours()).slice(-2) + ':' +
            ('0'+dataTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0'+dataTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0'+dataTimer.getUTCMilliseconds()).slice(-3,-1);
    },10);
};

const pauseWatch = () => {
    watch.classList.add('paused')
    clearInterval(timer)
};

const resetWatch = () =>{
    watch.classList.remove('paused');
    clearInterval(timer);
    milliesecond= 0;
    watch.innerHTML = '00:00:00:00';
};

document.addEventListener('click',(e) =>{
    const element = e.target;
    if(element.id==='start') startwatch();
    if(element.id==='pause')pauseWatch();
    if(element.id==='reset') resetWatch();
})
