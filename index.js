// Bài tập 1 - JS buổi 15

function tongSoDiem() {
  var diemChuan = Number(document.getElementById("diem-chuan").value);
  var khuVuc = Number(document.getElementById("khu-vuc").value);
  var doiTuong = Number(document.getElementById("doi-tuong").value);
  var diemMonThu1 = Number(document.getElementById("diem-mon-thu-1").value);
  var diemMonThu2 = Number(document.getElementById("diem-mon-thu-2").value);
  var diemMonThu3 = Number(document.getElementById("diem-mon-thu-3").value);

  var diemUuTien = khuVuc + doiTuong;
  var diemTongKet = diemMonThu1 + diemMonThu2 + diemMonThu3 + diemUuTien;

  if (diemTongKet >= diemChuan) {
    var ketQuaThiTuyen = "Bạn đã đậu. ";
  } else {
    var ketQuaThiTuyen = "Bạn đã rớt. ";
  }

  document.getElementById("kq1").innerHTML = `${
    ketQuaThiTuyen + "Tổng điểm: " + diemTongKet
  } `;
}

// Bài tập 2 - JS buổi 15

function tinhTienDien() {
  var tenNguoiSuDung = document.getElementById("ten-nguoi-su-dung").value;
  var soKw = Number(document.getElementById("so-kw").value);

  var giaTien50KwDau = 500;
  var giaTien50KwDen100Kw = 650;
  var giaTien100KwDen200Kw = 850;
  var giaTien200KwDen350Kw = 1100;
  var giaTien350KwTroDi = 1300;

  var tongTien = 0;
  if (soKw <= 50) {
    tongTien = soKw * giaTien50KwDau;
  } else if (soKw <= 100) {
    tongTien = 50 * giaTien50KwDau + (soKw - 50) * giaTien50KwDen100Kw;
  } else if (soKw <= 200) {
    tongTien =
      50 * giaTien50KwDau +
      50 * giaTien50KwDen100Kw +
      (soKw - 100) * giaTien100KwDen200Kw;
  } else if (soKw <= 350) {
    tongTien =
      50 * giaTien50KwDau +
      50 * giaTien50KwDen100Kw +
      100 * giaTien100KwDen200Kw +
      (soKw - 200) * giaTien200KwDen350Kw;
  } else {
    tongTien =
      50 * giaTien50KwDau +
      50 * giaTien50KwDen100Kw +
      100 * giaTien100KwDen200Kw +
      150 * giaTien200KwDen350Kw +
      (soKw - 350) * giaTien350KwTroDi;
  }

  document.getElementById("kq2").innerHTML = `${
    "Họ tên: " +
    tenNguoiSuDung +
    ", Tổng tiền điện: " +
    tongTien.toLocaleString() +
    " VND"
  }`;
}

// Bài tập 3 - JS buổi 15

function tinhTienThue() {
  var hoTen = document.getElementById("ho-ten").value;
  var tongThuNhapNam = Number(
    document.getElementById("tong-thu-nhap-nam").value
  );
  var soNguoiPhuThuoc = Number(
    document.getElementById("so-nguoi-phu-thuoc").value
  );

  var thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;

  var tongTien = 0;
  if (thuNhapChiuThue <= 60000000) {
    tongTien = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120000000) {
    tongTien = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue <= 210000000) {
    tongTien = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue <= 384000000) {
    tongTien = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue <= 624000000) {
    tongTien = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue <= 960000000) {
    tongTien = thuNhapChiuThue * 0.3;
  } else {
    tongTien = thuNhapChiuThue * 0.35;
  }

  document.getElementById("kq3").innerHTML = `${
    "Họ tên người chịu thuế : " +
    hoTen +
    ", Tiền thuế thu nhập cá nhân phải đóng: " +
    tongTien.toLocaleString() +
    " VND"
  }`;
}

// Bài 4 - JS buổi 15

function phiXuLyHoaDon(khachHang) {
  if (khachHang == "nhaDan") {
    return 4.5;
  }
  if (khachHang == "doanhNghiep") {
    return 15;
  }
}
function phiDichVuCoBan(khachHang) {
  if (khachHang == "nhaDan") {
    return 20.5;
  }
  if (khachHang == "doanhNghiep") {
    return 75;
  }
}
function thueKenhCaoCap(khachHang) {
  if (khachHang == "nhaDan") {
    return 7.5;
  }
  if (khachHang == "doanhNghiep") {
    return 50;
  }
}

function anHienInput() {
  var khachHang = document.getElementById("loai-khach-hang").value;
  if (khachHang == "doanhNghiep") {
    document.getElementById("so-ket-noi").style.display = "block";
  } else {
    document.getElementById("so-ket-noi").style.display = "none";
  }
}

function tinhTien() {
  var khachHang = document.getElementById("loai-khach-hang").value;
  var maKhachHang = document.getElementById("ma-khach-hang").value;
  var soKenhCaoCap = Number(document.getElementById("so-kenh-cao-cap").value);
  var soKetNoi = Number(document.getElementById("so-ket-noi").value);

  // lấy  giá trị của từng loại khách hàng
  var giaTienXuLyHoaDon = phiXuLyHoaDon(khachHang);
  var giaTienDichVuCoBan = phiDichVuCoBan(khachHang);
  var giaTienThueKenhCaoCap = thueKenhCaoCap(khachHang);

  // tính tiền
  var tongTien = 0;

  if (khachHang == "nhaDan") {
    tongTien =
      giaTienXuLyHoaDon +
      giaTienDichVuCoBan +
      giaTienThueKenhCaoCap * soKenhCaoCap;
  }
  if (khachHang == "doanhNghiep") {
    if (soKetNoi <= 10) {
      tongTien =
        giaTienXuLyHoaDon +
        giaTienDichVuCoBan +
        giaTienThueKenhCaoCap * soKenhCaoCap;
    } else {
      tongTien =
        giaTienXuLyHoaDon +
        giaTienDichVuCoBan +
        (soKetNoi - 10) * 5 +
        giaTienThueKenhCaoCap * soKenhCaoCap;
    }
  }
  document.getElementById(
    "kq4"
  ).innerHTML = `Mã khách hàng: ${maKhachHang} , Tiền cáp: ${tongTien.toLocaleString()} $`;
}
