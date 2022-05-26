
let pos = [0,1,2,
       3,4,5,
       6,7,8];

let pin = [];
let cin = [];

function check(){
    for(i=0;i<9;i++){
        if(cin.includes(i) && cin.includes(i+1) && cin.includes(i+2) && (i==0 || i==3 || i==6)){
            window.alert("You lost -1");
            pos = [0,1,2,
                3,4,5,
                6,7,8];        
            pin = [];
            cin = [];
            location.reload();
        }
        else if(cin.includes(i) && cin.includes(i+3) && cin.includes(i+6) && (i==0 || i==1 || i==2)){
            window.alert("You lost -2");
            pos = [0,1,2,
                3,4,5,
                6,7,8];        
            pin = [];
            cin = [];
            location.reload();
        }
        else if(cin.includes(0) && cin.includes(4) && cin.includes(8)){
            window.alert("You lost -3");
            pos = [0,1,2,
                3,4,5,
                6,7,8];        
            pin = [];
            cin = [];
            location.reload();
        }
        else if(cin.includes(6) && cin.includes(4) && cin.includes(2)){
            window.alert("You lost -4");
            pos = [0,1,2,
                3,4,5,
                6,7,8];        
            pin = [];
            cin = [];
            location.reload();
        }
    }
}


function sysinp(){
    
    for(i=0;i<9;i++){
        if(pin.includes(i) && pin.includes(i+1) && pin.includes(i+2) && (i==0 || i==3 || i==6)){
            window.alert("You Won 1");
            pos = [0,1,2,
                3,4,5,
                6,7,8];        
            pin = [];
            cin = [];
            location.reload();
            return;
        }
        else if(pin.includes(i) && pin.includes(i+3) && pin.includes(i+6) && (i==0 || i==1 || i==2)){
            window.alert("You Won 2");
            pos = [0,1,2,
                3,4,5,
                6,7,8];        
            pin = [];
            cin = [];
            location.reload();
            return;
        }
        else if(pin.includes(0) && pin.includes(4) && pin.includes(8)){
            window.alert("You Won 3");
            pos = [0,1,2,
                3,4,5,
                6,7,8];        
            pin = [];
            cin = [];
            location.reload();
            return;
        }
        else if(pin.includes(6) && pin.includes(4) && pin.includes(2)){
            window.alert("You Won 4");
            pos = [0,1,2,
                3,4,5,
                6,7,8];        
            pin = [];
            cin = [];
            location.reload();
            return;
        }
        else if(pos.every(x=>x==-1)){
            window.alert("Its a Tie");
                pos = [0,1,2,
                    3,4,5,
                    6,7,8];        
                pin = [];
                cin = [];
                location.reload();
                return;
        }
    }

    for(i=0;i<9;i++){
        //comp
        if(cin.includes(i) && cin.includes(i+1) && (i==0 || i==3 || i==6) && !pin.includes(i+2)){
            eid = "c"+(i+3);
            document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
            pos[i+2] = -1;
            cin.push(i+2);
            setTimeout(check,500);
            return;
        }
        else if(cin.includes(i+2) && cin.includes(i+1) && (i==0 || i==3 || i==6) && !pin.includes(i)){
            eid = "c"+(i+1);
            document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
            pos[i] = -1;
            cin.push(i);
            setTimeout(check,500);
            return;
        }
        else if(cin.includes(i) && cin.includes(i+2) && (i==0 || i==3 || i==6) && !pin.includes(i+1)){
            eid = "c"+(i+2);
            document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
            pos[i+1] = -1;
            cin.push(i+1);
            setTimeout(check,500);
            return;
        }
        else if(cin.includes(i) && cin.includes(i+3) && (i==0 || i==1 || i==2) && !pin.includes(i+6)){
            eid = "c"+(i+7);
            document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
            pos[i+6] = -1;
            cin.push(i+6);
            setTimeout(check,500);
            return;
        }
        else if(cin.includes(i) && cin.includes(i+6) && (i==0 || i==1 || i==2) && !pin.includes(i+3)){
            eid = "c"+(i+4);
            document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
            pos[i+3] = -1;
            cin.push(i+3);
            setTimeout(check,500);
            return;
        }
        else if(cin.includes(i+6) && cin.includes(i+3) && (i==0 || i==1 || i==2) && !pin.includes(i)){
            eid = "c"+(i+1);
            document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
            pos[i] = -1;
            cin.push(i);
            setTimeout(check,500);
            return;
        }
        else if(cin.includes(0) && cin.includes(4) && !pin.includes(8)){
            document.getElementById('c9').style.backgroundImage = "url('./img/circ.png')";
            pos[8] = -1;
            cin.push(8);
            setTimeout(check,500);
            return;
        }
        else if(cin.includes(8) && cin.includes(4) && !pin.includes(0)){
            document.getElementById('c1').style.backgroundImage = "url('./img/circ.png')";
            pos[0] = -1;
            cin.push(0);
            setTimeout(check,500);
            return;
        }
        else if(cin.includes(0) && cin.includes(8) && !pin.includes(4)){
            document.getElementById('c5').style.backgroundImage = "url('./img/circ.png')";
            pos[4] = -1;
            cin.push(4);
            setTimeout(check,500);
            return;
        }
        else if(cin.includes(6) && cin.includes(4) && !pin.includes(2)){
            document.getElementById('c3').style.backgroundImage = "url('./img/circ.png')";
            pos[2] = -1;
            cin.push(2);
            setTimeout(check,500);
            return;
        }
        else if(cin.includes(2) && cin.includes(4) && !pin.includes(6)){
            document.getElementById('c7').style.backgroundImage = "url('./img/circ.png')";
            pos[6] = -1;
            cin.push(6);
            setTimeout(check,500);
            return;
        }
        else if(cin.includes(6) && cin.includes(2) && !pin.includes(4)){
            document.getElementById('c5').style.backgroundImage = "url('./img/circ.png')";
            pos[4] = -1;
            cin.push(4);
            setTimeout(check,500);
            return;
        }
        //user
        else if(pin.includes(i) && pin.includes(i+1) && (i==0 || i==3 || i==6) && !cin.includes(i+2)){
            eid = "c"+(i+3);
            document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
            pos[i+2] = -1;
            cin.push(i+2);
            setTimeout(check,500);
            return;
        }
        else if(pin.includes(i+2) && pin.includes(i+1) && (i==0 || i==3 || i==6) && !cin.includes(i)){
            eid = "c"+(i+1);
            document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
            pos[i] = -1;
            cin.push(i);
            setTimeout(check,500);
            return;
        }
        else if(pin.includes(i) && pin.includes(i+2) && (i==0 || i==3 || i==6) && !cin.includes(i+1)){
            eid = "c"+(i+2);
            document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
            pos[i+1] = -1;
            cin.push(i+1);
            setTimeout(check,500);
            return;
        }
        else if(pin.includes(i) && pin.includes(i+3) && (i==0 || i==1 || i==2) && !cin.includes(i+6)){
            eid = "c"+(i+7);
            document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
            pos[i+6] = -1;
            cin.push(i+6);
            setTimeout(check,500);
            return;
        }
        else if(pin.includes(i) && pin.includes(i+6) && (i==0 || i==1 || i==2) && !cin.includes(i+3)){
            eid = "c"+(i+4);
            document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
            pos[i+3] = -1;
            cin.push(i+3);
            setTimeout(check,500);
            return;
        }
        else if(pin.includes(i+6) && pin.includes(i+3) && (i==0 || i==1 || i==2) && !cin.includes(i)){
            eid = "c"+(i+1);
            document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
            pos[i] = -1;
            cin.push(i);
            setTimeout(check,500);
            return;
        }
        else if(pin.includes(0) && pin.includes(4) && !cin.includes(8)){
            document.getElementById('c9').style.backgroundImage = "url('./img/circ.png')";
            pos[8] = -1;
            cin.push(8);
            setTimeout(check,500);
            return;
        }
        else if(pin.includes(8) && pin.includes(4) && !cin.includes(0)){
            document.getElementById('c1').style.backgroundImage = "url('./img/circ.png')";
            pos[0] = -1;
            cin.push(0);
            setTimeout(check,500);
            return;
        }
        else if(pin.includes(0) && pin.includes(8) && !cin.includes(4)){
            document.getElementById('c5').style.backgroundImage = "url('./img/circ.png')";
            pos[4] = -1;
            cin.push(4);
            setTimeout(check,500);
            return;
        }
        else if(pin.includes(6) && pin.includes(4) && !cin.includes(2)){
            document.getElementById('c3').style.backgroundImage = "url('./img/circ.png')";
            pos[2] = -1;
            cin.push(2);
            setTimeout(check,500);
            return;
        }
        else if(pin.includes(2) && pin.includes(4) && !cin.includes(6)){
            document.getElementById('c7').style.backgroundImage = "url('./img/circ.png')";
            pos[6] = -1;
            cin.push(6);
            setTimeout(check,500);
            return;
        }
        else if(pin.includes(6) && pin.includes(2) && !cin.includes(4)){
            document.getElementById('c5').style.backgroundImage = "url('./img/circ.png')";
            pos[4] = -1;
            cin.push(4);
            setTimeout(check,500);
            return;
        }
    }
    
    let r = Math.floor(Math.random()*9);
    if(pos[r]==-1){
        sysinp();
    }
    else{
        eid = "c"+(r+1);
        document.getElementById(eid).style.backgroundImage = "url('./img/circ.png')";
        pos[r] = -1;
        cin.push(r);
    }
    setTimeout(check=>{
        for(i=0;i<9;i++){
            if(cin.includes(i) && cin.includes(i+1) && cin.includes(i+2) && (i==0 || i==3 || i==6)){
                window.alert("You lost -1");
                pos = [0,1,2,
                    3,4,5,
                    6,7,8];        
                pin = [];
                cin = [];
                location.reload();
            }
            else if(cin.includes(i) && cin.includes(i+3) && cin.includes(i+6) && (i==0 || i==1 || i==2)){
                window.alert("You lost -2");
                pos = [0,1,2,
                    3,4,5,
                    6,7,8];        
                pin = [];
                cin = [];
                location.reload();
            }
            else if(cin.includes(0) && cin.includes(4) && cin.includes(8)){
                window.alert("You lost -3");
                pos = [0,1,2,
                    3,4,5,
                    6,7,8];        
                pin = [];
                cin = [];
                location.reload();
            }
            else if(cin.includes(6) && cin.includes(4) && cin.includes(2)){
                window.alert("You lost -4");
                pos = [0,1,2,
                    3,4,5,
                    6,7,8];        
                pin = [];
                cin = [];
                location.reload();
            }
        }
    }
    ,500);
    
}

function clickx(p){
    p = parseInt(p);
    if(pos[p]==-1){
        console.log("Invalid Input detected");
    }
    else{
        eid = "c"+(p+1);
        document.getElementById(eid).style.backgroundImage = "url('./img/cros.png')";
        pos[p] = -1;
        pin.push(p);
        setTimeout(sysinp,500);
    }
    
}