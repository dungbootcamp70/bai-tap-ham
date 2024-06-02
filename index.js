import { diemUuTien, tinhTienDien, tinhThueTNCN, tinhTienCap } from "./method.js";
// BT 1
document.getElementById('btnXetTuyen').onclick = function() {
    let diemChuan = +document.getElementById('diemChuan').value;
    let khuVuc = document.getElementById('khuVuc').value;
    let doiTuong = document.getElementById('doiTuong').value;
    let mon1 = +document.getElementById('mon1').value;
    let mon2 = +document.getElementById('mon2').value;
    let mon3 = +document.getElementById('mon3').value;
    let loai = 'rớt';
    let tongDiem = mon1 + mon2 + mon3 + diemUuTien(doiTuong,khuVuc)

    
    if ((mon1 > 0) && (mon2 > 0) && (mon3 > 0) && (tongDiem >= diemChuan)) {
        loai = 'đậu'}
   document.getElementById('ketQuaTuyenSinh').innerHTML = `Bạn được ${tongDiem} điểm, ${loai}`
}
//BT 2
document.getElementById('btnTinhTienDien').onclick = function() {
    let ten = document.getElementById('hoTen').value;
    let soKw = +document.getElementById('soKw').value;
    let tongTienDien = tinhTienDien(soKw);

    document.getElementById('tongTienDien').innerHTML = `Khách hàng: ${ten}, tổng tiền điện: ${tongTienDien}`;
};
//BT 3
document.getElementById('btnThuNhap').onclick = function() {
    let hoTen3 = document.getElementById('hoTen3').value;
    let thuNhapNam = +document.getElementById('thuNhapNam').value;
    let soNguoiPhuThuoc = +document.getElementById('soNguoiPhuThuoc').value;
    let thuNhap = thuNhapNam - 4e+6 - soNguoiPhuThuoc * 16e+5;
    let thueThuNhap = tinhThueTNCN(thuNhap)

    document.getElementById('tongTienThue').innerHTML = `Họ tên: ${hoTen3}, thuế thu nhập: ${thueThuNhap}`;
};

//BT 4
document.getElementById('btnTinhTienCap').onclick = function() {
    let loaiKhachHang = document.getElementById('loaiKhachHang').value;
    let maKH = document.getElementById('maKH').value;
    let soKenh = +document.getElementById('soKenh').value;
    let soKetNoi = +document.getElementById('soKetNoi').value;
    let tienCap = tinhTienCap(soKenh, soKetNoi, loaiKhachHang);

    document.getElementById('tongTienCap').innerHTML = `Mã khách hàng: ${maKH}; Tiền cáp: ${tienCap}`;
};

