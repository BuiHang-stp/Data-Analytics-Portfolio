# 🚀 Trang Web Portfolio Cá Nhân

Một trang web portfolio cá nhân được xây dựng bằng **React + Vite** với thiết kế hiện đại, responsive, và hiệu suất cao.

## 📋 Mô Tả Dự Án

Dự án này là một trang web portfolio toàn diện để giới thiệu về bản thân, kỹ năng, kinh nghiệm làm việc, các dự án đã thực hiện, chứng chỉ đạt được, cộng đồng quản lý, và thông tin liên hệ.

---

## 🏗️ Cấu Trúc Dự Án

```
personal-websites-portfolio/
├── src/
│   ├── components/          # Các component React chính
│   │   ├── AboutMe.jsx      # Giới thiệu về bạn
│   │   ├── Certifications.jsx # Danh sách chứng chỉ & giải thưởng
│   │   ├── Community.jsx    # Phần giới thiệu cộng đồng & tác động xã hội
│   │   ├── Contact.jsx      # Biểu mẫu liên hệ
│   │   ├── Experience.jsx   # Kinh nghiệm làm việc & hành trình sự nghiệp
│   │   ├── Navbar.jsx       # Thanh điều hướng chính
│   │   ├── Projects.jsx     # Hiển thị các dự án đã thực hiện
│   │   ├── ScrollToTop.jsx  # Nút cuộn lên đầu trang
│   │   └── Techstack.jsx    # Công nghệ & kỹ năng được sử dụng
│   ├── data/                # Dữ liệu tĩnh
│   │   ├── certifications.json # Dữ liệu chứng chỉ
│   │   └── projects.json    # Dữ liệu các dự án
│   ├── assets/              # Hình ảnh & đối tượng tĩnh
│   │   ├── avatar/          # Ảnh đại diện
│   │   └── community/       # Hình ảnh liên quan cộng đồng
│   ├── App.jsx              # Component chính ứng dụng
│   ├── App.css              # Kiểu dáng ứng dụng
│   ├── main.jsx             # Điểm vào ứng dụng
│   └── index.css            # Kiểu dáng toàn cầu
├── public/                  # Tài nguyên công khai
├── package.json             # Cấu hình & dependencies
├── vite.config.js           # Cấu hình Vite
├── eslint.config.js         # Cấu hình ESLint
└── README.md                # Tài liệu này
```

---

## 📦 Các Component Chính

### 1. **Navbar** (`Navbar.jsx`)
- Thanh điều hướng cố định ở đầu trang
- Chứa các liên kết nhanh đến các phần khác nhau

### 2. **AboutMe** (`AboutMe.jsx`)
- Giới thiệu về bản thân, lý lịch cá nhân
- Hiển thị ảnh đại diện và mô tả về bạn

### 3. **Techstack** (`Techstack.jsx`)
- Danh sách công nghệ, ngôn ngữ lập trình, công cụ bạn sử dụng
- Hiển thị các kỹ năng kỹ thuật

### 4. **Experience** (`Experience.jsx`)
- Lịch sử công việc và kinh nghiệm chuyên môn
- Mô tả các vị trí đã giữ và thành tích đạt được

### 5. **Projects** (`Projects.jsx`)
- Các dự án đã thực hiện hoặc đang thực hiện
- Liên kết tới GitHub, demo, hoặc mô tả chi tiết dự án

### 6. **Certifications** (`Certifications.jsx`)
- Danh sách các chứng chỉ, giấy phép, giải thưởng
- Hiển thị từ file `certifications.json`

### 7. **Community** (`Community.jsx`)
- Giới thiệu về cộng đồng được quản lý/tham gia
- Hiển thị thống kê tác động xã hội
- Bao gồm carousel ảnh về hoạt động cộng đồng

### 8. **Contact** (`Contact.jsx`)
- Biểu mẫu liên hệ để người dùng gửi tin nhắn
- Thông tin liên lạc: email, điện thoại, mạng xã hội

### 9. **ScrollToTop** (`ScrollToTop.jsx`)
- Nút floating để cuộn lên đầu trang
- Cải thiện trải nghiệm người dùng

---

## 📊 Tệp Dữ Liệu

### **certifications.json**
Chứa danh sách chứng chỉ với các thông tin như:
- Tên chứng chỉ
- Tổ chức cấp
- Thời gian
- Liên kết xác minh

### **projects.json**
Chứa danh sách dự án với chi tiết:
- Tên dự án
- Mô tả
- Công nghệ sử dụng
- Liên kết GitHub, demo
- Hình ảnh thumbnail

---

## 🚀 Hướng Dẫn Chạy

### **Cài Đặt Dependencies**
```bash
npm install
```

### **Chạy Dev Server**
```bash
npm run dev
```
Trang web sẽ chạy tại `http://localhost:5173` với HMR (Hot Module Replacement)

### **Build Production**
```bash
npm run build
```

### **Chạy Với Script**
```bash
./run_server.sh
```

---

## 🛠️ Công Nghệ Sử Dụng

- **React** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS / CSS** - Styling
- **Lucide React** - Icon library
- **React Icons** - Icon components
- **ESLint** - Code quality

---

## 📝 Ghi Chú

- Dự án được tối ưu hóa cho thiết bị di động (responsive design)
- Sử dụng Intersection Observer cho animation khi scroll
- Hỗ trợ dark mode thông qua CSS variables
- Hiệu suất cao với lazy loading

---

## 👤 Tác Giả

Trang web portfolio cá nhân - được tạo bởi **tunguyenn99**

---

## 📄 License

Xem file LICENSE để biết thêm chi tiết.
