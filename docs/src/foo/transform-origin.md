# transform-origin

**现象**

css属性 transform-origin 具有默认值， 分别是宽高的一半，z 轴值缺省

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>About css property: transform-origin </h1>
    <script>
        var $tag$ = document.querySelector('h1') 
        console.log(window.getComputedStyle($tag$).getPropertyValue('transform-origin'))
        // 760px 20.8px
    </script>
</body>
</html>
```