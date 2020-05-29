function average(array) {
    var jumlah = 0;
    for (var i = 0; i< array.length; i++){
        jumlah += parseInt(array[i])
    }
    var avg = jumlah / array.length;
    return avg;

}

function med(array){
    var nilai_tengah = Math.floor(array.length/2);
    array.sort(function(x,y) {return x - y });

    if (array.length %2){
        return array[nilai_tengah];
    
    }else {
        return(array[nilai_tengah - 1] + array[nilai_tengah]) /2;
    }
    
}

function max(array){
   return Math.max(...array);
}
function min(array){
    return Math.min(...array);
}



function hitung(){
    var data1 = (document.getElementById("n1").value);
    var data2 = (document.getElementById("n2").value);
    var data3 = (document.getElementById("n3").value);
    var data4 = (document.getElementById("n4").value);
    var data5 = (document.getElementById("n5").value);

    var array = [data1, data2, data3, data4, data5];
    document.getElementById("rt").innerHTML = average(array);
    document.getElementById("med").innerHTML = med(array);
    document.getElementById("max").innerHTML = max(array);
    document.getElementById("min").innerHTML = min(array);

};


function ganti(){
    document.getElementById("form1").reset(); 
    document.getElementById("n1").innerHTML = " ";
    document.getElementById("n2").innerHTML = " ";
    document.getElementById("n3").innerHTML = " ";
    document.getElementById("n4").innerHTML = " ";
    document.getElementById("n5").innerHTML = " ";
}

