/**
 * Created by premysl on 4. 4. 2017.
 */


var wrap = document.getElementsByClassName('scroll-nav')[0]
var first_section = document.getElementById('count')
var my_window = $(window);
var banner = document.getElementById('banner')

my_window.on('scroll', function(e){
    if(this.scrollY < banner.offsetHeight){
        wrap.classList.remove('fix-header')
        first_section.style.marginTop = '0px'
    }
    if(this.scrollY > banner.offsetHeight){
        wrap.classList.add('fix-header')
        first_section.style.marginTop = wrap.clientHeight + 'px'
        document.getElementsByClassName('post')
    }
})

if(window.scrollY < banner.offsetHeight){
    wrap.classList.remove('fix-header')
    first_section.style.marginTop = '0px'
}
if(window.scrollY > banner.offsetHeight){
    wrap.classList.add('fix-header')
    first_section.style.marginTop = wrap.clientHeight + 'px'
    document.getElementsByClassName('post')
}




function countdown(countDate,id){

    dateNow = new Date();
    amount = countDate.getTime() - dateNow.getTime();
    delete dateNow;
    if(amount < 0){
        out = "<3";
    } else {
        days=0;hours=0;mins=0;secs=0;out="";
        amount = Math.floor(amount/1000);
        days=Math.floor(amount/86400);
        amount=amount%86400;
        hours=Math.floor(amount/3600);
        amount=amount%3600;
        mins=Math.floor(amount/60);
        amount=amount%60;
        secs=Math.floor(amount);

        days = zeroing(days);
        hours = zeroing(hours);
        mins = zeroing(mins);
        secs = zeroing(secs);


        document.getElementById('dny').innerHTML = days
        document.getElementById('hodiny').innerHTML = hours
        document.getElementById('minuty').innerHTML = mins
        document.getElementById('sekundy').innerHTML = secs
        if(days != "00")
            out += "<span class='number'>"+formatNumber(days) +"</span> <strong>" + (days == 1 ? "den" : (days < 5 ? "dny" : "dnů" )) +"</strong> ";
        out += "<span class='number'>"+formatNumber(hours) +"</span> <strong>" + (hours == 1 ? "hodina" : (hours < 5 && hours != 0 ? "hodiny" : "hodin" ))+"</strong> ";
        out += "<span class='number'>"+formatNumber(mins) +"</span> <strong>" + (mins == 1 ? "minuta" : (mins < 5 && mins != 0 ? "minuty" : "minut" ))+"</strong> ";
        out += "<span class='number '>"+formatNumber(secs) +"</span> <strong>" + (secs == 1 ? "sekunda" : (secs < 5 && secs != 0 ? "sekundy" : "sekund"))+"</strong>";

        setTimeout(function(){
            countdown(countDate,id)
        }, 1000);
    }
}
function zeroing(number) {
    if(number < 10) {
        number = "0"+number;
    }
    return number;
}
function formatNumber(number) {

    number = number.toString();
    //1
    number = number.replace("1", "<span>1</span>");
    return number;
}


window.onload=function(){
    countdown(new Date("Sat Aug 19 16:00:00 2017 GMT+1"), 'countdown');
};
