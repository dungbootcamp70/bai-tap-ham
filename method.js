export function toVND(money) {
    return money.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
}

export function diemUuTien(doiTuong,khuVuc){
    let diemDoiTuong = 0;
    let diemKhuVuc = 0;
    switch (doiTuong) {
        case '1':
            diemDoiTuong = 2.5;
            break;
        case '2':
            diemDoiTuong = 1.5;
            break;
        case '3':
            diemDoiTuong = 1;
            break;
        default:
            diemDoiTuong = 0;
            break;
    }
    switch (khuVuc) {
        case 'A':
            diemKhuVuc = 2;
            break;
        case 'B':
            diemKhuVuc = 1;
            break;
        case 'C':
            diemKhuVuc = 0.5;
            break;
        default:
            diemKhuVuc = 0;
            break;
    }
    let tong = diemDoiTuong + diemKhuVuc;
    return tong;
}

export function tinhTienDien(soKw) {
    let tienDien = 0;
    if (soKw <= 50) {
        tienDien = soKw * 500;
    } else if (soKw <= 100) {
        tienDien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw <= 350) {
        tienDien = (50 * 500) + (50 * 650) + (100 * 850) + (soKw - 200) * 1100;
    } else {
        tienDien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soKw - 350) * 1300;
    }
    return toVND(tienDien);
}

export function tinhThueTNCN(thuNhapChiuThue) {
    let tongThuNhap = 0;
    if (thuNhapChiuThue <= 6e+7) {
        tongThuNhap = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 12e+7) {
        tongThuNhap = (6e+7 * 0.05) + ((thuNhapChiuThue - 6e+7) * 0.1);
    } else if (thuNhapChiuThue <= 21e+7) {
        tongThuNhap = (6e+7 * 0.05) + (6e+7 * 0.1) + ((thuNhapChiuThue - 12e+7) * 0.15);
    } else if (thuNhapChiuThue <= 384e+6) {
        tongThuNhap = (6e+7 * 0.5) + (6e+7 * 0.1) + (9e+7 * 0.15) + ((thuNhapChiuThue - 21e+7) * 0.2);
    } else if (thuNhapChiuThue <= 624e+6) {
        tongThuNhap = (6e+7 * 0.5) + (6e+7 * 0.1) + (9e+7 * 0.15) + (174e+6 * 0.2) + ((thuNhapChiuThue - 384e+6) * 0.25);
    } else if (thuNhapChiuThue <= 960e+6) {
        tongThuNhap = (6e+7 * 0.5) + (6e+7 * 0.1) + (9e+7 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.5) + ((thuNhapChiuThue - 624e+6) * 0.3);
    } else {
        (6e+7 * 0.5) + (6e+7 * 0.1) + (9e+7 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.5) + (336e+6 * 0.35)
    }
    return toVND(tongThuNhap);
}

export function tinhTienCap(soKenh, soKetNoi, loaiKhachHang) {
    let phiHoaDon = 0;
    let phiDichVuCoBan = 0;
    let thueKenhCaoCap = 0;
    let tongTienCap = 0;

    if (loaiKhachHang === '1') {
        phiHoaDon = 4.5;
        phiDichVuCoBan = 20.5;
        thueKenhCaoCap = soKenh * 7.5;}
    if (loaiKhachHang === '2') {
        phiHoaDon = 15;
        if (soKetNoi <= 10) {
            phiDichVuCoBan = 75;
        } else if (soKetNoi > 10) {
            phiDichVuCoBan = 75 + ((soKetNoi - 10) * 5);
        }
        thueKenhCaoCap = soKenh * 50;
    }
    tongTienCap = phiHoaDon + phiDichVuCoBan + thueKenhCaoCap;
    return tongTienCap;
}
