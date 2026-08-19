# Bùi Thu Hằng — Data Analyst Portfolio     
🔗 **Portfolio Website:** [Bui Hang | Data Analyst Portfolio](https://buihang.vercel.app/)              

Website portfolio cá nhân giới thiệu bản thân, học vấn, chứng chỉ đạt được và các dự án đã thực hiện và thông tin liên hệ. Web được xây dựng bằng React + Vite và dễ dàng deploy trên vercel.app

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-2860c4?logo=vercel&logoColor=white)

## Giới thiệu

Xin chào, đây là trang portfolio cá nhân, nơi mình chia sẻ các dự án thực hiện trong quá trình học Business Data Analytics. Mình định hướng trở thành Data Analyst, đặc biệt quan tâm đến lĩnh vực tài chính và dịch vụ tài chính.

Các dự án trong portfolio tập trung vào những kỹ năng mình muốn áp dụng trong công việc thực tế, như xác định bài toán từ nhu cầu kinh doanh, SQL, phân tích dữ liệu, xây dựng data pipeline, Power BI và báo cáo. 


## Mục lục

- [Bùi Thu Hằng — Data Analyst Portfolio](#bùi-thu-hằng--data-analyst-portfolio)
  - [Giới thiệu](#giới-thiệu)
  - [Mục lục](#mục-lục)
  - [Tính năng](#tính-năng)
  - [Công nghệ sử dụng](#công-nghệ-sử-dụng)
  - [Cấu trúc thư mục](#cấu-trúc-thư-mục)
  - [Cài đặt và chạy local](#cài-đặt-và-chạy-local)
  - [Build và deploy](#build-và-deploy)
  - [Cách cập nhật nội dung](#cách-cập-nhật-nội-dung)
  - [Ghi nhận \& Nguồn tham khảo](#ghi-nhận--nguồn-tham-khảo)
  - [Cảm ơn bạn đã đọc đến đây](#cảm-ơn-bạn-đã-đọc-đến-đây)

## Tính năng

- **About Me** — giới thiệu 
- **Education** — học vấn
- **Projects** — các dự án Data Analytics, mỗi dự án có link GitHub và link dashboard trực tiếp (nếu có)
- **Architecture & Stack** — sơ đồ kiến trúc pipeline dữ liệu và công nghệ sử dụng
- **Certifications** — chứng chỉ đạt được
- **Contact** — thông tin liên hệ
- Hỗ trợ dark mode và responsive trên điện thoại

## Công nghệ sử dụng

- **React 18** + **Vite** — framework giao diện và build tool
- **Tailwind CSS** — styling
- **Lucide / React Icons** — bộ icon
- Nội dung tách riêng dạng **JSON** để dễ cập nhật mà không cần sửa code
- Deploy trên **Vercel**

## Cấu trúc thư mục

```
personal-websites-portfolio/
│
├── public/
│   ├── favicon.png              # Favicon của trang
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── avatar/              # Ảnh đại diện
│   │   ├── company-logo/        # Logo tổ chức cấp chứng chỉ (Google, Anthropic...)
│   │   └── hero.png             # Ảnh khu vực hero (đầu trang)
│   │
│   ├── components/              # Component React theo từng section
│   │   ├── AboutMe.jsx
│   │   ├── DataWorkflow.jsx    # Sơ đồ workflow phân tích dữ liệu
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx        # Học vấn / nghiên cứu / hoạt động
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx         # Danh sách dự án + nút Live Dashboard / Code
│   │   ├── ScrollToTop.jsx      # Nút cuộn lên đầu trang
│   │   └── Techstack.jsx
│   │
│   ├── data/                    # Dữ liệu nội dung — chỉnh ở đây, không cần sửa component
│   │   ├── certifications.json  # Danh sách chứng chỉ & giải thưởng
│   │   └── projects.json        # Danh sách dự án
│   │
│   ├── App.jsx                 # Component gốc, sắp xếp thứ tự các section
│   ├── index.css               # Style toàn cục + biến màu chủ đạo
│   └── main.jsx                # Điểm khởi chạy ứng dụng
│
├── index.html                 # HTML gốc, chứa thẻ meta và favicon
├── package.json               # Cấu hình và dependencies
└── README.md
```

## Cài đặt và chạy local

Yêu cầu: đã cài [Node.js](https://nodejs.org/) phiên bản 18 trở lên.

```bash
# 1. Clone repo về máy
git clone https://github.com/BuiHang-stp/Data-Analytics-Portfolio.git
cd Data-Analytics-Portfolio

# 2. Cài dependencies
npm install

# 3. Chạy môi trường phát triển
npm run dev
```

Mở đường dẫn hiện trên terminal (thường là http://localhost:5173) trên trình duyệt.

## Build và deploy

```bash
# Build bản production vào thư mục dist/
npm run build

# Xem thử bản build trước khi deploy
npm run preview
```

Trang được deploy bằng Vercel: đẩy code lên GitHub, import repo vào Vercel là tự động build và deploy. Từ đó mỗi lần git push Vercel sẽ tự cập nhật lại trang.

## Cách cập nhật nội dung

Phần lớn nội dung nằm trong thư mục `src/data/`, chỉnh trực tiếp file JSON là được, không cần đụng vào code:

- **Thêm / sửa dự án** → `src/data/projects.json`
- **Thêm / sửa chứng chỉ** → `src/data/certifications.json`
- **Sửa giới thiệu, học vấn, hoạt động** → file tương ứng trong `src/components/`
- **Đổi màu chủ đạo** → biến màu trong `src/index.css`

## Ghi nhận & Nguồn tham khảo

- Thiết kế portfolio được tham khảo từ các template portfolio mã nguồn mở dành cho developer.
- Logo được tham khảo từ các nguồn công khai trên Internet.

## Cảm ơn bạn đã đọc đến đây

Các bạn có góp ý, câu hỏi hay muốn trao đổi thêm, mình rất vui được kết nối

- **Email:** [buihang.work@gmail.com](mailto:buihang.work@gmail.com)
- **LinkedIn:** [linkedin.com/in/buithuhang](https://www.linkedin.com/in/buithuhang/)
- **GitHub:** [github.com/BuiHang-stp](https://github.com/BuiHang-stp)

