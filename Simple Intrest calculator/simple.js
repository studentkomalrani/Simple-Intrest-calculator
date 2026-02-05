function si(){
    var p=document.getElementById("pp").value ;
    var r=document.getElementById("rr").value;
    var t=document.getElementById("tt").value;

    var s=p*r*t/100;

    document.getElementById("ans").innerText="Simple Intrest="+s;
}