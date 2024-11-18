const age = 20

if (age >= 10 && age < 20) {
    console.log("10代")
} else if(age < 30){
    console.log("20代")
} else if(age < 40 ){
    console.log("30代")
} else{
    console.log("その他")
}

for(var i = 1 ; i<=10 ; i ++){
    if( i == 3 ){
        continue;
    }
    if(i==7){
        break;
    }
    console.log (i);
}

function cal (x,y,z){
    console.log (x+y+z);
};
cal(10,5,8);