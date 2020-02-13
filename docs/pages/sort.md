# 排序

## quickSort
* 参数：
    * {Array\<any>} array
    * {Function}
* 返回值：有序数组
* 示例
```javascript
  trump.quickSort([1, 5, 3], (a, b) => a < b);
  
  // 也可以省略比较函数（升序）
  trump.quickSort([7, 4, 8]);

  trump.quickSort([{ id:5 }, { id: 6 }], (a, b) => a.id < b.id);
```
