## 📌 Sass란? 
- Sass는 CSS로 컴파일 되는 스타일 시트 확장 언어, CSS 전처리기의 하나  
- 브라우저가 Sass를 직접 로딩하지 않고, 개발은 Sass를 기반으로 한 후, CSS로 export
<br>

## 📌 Sass 기술방식 2가지
- .sass 기술방식과 .scss방식 → 다른 파일 확장자 사용
- Sass와 Scss가 있는데 일반적으로 CSS와 좀 더 유사하고 중괄호를 사용하는 방식 SCSS를 사용  
```SCSS
$font-stack: Helvetica, sans-serif;
$primary-color : #333;

body {
	font: 100% $font-stack
	color: $primary-color
}
```  
```Sass
$font-stack: Helvetica, sans-serif
$primary-color : #333

body 
	font: 100% $font-stack
	color: $primary-color
```
<br>

## 📌 S & SCSS 쓰는 이유
- 스타일시트가 커지고 복잡해지면 유지관리가 어려움
- Sass 안에 있는 변수(variable), 중첩(Nesting), 믹스인(Mixin), 가져오기, 상속, 내장기능 등 css에는 없는 편의 기능들이 있어 시간 절약 가능  
<br>

## 📌 파일 분리
- 파일을 스타일, 기능 별로 분리하여 사용 가능 
- 파일을 기능, 레이아웃 별로 분할해서 사용하기 때문에 코드 관리하기 편리  
- 아래의 이미지처럼 프레임별(_header.scss, _home.scss)css를 분리하고, variable과 mixin 파일도 따로 분리  
<br>

 ![스크린샷 2023-04-07 174926](https://user-images.githubusercontent.com/117449788/230576839-71ca1cda-245a-4163-99b9-c4d20aaef959.png)

- 메인 파일인 style.scss에 분리했던 파일들을 import함
- 이때, style.scss 파일에는 @import와 주석 외에는 다른 코드들을 작성하지 않음  
<br>

 ![스크린샷 2023-04-07 175336](https://user-images.githubusercontent.com/117449788/230577577-44e79aea-3227-4643-a06b-0aa9c504264c.png)  
<br>

## 📌 파일명 앞에 언더바 _를 붙이는 이유
- 언더바를 붙이지 않으면 분할 된 파일들 모두가 컴파일 되기 때문에 여러개의 .css파일을 나눠서 저장
- 하지만, scss파일 이름 앞에 언더바를 붙여서 파일을 저장하면, Sass에게 이 파일이 main파일의 일부분임을 알려줌 
- 그러니, 해당 파일은 css파일로 컴파일하지 않고 내부에서 @import 형태로 작동

  ※ css는 import할 때 파일 URL을 적어줘야 하지만, Sass에서는 확작명을 제외하고 파일명만 사용 



