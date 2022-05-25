
let pos = [0,1,2,
       3,4,5,
       6,7,8];

function clickx(p){
    p = parseInt(p);
    console.log("Here");
    if(p==0){
        const canvas = document.getElementById('f0');
        const context = canvas.getContext('2d');
        context.fillStyle = '#0F0';
	    context.font = 100 + 'px "Gill Sans"';
        context.fillText('◯',100,100);
    }
}