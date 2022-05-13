//Bai tap 1:

function baitap1(){
    var s = 0
    var i = 0
    while(s<10000){
        i++
        s+=i
        
    }
    document.getElementById('result').style.display ='block'
    document.getElementById('xuat').innerHTML = i

}


//Bai tap 2:
function baitap2(){
    var num_x = +document.getElementById('numx').value
    var num_n = +document.getElementById('numn').value

    var result = 0
    for(var i =1;i<=num_n;i++){
        result += num_x**i
    }
    document.getElementById('result-2').style.display='block'
    document.getElementById('out').innerHTML = result
}

//Bai tap 3
function baitap3(){
    var num_n = +document.getElementById('num-n3').value

    var s = 1
    for(var i = 1;i<=num_n;i++){
        s = s*i
    }
    document.getElementById('result-3').style.display='block'
    document.getElementById('out3').innerHTML = s
}

function baitap4(){
    var taoDiv = document.getElementById('hien')

    for(var i = 1; i<=10;i++){
        if(i%2!==0){
           taoDiv.innerHTML+= `<div style="background: Red;">Div le ${i}</div>`
        }else{
            taoDiv.innerHTML+= `<div style="background: blue;">Div chan ${i}</div>`
        }
        
    }


}