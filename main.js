let sec2=30;
let startTimer;
let idno = 0
let idno1 = 0;
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let date =new Date()
let year = date.getFullYear();
let mon = date.getMonth()
mon = mon<10?"0"+mon:mon;
let datee = date.getDate();
let no = String(year)+String(mon)+String(datee);
idno1 = no + 0;
console.log(idno1)
let p1 =  document.getElementById('p1')
let p2 =  document.getElementById('p2')
let p3 =  document.getElementById('p3')
let numbers1 = document.getElementById("numbers1");
let numbers2 = document.getElementById("numbers2");
let numbers3 = document.getElementById("numbers3");
let numbers4 = document.getElementById("numbers4");
let numbers5 = document.getElementById("numbers5");
let numbers6 = document.getElementById("numbers6");
let numbers7 = document.getElementById("numbers7");
let numbers8 = document.getElementById("numbers8");
let numbers9 = document.getElementById("numbers9");
let numbers10 = document.getElementById("numbers10");
const messageBox = document.getElementById('messageBox');
let message = document.getElementById('message');
let cancel = document.getElementById('cancel');


function joinColor(event){
    let btnId = event.target.innerText;
    message.innerText = btnId;
    console.log(btnId);
    messageBox.style.display = 'block';
}

cancel.addEventListener('click',()=>{
    messageBox.style.display = 'none';
})



startTimer=setInterval(()=>{
    if(sec2==0){
        idno+=1;
        idno1 = no + idno;
        setTimeout(()=>{
           
            sec2=30;
        },500)
        
    }

    const timeString = sec2.toString().padStart(2,'0');
    document.getElementById('sec2').innerText = timeString.charAt(1);
    document.getElementById('sec1').innerText = timeString.charAt(0);
    sec2--;

    document.getElementById('idNo').innerHTML=idno1;
},1000);


function disable(){
    btn1.disabled = true;
    btn1.removeEventListener('click',joinColor)
    btn2.removeEventListener('click',joinColor)
    btn3.removeEventListener('click',joinColor)
    numbers1.removeEventListener('click',joinColor)
    numbers2.removeEventListener('click',joinColor)
    numbers3.removeEventListener('click',joinColor)
    numbers4.removeEventListener('click',joinColor)
    numbers5.removeEventListener('click',joinColor)
    numbers6.removeEventListener('click',joinColor)
    numbers7.removeEventListener('click',joinColor)
    numbers8.removeEventListener('click',joinColor)
    numbers9.removeEventListener('click',joinColor)
    numbers10.removeEventListener('click',joinColor)
    changeColor()
    setTimeout(enable,10500)
}

function enable(){
    btn1.disabled = false;
    btn1.addEventListener('click',joinColor);
    btn2.addEventListener('click',joinColor);
    btn3.addEventListener('click',joinColor);
    btn1.addEventListener('click',joinColor);
    numbers1.addEventListener('click',joinColor)
    numbers2.addEventListener('click',joinColor)
    numbers3.addEventListener('click',joinColor)
    numbers4.addEventListener('click',joinColor)
    numbers5.addEventListener('click',joinColor)
    numbers6.addEventListener('click',joinColor)
    numbers7.addEventListener('click',joinColor)
    numbers8.addEventListener('click',joinColor)
    numbers9.addEventListener('click',joinColor)
    numbers10.addEventListener('click',joinColor)
    backToColor()
    setTimeout(disable,20500);
    
}

enable();
let choice = ['0','1','2','3','4','5','6','7','8','9']

let pp = new Set();
let join = document.getElementById("join");
let join1 = document.getElementById("selected")
let clicked = false;
join.addEventListener('click',()=>{
    console.log(pp)
    if(pp.has(`${idno1}`)){
        alert("only one time");
        messageBox.style.display = 'none';
    }
    else{
        let jg = 'Join Green';
        let jv = 'Join Violet';
        let jr = 'Join Red';
        // console.log(jg.length);
        // console.log(message.innerText);
        // console.log(message.innerText.length);
        // console.log(typeof(message.innerText));
        // console.log(message.innerText === jg)
        let m = message.innerText
        console.log(typeof(m))
        console.log("flase",choice.includes(message.innerText))

        if(message.innerText == jg){
            div1 = document.createElement('div');
            div1.id = "div1";
            div1.className = "row row-cols-4";
            join1.insertBefore(div1,join1.firstChild);


            div2 = document.createElement('div');
            div2.id = "div2";
            div2.className = "col";
            
            div2.innerHTML=`${idno1}`;
            div1.appendChild(div2);
            div2.id = "p-2"
            div3 = document.createElement('div');
            div3.id="p-2";
        
            div4 = document.createElement('div');
            div4.classList.add("resultDiv");
            div4.id = "div4";
            div4.style.backgroundColor = "green";
            div4.style.color = "white";
            div4.innerHTML = "G";
        
            div1.appendChild(div3);
            div3.appendChild(div4);
            clicked = true;
            pp.add( `${idno1}`);
            messageBox.style.display = 'none';
        }
        if(message.innerText == jv){
            div1 = document.createElement('div');
            div1.id = "div1";
            div1.className = "row row-cols-4";
            join1.insertBefore(div1,join1.firstChild);


            div2 = document.createElement('div');
            div2.id = "p-2";
            div2.className = "col";
        
            div2.innerHTML=`${idno1}`;
            div1.appendChild(div2);

            div3 = document.createElement('div');
            div3.id="p-2";
        
            div4 = document.createElement('div');
            div4.classList.add("resultDiv");
            div4.id = "div4";
            div4.style.backgroundColor = " rgb(103, 22, 196)";
            div4.style.color = "white";
            div4.innerHTML = "V";
        
            div1.appendChild(div3);
            div3.appendChild(div4);
            clicked = true;
            pp.add( `${idno1}`);
            messageBox.style.display = 'none';
        }
        if(message.innerText == jr){
            div1 = document.createElement('div');
            div1.id = "div1";
            div1.className = "row row-cols-4";
            join1.insertBefore(div1,join1.firstChild);


            div2 = document.createElement('div');
            div2.className = "col";
        
            div2.innerHTML=`${idno1}`;
            div1.appendChild(div2);
            div2.id = "p-2";

            div3 = document.createElement('div');
            div3.id="p-2";

            div4 = document.createElement('div');
            div4.classList.add("resultDiv");
            div4.id = "div4";
            div4.style.backgroundColor = "red";
            div4.style.color = "white";
            div4.innerHTML = "R";
        
            div1.appendChild(div3);
            div3.appendChild(div4);
            clicked = true;
            pp.add( `${idno1}`);
            messageBox.style.display = 'none';
        }
        if(choice.includes(m)){
            div1 = document.createElement('div');
            div1.id = "div1";
            div1.className = "row row-cols-4";
            join1.insertBefore(div1,join1.firstChild);


            div2 = document.createElement('div');
            div2.id = "p-2";
            div2.className = "col";
        
            div2.innerHTML=`${idno1}`;
            div1.appendChild(div2);

            div3 = document.createElement('div');
            div3.id="p-2";
        
            div4 = document.createElement('div');
            div4.classList.add("resultDiv");
            div4.id = "div4";
            div4.style.backgroundColor = "rgb(22, 21, 21)";
            div4.style.color = "white";
            div4.innerHTML = m;
        
            div1.appendChild(div3);
            div3.appendChild(div4);
            clicked = true;
            pp.add( `${idno1}`);
            messageBox.style.display = 'none';
        }
        else{
            console.log("noooo")
        }


        
    }

})

function num(){
    alert("num1")
}

function changeColor(){
    p1.style.backgroundColor = "gray"
    p2.style.backgroundColor = "gray"
    p3.style.backgroundColor = "gray"
    numbers1.style.backgroundColor = "gray"
    numbers2.style.backgroundColor = "gray"
    numbers3.style.backgroundColor = "gray"
    numbers4.style.backgroundColor = "gray"
    numbers5.style.backgroundColor = "gray"
    numbers6.style.backgroundColor = "gray"
    numbers7.style.backgroundColor = "gray"
    numbers8.style.backgroundColor = "gray"
    numbers9.style.backgroundColor = "gray"
    numbers10.style.backgroundColor = "gray"

    numbers1.style.border = "gray"
    numbers2.style.border = "gray"
    numbers3.style.border = "gray"
    numbers4.style.border = "gray"
    numbers5.style.border = "gray"
    numbers6.style.border = "gray"
    numbers7.style.border = "gray"
    numbers8.style.border = "gray"
    numbers9.style.border = "gray"
    numbers10.style.border = "gray"

}

function backToColor(){
    p2.style.backgroundColor = "rgb(103, 22, 196)"
    p1.style.backgroundColor = "green"
    p3.style.backgroundColor = "red"

    numbers1.style.backgroundColor = "#c6e5ff"
    numbers2.style.backgroundColor = "#c6e5ff"
    numbers3.style.backgroundColor = "#c6e5ff"
    numbers4.style.backgroundColor = "#c6e5ff"
    numbers5.style.backgroundColor = "#c6e5ff"
    numbers6.style.backgroundColor = "#c6e5ff"
    numbers7.style.backgroundColor = "#c6e5ff"
    numbers8.style.backgroundColor = "#c6e5ff"
    numbers9.style.backgroundColor = "#c6e5ff"
    numbers10.style.backgroundColor = "#c6e5ff"

    numbers1.style.border = "1px solid #96C9F4"
    numbers2.style.border = "1px solid #96C9F4"
    numbers3.style.border = "1px solid #96C9F4"
    numbers4.style.border = "1px solid #96C9F4"
    numbers5.style.border = "1px solid #96C9F4"
    numbers6.style.border = "1px solid #96C9F4"
    numbers7.style.border = "1px solid #96C9F4"
    numbers8.style.border = "1px solid #96C9F4"
    numbers9.style.border = "1px solid #96C9F4"
    numbers10.style.border = "1px solid #96C9F4"

}




let r1 = document.getElementById('r1');
let b = 0;
let count = 0;
let v = 0;
let winColor = document.getElementById('winColor');
let loseColor = document.getElementById('loseColor')

function check(){
    setInterval(()=>{
        a = Math.floor(Math.random()*10);
        if(a%2==0){
            b += 1;
            if(count == 30){
                while(r1.firstChild){
                    r1.removeChild(r1.firstChild)
                }
                count = 0;
            }

            if((count>10 && count<14) || (count>4 && count<7)){
                if(v==0){
                    if(a==0){
                        let prediction = document.createElement('div');
                        prediction.id = "pre1";
                        r1.appendChild(prediction);
                        prediction.classList.add("pre1");


                        let resultDiv =document.createElement('div');
                        resultDiv.id="rv";
                        resultDiv.style.background = "linear-gradient(to right , red 50% , rgb(103, 22, 196) 50%) ";
                        resultDiv.innerText += ` ${a}`;
                        prediction.appendChild(resultDiv);



                        let number = document.createElement('div');
                        number.innerText = ` ${idno-1}`;
                        number.id="period";
                        number.classList.add("period")
                        prediction.appendChild(number);
                        count += 1
                        v += 1;

                        if(clicked == true){
                            div5 = document.createElement('div');
                            div5.id="p-2";

                            div6 = document.createElement('div');
                            div6.id = "rv";
                            div6.style.background = "linear-gradient(to right , red 50% , rgb(103, 22, 196) 50%) ";
                            div6.innerHTML = a;
                            div1.appendChild(div5);
                            div5.appendChild(div6);

                            div7 = document.createElement('div');
                            div7.id = "p-2";
                            div7.style.fontWeight ="bold";
                            div1.appendChild(div7);

                            let sId = document.getElementById("div4").innerText;
                            
                            if(sId == "G"){
                                div7.innerHTML = "WIN";
                                div7.style.color = "green";
                               
                                winResult = document.createElement('div')
                                winResult.id = "rv";
                                winResult.style.background = "linear-gradient(to right , red 50% , rgb(103, 22, 196) 50%) ";
                                winResult.innerHTML = a;
                                winColor.appendChild(winResult);
                                win();
                                setTimeout(()=>{
                                    winColor.removeChild(winResult);
                                },3000)
                            }
                            else if(resultDiv.innerText == sId){
                                div7.innerHTML = "WIN";
                                div7.style.color = "green";
                                
                                winResult = document.createElement('div')
                                winResult.id = "rv";
                                winResult.style.background = "linear-gradient(to right , red 50% , rgb(103, 22, 196) 50%) ";
                                winResult.innerHTML = a;
                                winColor.appendChild(winResult);
                                win();
                                setTimeout(()=>{
                                    winColor.removeChild(winResult);
                                },3000)

                            }
                            else{
                                div7.innerHTML = "LOSE";
                                div7.style.color = "red";
                                loseResult = document.createElement('div');
                                loseResult.id = "rv";
                                loseResult.style.background = "linear-gradient(to right , red 50% , rgb(103, 22, 196) 50%) ";
                                loseResult.innerHTML = a;
                                loseColor.appendChild(loseResult);
                                lose();
                                setTimeout(()=>{
                                    loseColor.removeChild(loseResult);
                                },3000)
                            }
                            clicked = false;
                        }


                    }
                    else{
                        let prediction = document.createElement('div');
                        prediction.id = "pre1";
                        r1.appendChild(prediction);
                        prediction.classList.add("pre1");
        
        
                        let resultDiv =document.createElement('div');
                        resultDiv.id="resultdiv";
                        resultDiv.style.backgroundColor = "red"
                        resultDiv.innerText += ` ${a}`;
                        prediction.appendChild(resultDiv);
        
        
        
                        let number = document.createElement('div');
                        number.innerText = ` ${idno-1}`;
                        number.id="period";
                        number.classList.add("period")
                        prediction.appendChild(number);
                        count += 1;
                        if(clicked == true){
                            div5 = document.createElement('div');
                            div5.id="p-2";

                            div6 = document.createElement('div');
                            div6.id = "rv";
                            div6.style.background = "red"
                            div6.innerHTML = a;
                            div1.appendChild(div5);
                            div5.appendChild(div6);

                            div7 = document.createElement('div');
                            div7.id = "p-2";
                            div7.style.fontWeight ="bold";
                            div1.appendChild(div7);

            
                            let sId = document.getElementById("div4").innerText;
                            console.log(sId);
                            
                            if(sId == "R"){
                                div7.innerHTML = "WIN";
                                div7.style.color = "green";
                               
                                winResult = document.createElement('div')
                                winResult.id = "rv";
                                winResult.style.background = "green";
                                winResult.innerHTML = a;
                                winColor.appendChild(winResult);
                                win();
                                setTimeout(()=>{
                                    winColor.removeChild(winResult);
                                },3000)
                                
                            }
                            else if(resultDiv.innerText == sId){
                                div7.innerHTML = "WIN";
                                div7.style.color = "green";
                                
                                winResult = document.createElement('div')
                                winResult.id = "rv";
                                winResult.style.background = "green";
                                winResult.innerHTML = a;
                                winColor.appendChild(winResult);
                                win();
                                setTimeout(()=>{
                                    winColor.removeChild(winResult);
                                },3000)
                            }
                            else{
                                div7.innerHTML = "LOSE";
                                div7.style.color = "red";
                                loseResult = document.createElement('div');
                                loseResult.id = "rv";
                                loseResult.style.background = "red";
                                loseResult.innerHTML = a;
                                loseColor.appendChild(loseResult);
                                lose();
                                setTimeout(()=>{
                                    loseColor.removeChild(loseResult);
                                },3000)
                            }
                            clicked = false;
                        }
                    }
                }
            else{
                    let prediction = document.createElement('div');
                    prediction.id = "pre1";
                    r1.appendChild(prediction);
                    prediction.classList.add("pre1");
    
    
                    let resultDiv =document.createElement('div');
                    resultDiv.id="resultdiv";
                    resultDiv.style.backgroundColor = "red"
                    resultDiv.innerText += ` ${a}`;
                    prediction.appendChild(resultDiv);
    
    
    
                    let number = document.createElement('div');
                    number.innerText = ` ${idno-1}`;
                    number.id="period";
                    number.classList.add("period")
                    prediction.appendChild(number);
    
                    count += 1;

                    if(clicked == true){
                        div5 = document.createElement('div');
                        div5.id="p-2";
                       
                        div6 = document.createElement('div');
                        div6.id = "rv";
                        div6.style.background = "red";
                        div6.innerHTML = a;
                        div1.appendChild(div5);
                        div5.appendChild(div6);


                        div7 = document.createElement('div');
                        div7.id ="p-2";
                        div7.style.fontWeight ="bold";
                        div1.appendChild(div7);


                        let sId = document.getElementById("div4").innerText;
                        console.log(sId);

                            
                            
                        if(sId == "R"){
                            div7.innerHTML = "WIN";
                            div7.style.color = "green";
                           
                            winResult = document.createElement('div')
                            winResult.id = "rv";
                            winResult.style.background = "red";
                            winResult.innerHTML = a;
                            winColor.appendChild(winResult);
                            win();
                            setTimeout(()=>{
                                winColor.removeChild(winResult);
                            },3000)
                        }
                        else if(resultDiv.innerText == sId){
                            div7.innerHTML = "WIN";
                            div7.style.color = "green";

                            winResult = document.createElement('div')
                            winResult.id = "rv";
                            winResult.style.background = "red";
                            winResult.innerHTML = a;
                            winColor.appendChild(winResult);
                            win();
                            setTimeout(()=>{
                                winColor.removeChild(winResult);
                            },3000)
                        }
                        else{
                            div7.innerHTML = "LOSE";
                            div7.style.color = "red";
                            loseResult = document.createElement('div');
                            loseResult.id = "rv";
                            loseResult.style.background = "red";
                            loseResult.innerHTML = a;
                            loseColor.appendChild(loseResult);
                            lose();
                            setTimeout(()=>{
                                loseColor.removeChild(loseResult);
                            },3000)
                        }
                        clicked = false;

                    }
                }
            }


            else{
                let prediction = document.createElement('div');
                prediction.id = "pre1";
                r1.appendChild(prediction);
                prediction.classList.add("pre1");


                let resultDiv =document.createElement('div');
                resultDiv.id="resultdiv";
                resultDiv.style.backgroundColor = "red"
                resultDiv.innerText += ` ${a}`;
                prediction.appendChild(resultDiv);



                let number = document.createElement('div');
                number.innerText = ` ${idno-1}`;
                number.id="period";
                number.classList.add("period")
                prediction.appendChild(number);

                count += 1;

                if(clicked == true){
                    div5 = document.createElement('div');
                    div5.id="p-2";

                    div6 = document.createElement('div');
                    div6.id = "rv";
                    div6.style.background = "red";
                    div6.innerHTML = a;
                    div1.appendChild(div5);
                    div5.appendChild(div6);


                    div7 = document.createElement('div');
                    div7.id = "p-2";
                    div7.style.fontWeight ="bold";
                    div1.appendChild(div7);


                    let sId = document.getElementById("div4").innerText;
                    
                    if(sId == "R"){
                        div7.innerHTML = "WIN";
                        div7.style.color = "green";
                     
                        winResult = document.createElement('div')
                        winResult.id = "rv";
                        winResult.style.background = "red";
                        winResult.innerHTML = a;
                        winColor.appendChild(winResult);
                        win();
                        setTimeout(()=>{
                            winColor.removeChild(winResult);
                        },3000)
                    }
                    else if(resultDiv.innerText == sId){
                        div7.innerHTML = "WIN";
                        div7.style.color = "green";

                        winResult = document.createElement('div')
                        winResult.id = "rv";
                        winResult.style.background = "red";
                        winResult.innerHTML = a;
                        winColor.appendChild(winResult);
                        win();
                        setTimeout(()=>{
                            winColor.removeChild(winResult);
                        },3000)

                    }
                    else{
                        div7.innerHTML = "LOSE";
                        div7.style.color = "red";

                        loseResult = document.createElement('div');
                        loseResult.id = "rv";
                        loseResult.style.background = "red";
                        loseResult.innerHTML = a;
                        loseColor.appendChild(loseResult);
                        lose();
                        setTimeout(()=>{
                            loseColor.removeChild(loseResult);
                        },3000)
                    }
                    clicked = false;

                }
            }
        }

        // Green
        else{
            b += 1;
            if(count == 30){
                while(r1.firstChild){
                    r1.removeChild(r1.firstChild);
                }
                count = 0;
            }
            if(count>15 && count<21){
                if(v==0){
                    if(a==5){
                        let prediction = document.createElement('div');
                        prediction.id = "pre1";
                        r1.appendChild(prediction);
                        prediction.classList.add("pre1");


                        let resultDiv =document.createElement('div');
                        resultDiv.id="rv";
                        resultDiv.style.background = "linear-gradient(to right , green 50% , rgb(103, 22, 196) 50%) ";
                        // resultDiv.classList.add("resultdiv");
                        resultDiv.innerText += ` ${a}`;
                        prediction.appendChild(resultDiv);



                        let number = document.createElement('div');
                        number.innerText = ` ${idno-1}`;
                        number.id="period";
                        number.classList.add("period");
                        prediction.appendChild(number);
                        count += 1;
                        v +=1;
                        
                        
                        if(clicked == true){
                            div5 = document.createElement('div');
                            div5.id="p-2";


                            div6 = document.createElement('div');
                            div6.id = "rv";
                            div6.style.background = "linear-gradient(to right , green 50% , rgb(103, 22, 196) 50%) ";
                            div6.innerHTML = a;
                            div1.appendChild(div5);
                            div5.appendChild(div6);

                            div7 = document.createElement('div');
                            div7.id = "p-2";
                            div7.style.fontWeight ="bold";
                            div1.appendChild(div7);

                            let sId = document.getElementById("div4").innerText;
                            
                            if(sId == "G"){
                                div7.innerHTML = "WIN";
                                div7.style.color = "green";
                               
                                winResult = document.createElement('div')
                                winResult.id = "rv";
                                winResult.style.background = "linear-gradient(to right , green 50% , rgb(103, 22, 196) 50%)";
                                winResult.innerHTML = a;
                                winColor.appendChild(winResult);
                                win();
                                setTimeout(()=>{
                                    winColor.removeChild(winResult);
                                },3000)
                            }
                            else if(resultDiv.innerText == sId){
                                div7.innerHTML = "WIN";
                                div7.style.color = "green";
                               
                                winResult = document.createElement('div')
                                winResult.id = "rv";
                                winResult.style.background = "linear-gradient(to right , green 50% , rgb(103, 22, 196) 50%)";
                                winResult.innerHTML = a;
                                winColor.appendChild(winResult);
                                win();
                                setTimeout(()=>{
                                    winColor.removeChild(winResult);
                                },3000)
                            }
                            else{
                                div7.innerHTML = "LOSE";

                                div7.style.color = "red";
                                loseResult = document.createElement('div');
                                loseResult.id = "rv";
                                loseResult.style.background = "linear-gradient(to right , green 50% , rgb(103, 22, 196) 50%)";
                                loseResult.innerHTML = a;
                                loseColor.appendChild(loseResult);
                                lose();
                                setTimeout(()=>{
                                    loseColor.removeChild(loseResult);
                                },3000)
                            }
                            clicked = false;
                        }

                    }
                    else{
                        let prediction = document.createElement('div');
                        prediction.id = "pre1";
                        r1.appendChild(prediction);
                        prediction.classList.add("pre1");
        
        
                        let resultDiv =document.createElement('div');
                        resultDiv.id="resultdiv";
                        // resultDiv.classList.add("color");
                        resultDiv.style.backgroundColor = "green"
                        resultDiv.innerText += ` ${a}`;
                        prediction.appendChild(resultDiv);
        
        
                        let number = document.createElement('div');
                        number.innerText = ` ${idno-1}`;
                        number.id="period";
                        number.classList.add("period")
                        prediction.appendChild(number);
        
                        count += 1;
                        if(clicked == true){
                            div5 = document.createElement('div');
                            div5.id="p-2";

                            div6 = document.createElement('div');
                            div6.id = "rv";
                            div6.style.background = "green";
                            div6.innerHTML = a;
                            div1.appendChild(div5);
                            div5.appendChild(div6);

                            div7 = document.createElement('div');
                            div7.id = "p-2";
                            div7.style.fontWeight ="bold";
                            div1.appendChild(div7);

                            let sId = document.getElementById("div4").innerText;
                            
                            if(sId == "G"){
                                div7.innerHTML = "WIN";
                                div7.style.color = "green";

                                winResult = document.createElement('div')
                                winResult.id = "rv";
                                winResult.style.background = "green";
                                winResult.innerHTML = a;
                                winColor.appendChild(winResult);
                                win();
                                setTimeout(()=>{
                                    winColor.removeChild(winResult);
                                },3000)

                            }
                            else if(resultDiv.innerText == sId){
                                div7.innerHTML = "WIN";
                                div7.style.color = "green";

                                winResult = document.createElement('div')
                                winResult.id = "rv";
                                winResult.style.background = "green";
                                winResult.innerHTML = a;
                                winColor.appendChild(winResult);
                                win();
                                setTimeout(()=>{
                                    winColor.removeChild(winResult);
                                },3000)
                            }
                            else{
                                div7.innerHTML = "LOSE";
                                div7.style.color = "red";

                                loseResult = document.createElement('div');
                                loseResult.id = "rv";
                                loseResult.style.background = "green";
                                loseResult.innerHTML = a;
                                loseColor.appendChild(loseResult);
                                lose();
                                setTimeout(()=>{
                                    loseColor.removeChild(loseResult);
                                },3000)
                            }
                            clicked = false;
                        }



                    }
                }
                else{
                    let prediction = document.createElement('div');
                    prediction.id = "pre1";
                    r1.appendChild(prediction);
                    prediction.classList.add("pre1");
    
    
                    let resultDiv =document.createElement('div');
                    resultDiv.id="resultdiv";
                    resultDiv.style.backgroundColor = "green"
                    resultDiv.innerText += ` ${a}`;
                    prediction.appendChild(resultDiv);
    
    
                    let number = document.createElement('div');
                    number.innerText = ` ${idno-1}`;
                    number.id="period";
                    number.classList.add("period")
                    prediction.appendChild(number);
    
                    count += 1;
                    if(clicked == true){
                        div5 = document.createElement('div');
                        div5.id="p-2";

                        div6 = document.createElement('div');
                        div6.id = "rv";
                        div6.style.background = "green";
                        div6.innerHTML = a;
                       
                        div1.appendChild(div5);
                        div5.appendChild(div6);

                        div7 = document.createElement('div');
                        div7.id = "p-2";
                        div7.style.fontWeight ="bold";
                        div1.appendChild(div7);

                        let sId = document.getElementById("div4").innerText;
                        
                        if(sId == "G"){
                            div7.innerHTML = "WIN";
                            div7.style.color = "green";

                            winResult = document.createElement('div')
                            winResult.id = "rv";
                            winResult.style.background = "green";
                            winResult.innerHTML = a;
                            winColor.appendChild(winResult);
                            win();
                            setTimeout(()=>{
                                winColor.removeChild(winResult);
                            },3000)
                            
                        }
                        else if(resultDiv.innerText == sId){
                            div7.innerHTML = "WIN";
                            div7.style.color = "green";

                            winResult = document.createElement('div')
                            winResult.id = "rv";
                            winResult.style.background = "green";
                            winResult.innerHTML = a;
                            winColor.appendChild(winResult);
                            win();
                            setTimeout(()=>{
                                winColor.removeChild(winResult);
                            },3000)
                        }
                        else{
                            div7.innerHTML = "LOSE";
                            div7.style.color = "red";

                            loseResult = document.createElement('div');
                            loseResult.id = "rv";
                            loseResult.style.background = "green";
                            loseResult.innerHTML = a;
                            loseColor.appendChild(loseResult);
                            lose();
                            setTimeout(()=>{
                                loseColor.removeChild(loseResult);
                            },3000)
                        }
                        clicked = false;
                    }



                }
            }


            else{
                let prediction = document.createElement('div');
                prediction.id = "pre1";
                r1.appendChild(prediction);
                prediction.classList.add("pre1");


                let resultDiv =document.createElement('div');
                resultDiv.id="resultdiv";
                // resultDiv.classList.add("color");
                resultDiv.style.backgroundColor = "green"
                resultDiv.innerText += ` ${a}`;
                prediction.appendChild(resultDiv);


                let number = document.createElement('div');
                number.innerText = ` ${idno-1}`;
                number.id="period";
                number.classList.add("period")
                prediction.appendChild(number);

                count += 1;
                if(clicked == true){
                    div5 = document.createElement('div');
                    div5.id="p-2";

                    div6 = document.createElement('div');
                    div6.id = "rv";
                    div6.style.background = "green";
                    div6.innerHTML = a;
                    
                    div1.appendChild(div5);
                    div5.appendChild(div6);

                    div7 = document.createElement('div');
                    div7.id = "p-2";
                    div7.style.fontWeight ="bold";
                    div1.appendChild(div7);

                    let sId = document.getElementById("div4").innerText;
                    
                    if(sId == "G"){
                        div7.innerHTML = "WIN";
                        div7.style.color = "green";

                        winResult = document.createElement('div')
                        winResult.id = "rv";
                        winResult.style.background = "green";
                        winResult.innerHTML = a;
                        winColor.appendChild(winResult);
                        win();
                        setTimeout(()=>{
                            winColor.removeChild(winResult);
                        },3000)
                    }
                    else if(resultDiv.innerText == sId){
                        div7.innerHTML = "WIN";
                        div7.style.color = "green";

                        winResult = document.createElement('div');
                        winResult.id = "rv";
                        winResult.style.background = "green";
                        winResult.innerHTML = a;
                        winColor.appendChild(winResult);
                        win();
                        setTimeout(()=>{
                            winColor.removeChild(winResult);
                        },3000)
                    }
                    else{
                        div7.innerHTML = "LOSE";
                        div7.style.color = "red";

                        loseResult = document.createElement('div');
                        loseResult.id = "rv";
                        loseResult.style.background = "green";
                        loseResult.innerHTML = a;
                        loseColor.appendChild(loseResult);
                        lose();
                        setTimeout(()=>{
                            loseColor.removeChild(loseResult);
                        },3000)
                        
                    }
                    clicked = false;
                }

            }
        }
        v = 0;
    },31000)
}

check()

let winBox = document.getElementById('winBox');

function win(){
        winBox.style.display = 'block';
        setTimeout(function() {
            winBox.style.display = 'none';
        }, 3000);
   
}

let loseBox = document.getElementById('loseBox');

function lose(){
    loseBox.style.display = 'block';
    setTimeout(function() {
        loseBox.style.display = 'none';
    }, 3000);

}

let ruleDiv = document.getElementById("rule")
let ruleBox = document.getElementById('ruleBox');

function rule(){
    ruleBox.style.display = 'block';
    setTimeout(function() {
        ruleBox.style.display = 'none';
    }, 3000);
}

ruleDiv.addEventListener('click',()=>{
    rule();
})