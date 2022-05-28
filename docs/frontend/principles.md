---
sidebar_position: 4
---

# Principles
:::info Tóm lược
Hồi mới vô nghề cứ nghe mọi người nói nói mấy cái nguyên tắc này nguyên tắc kia nghe cũng hơi hông biết, giờ đi làm được vài ba năm cũng không biết gì luôn! Nhưng mà khi tìm google đọc lại thì thấy mình đã dùng, đã trải qua nó kha khá thứ rồi, khổ là không biết là nó có tên.
Bên dưới đại loại là mình notes lại thui, nào rảnh rỗi đọc lại.
:::
## SOLID
:::warning Coming soon.
:::

## YAGNI - You Aren’t Gonna Need It
:::info Giải nghĩa
**_You Aren’t Gonna Need It = Bạn sẽ không cần nó_**
:::
Đại loại cái này nó xãy ra trong lúc mình là việc gì đó, viết một function chẵn hạng, do là mình cứ nghĩ mình cần (mà cần thì cấm đầu làm). Làm xong, code xong, commit xong => 3-4 tháng sau vẫn không thấy dùng nó.

**Ví dụ:**
Viết function xóa phần tử trong mãng chẳn hạng => viết xong.
Cái nghỉ thêm chắc sau này có phần di chuyển các phần tử bên trong mãng => viết thêm cái function nữa (mặc dù chưa chắc là sẽ dùng ở tương lai).

## DRY - Don’t Repeat Yourself
:::info Giải nghĩa
**_Don’t Repeat Yourself - Đừng lặp lại chính mình_**
:::

Cái này đi làm chắc được nghe nhiều nè, thường mới vào cứ sợ sửa code người khác bị ảnh hưởng này kia => copy hẵn code người ta ra một file mới rồi chỉnh sửa trên đó.
Hoặc là chính mình đi copy code của mình paste ở nhiều nơi trong dự án mà không viết hàm commons.
Cái hại to nhất của này là mỗi lần thay đổi code => phải đi tìm mấy chổ code này sửa hết. Thay vì chỉ sửa một chổ ở commons function thui.

## KTSS - Keep It Simple Stupid
:::warning Coming soon.
:::