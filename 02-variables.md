# 🔤 变量与数据类型

## 一、什么是变量？

变量就像是我们用来存储东西的盒子。在编程中，变量用来存储数据，这些数据可以是数字、文字、真假值等。

## 二、基本数据类型

### 1. 整数类型 (int)
用来存储整数，如10、-5、0等。

### 2. 浮点数类型 (float/double)
用来存储带小数点的数，如3.14、-0.5等。
- float: 单精度浮点数，精度较低
- double: 双精度浮点数，精度较高

### 3. 字符类型 (char)
用来存储单个字符，如'a'、'1'、'+'等。需要用单引号括起来。

### 4. 布尔类型 (bool)
用来存储真假值，只有两个可能的值：true(真)和false(假)。

## 三、变量的命名规则

1. 只能包含字母、数字和下划线(_)
2. 不能以数字开头
3. 不能使用C++关键字（如int、float等）
4. 区分大小写（如age和Age是不同的变量）

## 四、变量的声明和初始化

```cpp
#include <iostream>
using namespace std;

/**
 * @main 主函数，演示变量的声明和初始化
 * @return 0表示程序正常结束
 */
int main() {
    // 变量声明
    int age;
    float height;
    char grade;
    bool isStudent;

    // 变量初始化
    age = 12;
    height = 1.55;
    grade = 'A';
    isStudent = true;

    // 声明并初始化
    int score = 95;

    // 输出变量值
    cout << "年龄: " << age << endl;
    cout << "身高: " << height << "米" << endl;
    cout << "等级: " << grade << endl;
    cout << "是否学生: " << (isStudent ? "是" : "否") << endl;
    cout << "分数: " << score << endl;

    return 0;
}

```