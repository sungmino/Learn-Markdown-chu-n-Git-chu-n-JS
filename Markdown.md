#                       Markdown

- Markdown là ngôn ngữ đánh dấu văn bản được tạo bởi John Gruber.

## Tiêu đề

- Có thể viết các tiêu đề h1 -> h6 bằng cách thêm số lượng kí tự # tương ứng vào đầu dòng. 1 ký tự # tương ứng với h1, 2 ký tự # tương ứng với h2 ,...

  ví dụ: 

  `# h1`

  `## h2`

  `### h3`

  `#### h4`

  `##### h5`

  `###### h6`

## Nhấn mạnh, highlight

Có thể kẹp 1 từ ở đầu và cuối bằng 1 ký tự * để *in nghiêng* , 2 ký tự * để **bôi đậm** , 3 ký tự * để ***vừa in nghiêng vừa bôi đậm*** .

ví dụ: 

`*in nghiêng*`

`**bôi đậm**`

`***vừa in ngiêng vừa bôi đậm***`

- Dùng cú pháp: ```inline code`` ` để viết inline code

- Để viết highlight block code  dùng cú pháp:

  \```php

  echo ("highlight code");

  \```

  sẽ được kết quả là: echo("highlight code");

  # Link, image

  ### Link

  Để chèn link vào bài viết, bạn dùng cú pháp sau

  ```none
  [title](http://~)
  ```

  Ví dụ

  ```none
  [Markdown](http://https://vi.wikipedia.org/wiki/Markdown)
  ```

  => [Markdown](http://https//vi.wikipedia.org/wiki/Markdown)

  ### Image

  Cú pháp chèn hình ảnh như sau

  ```none
  ![alt](http://~)
  ```

  Ví dụ nếu viết

  ```none
  ![alt](http://http://mikemclin.net/mmwp/wp-content/uploads/2013/03/markdown-syntax-language.png)
  ```

  thì bạn sẽ chèn được hình ảnh như thế này rồi.![alt](http://mikemclin.net/mmwp/wp-content/uploads/2013/03/markdown-syntax-language.png)

  

  ## List

  ### List dạng gạch đầu dòng

  ```none
  * item
  ```

  Ví dụ bạn viết

  ```none
  * item 1
  * item 2
  * item 3
  ```

  thì sẽ được kết quả như sau

  - item 1
  - item 2
  - item 3

  ### List dạng số

  ```none
  1. item
  ```

  Ví dụ bạn viết

  ```none
  1. item 1
  2. item 2
  3. item 3
  ```

  thì sẽ được kết quả như sau

  1. item 1
  2. item 2
  3. item 3

  ## Horizonal rules

  Để có được horizonal rules bạn chỉ cần viết *** như sau

  ```none
  ***
  horizonal rules
  ```

  kết quả là

  ------

  horizonal rules

  ## Blockquotes

  Cú pháp blockquotes là

  ```none
  > text
  ```

  kết quả:

  > text

  ## Escape markdown

  Đôi khi trong khi viết bài bạn sẽ sử dụng những kí kiệu trùng với cú pháp của markdown. Để phân biệt, bạn chỉ cần thêm dấu \ trước những kí hiệu đó là được.

  Ví dụ nếu bạn viết

  ```none
  \*text*
  ```

  thì kết quả sẽ là *text* chứ không phải *text*(in nghiêng)

  ## Viblo advanced Markdown Embedment

  Hiện tại Viblo hỗ trợ chèn link từ **Youtube**, **Vimeo**, **Slideshare**, **Codepen**, **Gist**, **JSFiddle** và **Google Slide**. Cú pháp như dưới đây:

  ### Youtube

  ```none
  {@youtube: Youtube ID or URL}
  ```

  Ví dụ

  ```none
  {@youtube: https://www.youtube.com/watch?v=HndN6P9ke6U}
  ```

  

  <iframe class="embed-responsive-item" type="text/html" src="https://viblo.asia/embed?url=https://www.youtube.com/watch?v=HndN6P9ke6U&amp;provider=youtube" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" style="box-sizing: border-box; position: absolute; top: 0px; bottom: 0px; left: 0px; width: 825px; height: 464.063px; border: 0px;"></iframe>

  

  ### Vimeo

  ```none
  {@vimeo: Vimeo ID or URL}
  ```

  Ví dụ

  ```none
  {@vimeo: https://vimeo.com/62604492}
  ```

  

  <iframe class="embed-responsive-item" type="text/html" src="https://viblo.asia/embed?url=https://vimeo.com/62604492&amp;provider=vimeo" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" style="box-sizing: border-box; position: absolute; top: 0px; bottom: 0px; left: 0px; width: 825px; height: 464.063px; border: 0px;"></iframe>

  

  ### Slideshare

  ```none
  {@slideshare: Slideshare ID or URL}
  ```

  Ví dụ

  ```none
  {@slideshare: http://www.slideshare.net/asanzdiego/markdown-slides-en}
  ```

  

  <iframe class="embed-responsive-item" type="text/html" src="https://viblo.asia/embed?url=http://www.slideshare.net/asanzdiego/markdown-slides-en&amp;provider=slideshare" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" style="box-sizing: border-box; position: absolute; top: 0px; bottom: 0px; left: 0px; width: 825px; height: 464.063px; border: 0px;"></iframe>

  

  ### Codepen

  ```none
  {@codepen: Codepen ID or URL}
  ```

  Ví dụ

  ```none
  {@codepen: https://codepen.io/nickmoreton/pen/gbyygq}
  ```

  

  <iframe class="embed-responsive-item" type="text/html" src="https://viblo.asia/embed?url=https://codepen.io/nickmoreton/pen/gbyygq&amp;provider=codepen" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" style="box-sizing: border-box; position: absolute; top: 0px; bottom: 0px; left: 0px; width: 825px; height: 464.063px; border: 0px;"></iframe>

  

  ### Gist

  ```none
  {@gist: Gist ID or URL}
  ```

  Ví dụ

  ```none
  {@gist: https://gist.github.com/JeffreyWay/207e3bfdb5cafff050a1d75dbf755a5c}
  ```

  

  <iframe class="embed-responsive-item" type="text/html" src="https://viblo.asia/embed?url=https://gist.github.com/JeffreyWay/207e3bfdb5cafff050a1d75dbf755a5c&amp;provider=gist" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" style="box-sizing: border-box; position: absolute; top: 0px; bottom: 0px; left: 0px; width: 825px; height: 464.063px; border: 0px;"></iframe>

  

  ### JSFiddle

  ```none
  {@jsfiddle: JSFiddle URL}
  ```

  Ví dụ

  ```none
  {@jsfiddle: http://jsfiddle.net/kizu/zfUyN/}
  ```

  

  <iframe class="embed-responsive-item" type="text/html" src="https://viblo.asia/embed?url=http://jsfiddle.net/kizu/zfUyN/&amp;provider=jsfiddle" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" style="box-sizing: border-box; position: absolute; top: 0px; bottom: 0px; left: 0px; width: 825px; height: 464.063px; border: 0px;"></iframe>

  

  ### Google slide

  Đối với tài liệu bạn muốn chia sẻ từ Google slide thì bạn cần phải public tài liệu đó để mọi người có thể xem được, rồi dùng link tài liệu đã được public với cú pháp sau:

  ```none
  {@googleslide: document_link}
  ```

  Ví dụ

  ```none
  {@googleslide: https://docs.google.com/presentation/d/1nJ65LUlu9k_tfuQJ4jq4z-qmqOQZ0DjKKw8wn5qnnFA/edit#slide=id.p}
  ```

  

  <iframe class="embed-responsive-item" type="text/html" src="https://viblo.asia/embed?url=https://docs.google.com/presentation/d/1nJ65LUlu9k_tfuQJ4jq4z-qmqOQZ0DjKKw8wn5qnnFA/edit#slide=id.p&amp;provider=googleslide" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" style="box-sizing: border-box; position: absolute; top: 0px; bottom: 0px; left: 0px; width: 825px; height: 464.063px; border: 0px;"></iframe>

  

  Đối với những người mới sử dụng thì hẳn là chưa thể nhớ hết được những cú pháp của markdown, nhưng bạn hãy yên tâm vì bạn luôn có thể xem chỉ dẫn cú pháp markdown bằng cách click vào biểu tưởng dấu hỏi được đính ở phía trên của editor.

  ![img](https://viblo.asia/uploads/46a22192-e47c-440b-aae8-47a0ee4ac96a.png)

  ## Công thức toán học

  Bên cạnh các cú pháp Markdown phổ biến, Viblo còn hỗ trợ viết các công thức toán học theo cú pháp của $ TeX $.