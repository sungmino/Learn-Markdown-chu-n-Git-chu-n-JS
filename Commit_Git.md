#                       Commit Git

### Cấu trúc commit message

Cấu trúc chung của một commit message theo conventional có dạng:

```html
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

**Trong đó:**

- Các thành phần `type`, `description` là bắt buộc cần có trong commit message, `optional` là tùy chọn, có hoặc không có cũng được.
- `type`: từ khóa để phân loại commit là feature, fix bug, refactor.. Chú ý ngay sau `type` có dấu `:` nữa nhé.
- `scope`: cùng được dùng để phân loại commit, nhưng trả lời câu hỏi: commit này refactor|fix cái gì? được đặt trong cặp ngoặc đơn ngay sau `type`. VD: `feat(authentication):`, `fix(parser):`.
- `description`: là mô tả ngắn về những gì sẽ bị sửa đổi trong commit đấy.
- `body`: là mô tả dài và chi tiết hơn, cần thiết khi description chưa thể nói rõ hết được.
- `footer`: một số thông tin mở rộng như số ID của pull request, issue.. được quy định theo conventional.

**Ví dụ ** :

- ex1:

  feat: implement multi-languages

- ex2:

  fix: homepage's bug

- ex3 with scope:

  fix(player): uiza player can not initialize

### Semantic Versioning

Conventional Commit tương khớp với **SemVer** thông qua `type` trong commit message. Các tool automate versioning cũng dựa vào nó để quyết định version mới cho source code. Với quy ước như sau:

- `fix`: một commit thuộc loại fix bug sẽ thay đổi [PATCH](http://semver.org/#summary) trong version (theo semantic version).
- `feat`: một commit thuộc loại thêm feature sẽ thay đổi [MINOR](http://semver.org/#summary) trong version theo (semantic version).
- Ngoài ra, một chút ý với từ khóa `BREAKING CHANGE` trong phần `body` của commit message thì sẽ ám chỉ là commit này có phần sửa đổi khiến code sẽ không còn tương thích với version trước đó. Như việc thay đổi cấu trúc response của một API, tất nhiên phần handle response theo cấu trúc trước đó sẽ không còn chính xác và lúc này chúng ta cần tạo một version mới hoàn toàn với việc thay đổi [MAJOR](http://semver.org/#summary) trong version.

### Một số type phổ biến

Một số `type` phổ biến gồm:

- `feat`: thêm một feature
- `fix`: fix bug cho hệ thống
- `refactor`: sửa code nhưng không fix bug cũng không thêm feature hoặc đôi khi cũng bug cũng được fix từ việc refactor.
- `chore`: một số thay đổi lặt vặt
- `docs`: thêm/thay đổi document
- `style`: những thay đổi không làm thay đổi ý nghĩa của code như thay đổi css/ui chẳng hạn.
- `perf`: code cải tiến về mặt hiệu năng xử lý
- `vendor`: cập nhật version cho các dependencies, packages.

### Các quy tắc

- Commit message phải có prefix là một type (dạng danh từ) như `feat`, `fix`.. Theo ngay sau là scoped (nếu có) và một dấu hai chấm và khoảng trắng như chúng ta vừa đề cập ở trên. VD: `feat:`, `fix:`.
- `feat` type này thì bắt buộc phải sử dụng khi thêm một feature
- `fix` type này bắt buộc phải sử dụng khi fix bug
- Nếu có scope, scope phải là một danh từ mô tả về vùng code thay đổi và phải đặt ngay sau `type`. VD: `feat(authentication)`.
- Một `description` phải là mô tả ngắn về các thay đổi trong commit và phải ở sau một khoảng trắng sau type/scope.
- Một commit dài thì có thể có phần body ngay sau description, cung cấp ngữ cảnh về các thay đổi. Phải có một dòng trắng giữa description và body.
- Phần `footer` có thể được đặt ngay sau body, phải có một dòng trắng giữa body và footer. Footer phải chứ các thông tin mở rộng về commit như các pull request liên quan, các người review, breaking changes. Mỗi thông tin trên một dòng.
- Các type khác feat và fix có thể được sử dụng trong commit message.