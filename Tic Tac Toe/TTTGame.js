//html tarafındaki oluşturduğumuz kutuyu bu Array ile simule ediyoruz
let TTTArray = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1], 
];

// Function oyunu resetliyor
function Reset() {
  
	location.reload();
	

}


// Function oyuncunun kazanıp kazanamadığını kontrol ediyor
function IsWin(R,L) {
    let Horizontal=TTTArray[R][0].toString()+TTTArray[R][1].toString()+TTTArray[R][2].toString();
    let Vertical=TTTArray[0][L].toString()+TTTArray[1][L].toString()+TTTArray[2][L].toString();
    let Diagonal=TTTArray[0][0].toString()+TTTArray[1][1].toString()+TTTArray[2][2].toString();;
    if((Horizontal==="101")||(Vertical==="101")|(Diagonal==="101")){
        return true;

    }
    return false;
    
}

//Function id parametresi ile hangi alana girildiğini anlayıp ona göre TTTArray üzerine işliyor
//Ayrıca IsWin fonksiyonu çalıştırılarak hangi oyuncunun kazandığını tespit ediyor
let Flag = 1;
function myfunc_3(id) {
    
    let str=""+id;
    let Array=str.split("");
    let R=parseInt(Array[0]),L=parseInt(Array[1]);
	if (Flag == 1) {
		document.getElementById(id).value = "X";
		document.getElementById(id).disabled = true;
        TTTArray[R][L]=1;
        if(IsWin(R,L)){
            document.getElementById('Print')
			.innerHTML = "Oyuncu X kazandı";
            window.alert('Oyuncu X kazandı');
        }
        console.log(TTTArray[R][L]);
		Flag = 0;
	}
	else {
		document.getElementById(id).value = "0";
		document.getElementById(id).disabled = true;
        TTTArray[R][L]=0;
        if(IsWin(R,L)){
            document.getElementById('Print')
			.innerHTML = "Oyuncu 0 kazandı";
            window.alert('Oyuncu O Kazandı');
        }
        console.log(TTTArray[R][L]);
		Flag = 1;
	}
}

//Amacım event oluştuğu anda yakalamak olduğu için bunu yazdım fakat html tarafında id gönderimi 
//yaptığım için buna gerek kalmadı
/*[...document.getElementsByTagName("input")].forEach(function(item) {
    
    item.addEventListener('onclick', function() {
      
      item.value="12";
      item.disabled=true;
      /
  
    })
  })*/
