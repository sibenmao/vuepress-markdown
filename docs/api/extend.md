# 扩展语法

## 公式

``` md
$$
E = mc^2
$$
```

## 土豆丝

``` md

* [ ] 吃饭
* [x] 睡觉
* [x] 打豆豆

```

* [ ] 吃饭
* [x] 睡觉
* [x] 打豆豆

## 流程图

``` md
    ``` mermaid
    graph TD
        id[带文本的矩形]
        id4(带文本的圆角矩形)
        id3>带文本的不对称的矩形]
        id1{带文本的菱形}
        id2((带文本的圆形))
    ```

``` 

``` md
    ```flow
    st=>start: 开始框
    op=>operation: 处理框
    cond=>condition: 判断框(是或否?)
    sub1=>subroutine: 子流程
    io=>inputoutput: 输入输出框
    e=>end: 结束框
    st->op->cond
    cond(yes)->io->e
    cond(no)->sub1(right)->op
    ```

``` 

## 时序图

也叫顺序图

``` md
    ```sequence
    对象A->对象B: 对象B你好吗?（请求）
    Note right of 对象B: 对象B的描述
    Note left of 对象A: 对象A的描述(提示)
    对象B-->对象A: 我很好(响应)
    对象A->对象B: 你真的好吗？
    ```

``` 

## 甘特图

``` md
    ```mermaid
    %% 语法示例
            gantt
            dateFormat  YYYY-MM-DD
            title 软件开发甘特图
            section 设计
            需求                      :done,    des1, 2014-01-06,2014-01-08
            原型                      :active,  des2, 2014-01-09, 3d
            UI设计                     :         des3, after des2, 5d
        未来任务                     :         des4, after des3, 5d
            section 开发
            学习准备理解需求                      :crit, done, 2014-01-06,24h
            设计框架                             :crit, done, after des2, 2d
            开发                                 :crit, active, 3d
            未来任务                              :crit, 5d
            耍                                   :2d
            section 测试
            功能测试                              :active, a1, after des3, 3d
            压力测试                               :after a1  , 20h
            测试报告                               : 48h
    ```

```
