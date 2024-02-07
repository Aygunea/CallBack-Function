//Task1
//4 esas funksiyaniz olacaq(Topla(),Cixma(),Vurma(),Bolme()).Bir Callback funksiyaniz olacaq(Output()).Kalkulyator yazacaqsiz.Işləmə prinsipi
//aşağıdakı kimi olacaq.Switch case olacaq 4 ədəd.topla,cixma,vurma,bolme caseləri olacaq.Key olaraq bunlardan hər hansı biri seçilsə yuxarıdakı
//funksiyaları işlədəcək.
let num1 = 6;
let num2 = 2;
let result;
function topla(num1, num2, callback) {
  result = num1 + num2;
  callback(result);
}
function cixma(num1, num2, callback) {
  result = num1 - num2;
  callback(result);
}
function vurma(num1, num2, callback) {
  result = num1 * num2;
  callback(result);
}
function bolme(num1, num2, callback) {
  result = num1 / num2;
  callback(result);
}
function OutPut(result) {
  console.log(result);
}
let choose = "cixma";
switch (choose) {
  case "topla":
    topla(num1, num2, OutPut);
    break;
  case "cixma":
    cixma(num1, num2, OutPut);
    break;
  case "vurma":
    vurma(num1, num2, OutPut);
    break;
  case "bolme":
    bolme(num1, num2, OutPut);
    break;
  default:
    console.log("duzgun case daxil edin");
    break;
}
//Task2
//Toplamda 3 funksiyaniz olacaq.Verilən arrayda ilk funksiyada tək ədədləri tapacaqsız.İkinci funksiyada bu tək ədədlərdən 3 və 5ə bölünənləri tapib
//Output funksiyasına göndərəcəksiz.
let arr = [3, 8, 15, 18, 30, 45];
let secondarr=[];
let thirdarr=[];
function findOddNum(array,callback) {
  secondarr = array.filter((num) => num % 2 != 0);
  callback(secondarr);
}

function find15bolunen(secondarray, callbacktwo) {
  thirdarr = secondarray.filter((num) => num % 3 == 0 && num % 5 == 0);
  callbacktwo(thirdarr);
}

function Out(thirdarray) {
  console.log(thirdarray);
}

findOddNum(arr,function(secondarray){
    find15bolunen(secondarray,Out)
});
