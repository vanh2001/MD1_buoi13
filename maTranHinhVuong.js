let mang = [
    [22,3,4,45],
    [3,24,65,6],
    [4,85,16,7],
    [86,7,8,95]
]

//Tính tổng các hàng:
function tinhTongCacHang() {
    for (let i = 0; i < mang.length; i++) {
        let sum = 0;
        for (let j = 0; j < mang[i].length; j++) {
            sum += mang[i][j];
        }
        document.writeln(sum);
        document.writeln("</br>");
    }

}
// tinhTongCacHang();

//Tính tổng các cột:
function tinhTongCacCot() {
    for (let i = 0; i < mang.length; i++) {
        let sum = 0;
        for (let j = 0; j < mang[i].length; j++) {
            sum += mang[j][i];
        }
        document.writeln(sum);
        document.writeln("</br>");
    }

}
tinhTongCacCot();


//Đường chéo chính
//Cách 1:
function tinhDuongCheoChinh1() {
    let sum = 0;
    for (let i = 0; i < mang.length; i++) {
        for (let j = 0; j < mang.length; j++) {
            if (i==j){
                sum += mang[i][j];
            }
        }
    }
    document.writeln(sum);
}
// tinhDuongCheoChinh1();

//Cách 2:
function tinhDuongCheoChinh2() {
    let sum = 0;
    for (let i = 0; i < mang.length; i++) {
        sum += mang[i][i];
    }
    document.writeln(sum);
}
// tinhDuongCheoChinh2();


//Đường chéo phụ
function tinhDuongCheoPhu1() {
    let sum = 0;
    for (let i = 0; i < mang.length; i++) {
        sum += mang[i][mang.length-1-i];
    }
    document.writeln(sum);
}
// tinhDuongCheoPhu1();

function tinhDuongCheoPhu2() {
    let sum = 0;
    for (let i = mang.length - 1; i <= 0; i--) {
        for (let j = 0; j < mang.length; j++) {
            if (j = mang.length - 1 - i){
                sum += mang[i][j];
            }
        }
    }
    document.writeln(sum);
}
// tinhDuongCheoPhu2();