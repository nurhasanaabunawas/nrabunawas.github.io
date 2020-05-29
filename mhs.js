function student(name,nim,prodi,email){ 
    this.name= name; 
    this.nim= nim; 
    this.prodi= prodi; 
    this.email=email;
} 


// function hitung(){
//     var data1 = (document.getElementById("n1").value);
//     var data2 = (document.getElementById("n2").value);
//     var data3 = (document.getElementById("n3").value);
//     var data4 = (document.getElementById("n4").value);
//     

//     var array = [data1, data2, data3, data4, data5];
//     document.getElementById("nama").innerHTML = nama;
//     document.getElementById("nim").innerHTML = nim;
//     document.getElementById("prodi").innerHTML = prodi;
//     document.getElementById("mail").innerHTML = min;

// };


function ganti(){
    document.getElementById("form").reset(); 
    document.getElementById("nama").innerHTML = " ";
    document.getElementById("nim").innerHTML = " ";
    document.getElementById("prodi").innerHTML = " ";
    document.getElementById("email").innerHTML = " ";
}

