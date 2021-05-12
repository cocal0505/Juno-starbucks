# Starbucks


### 스타벅스 사이트 링크
***
- https://quizzical-perlman-5f1c65.netlify.app/
***


### SCSS  / 자식선택자 / 상위 선택자 참조/ 중첩된 속성 / 변수 

``` scss


$size : 100px;   // 전역 변수// // 유효 범위 주의 // // block scope 와 global scope 주의 


.list {
    li {    // 중첩된 속성 // 
      padding: {
        top:$size;
        bottom:$size;
      }




      background-color: orange;
      width:$size;
      height:$size;

      &:last-child{   //  상위 선택자 참조 // 
          margin-top:10px;
      }
    }

    
}


``` 


### mixin

```scss

@mixin box ($size: 100px , $color:tomato){          // ($인수 : $인수 || 자동 인수 )
  width: $size;
  height:$size;
  background-color: $color;
}

@mixin center{
  display: flex;
  justify-content: center;
  align-items: center;
}




.container {
  @include box(200px,royalblue);
  @include center;
  .item{
    @include box($color:red);    // 순서와 상관 없이 입력하려면 $color 라는 키워드 변수를 넣어야 함.// 
    text-align: center;
    line-height: 100px;
  }
}


```
### scss 내장 함수 

```scss
.container{
  $color:royalblue;
  width: 200px;
  height:200px; 
  margin:20px;
  border-radius: 10px;
  background-color: $color;
  &:hover{
    background-color: darken($color,20px); ///색상의 20% 만큼 어둡게 만듬// 
  }
  &.item{
    background-color: mix($color,red);  // 두가지 색상을 섞는다. 오 신기 // 
    background-color: lighten($color,10%);  // 색상 10% 만큼 밝게 만듬 
    background-color: saturate($color,40%);  // 체도 변경 올림// 
    &:hover{
      background-color: desaturate($color,40%);  // 체도 변경 낮춤 // 
      background-color: invert($color); // 색상 반전 // 
      background-color: rgba($color , .5); // 투명도 조절// 


    }
  }
}




```