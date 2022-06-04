---
sidebar_position: 11
sidebar_label: Z-Index
sidebar_class_name: green
title: Z-Index in applycation - Nguyễn Lê Phong
description: Organization Z-Index in your applycation
image: https://cdn.jsdelivr.net/gh/nguyenlephong/dom-pub/shared/images/cv/images/dom.png
keywords: [z-index organization, Frontend Developer, Nguyễn Lê Phong]
---

# Z-Index

## Overview

:::info
Nó không phải là vấn đề lớn trong dự án. Tuy nhiên khi dự án chúng ta dùng một `Framework` bên thứ ba, mà file thiết kế của đội design lại khác xa với những gì `Framework UI` hỗ trợ thì chúng ta thường đụng độ tới vấn đề `z-index` này.
:::

## Organization Range

```js
0000–1999: Elements and Components
2000–2999: Element and Component DropDowns
3000–3999: Secondary Navigation
4000–4999: Header/Footer
5000–5999: Primary Navigation
6000–6999: Full Screen Features
7000–7999: Special Cases
8000–8999: Modals/Dialog Windows
9000–9999: Notifications
```

### Elements and Components: 0000–1999

Phạm vi này dành cho tất cả các phần tử html và các thành phần trang web bao gồm văn bản, hình ảnh và khối nội dung. Ví dụ: nếu một hình ảnh trên trang phải có `z-index` thấp hơn văn bản trên trang, thì mỗi giá trị `z-index` đó có thể được đặt trong phạm vi này.

### Element and Component DropDowns: 2000–2999

Phạm vi này phải dành cho `dropdowns` nằm trên một lớp trên các phần tử và thành phần từ phạm vi trước đó. Ví dụ: một hộp văn bản có thể có `dropdowns` với các đề xuất và mỗi giá trị `z-index` đó có thể được đặt trong phạm vi này.

### Secondary Navigation: 3000–3999

Phạm vi này dành cho điều hướng phụ, là điều hướng cho một trang hoặc một tập hợp con các trang. Ví dụ: một trang tài khoản có thể có thanh điều hướng riêng ngoài thanh điều hướng trên toàn trang. Có thể đặt các giá trị `z-index` điều hướng cho từng trang trong phạm vi này.

### Header/Footer: 4000–4999

Phạm vi này dành cho các phần tử đầu trang và chân trang của trang web của bạn. Giá trị `z-index` ở đầu trang và chân trang có thể chồng chéo lên nhau, vì bản thân các phần tử không bao giờ được chồng chéo lên nhau.

### Primary Navigation: 5000–5999

Phạm vi này dành cho điều hướng chính, thường sẽ là một thanh ở đầu trang web của bạn với các liên kết đến các trang khác. Trong khi điều hướng phụ chỉ được sử dụng cho một số trang, điều hướng chính sẽ hiển thị trên tất cả các trang.
Không phải tất cả các trang web sẽ có cả tiêu đề và điều hướng chính, nhưng nếu chúng có điều hướng chính thì điều hướng chính phải ở trên đầu trang, chân trang và điều hướng phụ.

### Full Screen Features: 6000–6999

Phạm vi này dành riêng cho các tính năng toàn màn hình như trình soạn thảo văn bản có chế độ toàn màn hình. Nếu một phần tử ở chế độ toàn màn hình, thì phần tử đó sẽ được hiển thị trên tất cả các khoảng thời gian trước đó.

### Special Cases: 7000–7999

Phạm vi này dành cho các trường hợp đặc biệt của các phần tử sẽ được hiển thị trên tất cả các phần tử khác. Ví dụ: trên một trong các dự án của chúng tôi, người dùng có thể đăng nhập với tư cách là người dùng cấp cao với các quyền bổ sung. Nếu họ đăng nhập với tư cách là một người dùng như vậy, một thanh xuất hiện ở cuối màn hình nhắc nhở họ rằng họ đã đăng nhập với tư cách là một người dùng cấp cao.

### Modals/Dialog Windows: 8000–8999

Phạm vi này nên được sử dụng cho các chế độ và cửa sổ hộp thoại, chẳng hạn như hộp thoại bật lên yêu cầu người dùng xác nhận một số hành động trước khi tiếp tục.

### Notifications: 9000–9999

Phạm vi này nên được sử dụng cho các thông báo có thể bật lên trên bất kỳ trang nào và do đó sẽ được hiển thị trên tất cả các phần tử khác. Điều này bao gồm các tính năng toàn màn hình và cửa sổ hộp thoại.
Một thông báo mẫu sẽ là một thông báo từ thư viện JavaScript. Thông báo phải có giá trị `z-index` cao nhất vì không có phần tử nào nằm trên chúng.

## Refs

- [Medium - Z Index Organization in CSS](https://medium.com/science-journal/z-index-organization-in-css-5913fd4c25c9)
- [Issues](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)
