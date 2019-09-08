#                           Git - flow

-  Git-flow là tên gọi của 1 tool(command) hỗ tợ branch model gọi là   **A successful Git branching model** trong git-flow có 5 kiểu với mỗi vai trò khác nhau (tùy trường hợp mà có lúc là 6 kiểu), switch các kiểu với nhau để phát triển Bằng việc set trước các branch, những rule khi merge, dù có bao nhiêu developer cùng thời điểm phát triển vẫn có thể quản lý branch dễ dàng, và tránh được những vấn đề do merge Tiếp theo.

## master brach

Branch master là branch được tạo mới repository và tạo mặc định trong Git. Những người mới bắt đầu thường có xu hướng commit trực tiếp và branch master, nhưng trong git-flow thì ta không commit trực tiếp vào master, mà đây chỉ là branch dùng để thực hiện merge.

## develop branch

Branch develop là branch trung tâm cho việc phát triển. Do với mỗi thay đổi ta lại ngắt branch feature tương ứng cho nên có thể nói đây là branch được dùng nhiều nhất trong quá trình phát triển. Cần đặt tên branch sao cho người khác có thể biết được ngay nội dung thay đổi là gì. Mỗi branch được ngắt ra để làm này sau khi làm xong ta lại merge vào develop, merge xong sẽ xóa nó đi.

## release branch

Branch release  là branch dùng để release sản phẩm như đúng tên gọi của nó. Khi release sản phẩm thì có rất nhiều những task liên quan khác cần thiết nữa, những task liên quan đó sẽ được release trên branch release mà ta ngắt ra từ branch develop. Sau khi release xong, sẽ merge vào branch master và branch develop, ghi release tag vào merge commit của branch master sau đó xóa branch release đi.

## hotfix branch

Khi release sản phẩm cũng có khi ta phát hiện ra bug rất nghiêm trọng, những lúc như vậy ta sẽ ngắt ra branch hotfix trực tiếp từ branch master để tiến hành fixbug, sau khi fixbug xong sẽ merge vào master và develop và ghi lại release tag. Sau đó sẽ xóa branch hotfix đi.

***

`      -------------------------------------------------------------------------------`

# Các command thực hành

1. Trong thư mục dự án, dùng command sau để khởi tạo git-flow:  `git flow init`

2. Các tính năng:

   - Phát triển các tính năng cho việc release sắp tới.

   - Về cơ bản chỉ tổ chức ở repos của các lập trình viên.

   - Từ branch develop thêm tính năng MYFEATURE:   `git flow feature start MYFEATURE`

   - Kết thúc một tính năng:    `git flow feature finish MYFEATURE`

     *Merge nhánh tính năng-MYFEATURE vào hánh develop -> xóa nhánh tính năng -> chuyển sang nhánh develop.*

   - Công bố tính năng:   `git flow feature publish MYFEATURE`

   - Lấy tính năng về:  `git flow feature pull REMOTE_NAME MYFEATURE`

3. Tạo một bản release:

   - Tạo nhánh release:    `git flow release start RELEASE [BASE]`

   - Công bố release:    `git flow release publish RELEASE`

   - Theo dấu remote 'release': `git flow release track RELEASE`

   - Kết thúc release:    `git flow release finish RELEASE`

     *Merge nhánh 'release' vào nhánh 'master' -->  Gắn tag ở nhánh 'master' dành cho bản release --> Merge lại nhánh 'release' vào nhánh 'develop' --> Xóa bỏ nhánh 'release'*

4. Nhánh hotfix:

   - Tạo nhánh:   `git flow hotfix start VERSION [BASENAME]`

     *Tham số VERSION ở đây chỉ định tên của phiên bản release hotfix này. Còn tham số tùy chọn basename sẽ chỉ định tên nhánh cơ bản thay cho hotfix thay vì nhánh 'master'*

   - Kết thúc hotfix:  `git flow hotfix finish VERSION`

     *Kết thúc hotfix sẽ merge lại nội dung thay đổi vào nhánh 'develop' và 'master'. Ở nhánh 'master' sẽ được gắn tag là phiên bản của hotfix.*

### Tổng hợp

![alt](C:\Users\admin\Pictures\git_flow.PNG)

