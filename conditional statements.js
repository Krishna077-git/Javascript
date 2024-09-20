//if,else//
mobile=45000
if(mobile<48000){
    console.log("it is iphone")
}else{
    console.log("no,its other brand")
}

//ternory//
age=25
msg= age<16?"you are minor" : "you are major";
console.log(msg)

//switch//
today = 6
switch (today) {
    case 1:
        console.log("today is sunday")
        break;
    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wednesday")
        break;
    case 5:
        console.log("thursday")
        break;
    case 6:
        console.log("friday")
        break;
    default:
        console.log("no data found")
}

 today=new Date().getDay();
 console.log(today)
 switch (today) {
    case 0:
        console.log("sunday")
        break;
    case 1:
        console.log("monday")
        break;
    case 2:
        console.log("tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("thursday")
        break;
    case 5:
        console.log("friday")
        break;
     case 6:
        console.log("saturday")
        break;

    default:
        console.log("no data found")
}


