# js-to-latex-tool
1.介绍
这个js库能够将js代码中的数学运算符转换成latex中的代码 如 
(a)/(b)=>\frac{a}{b} 
sqrt()=>\sqrt{} 
a*b=>a \cdot b       

2.安装与应用
直接将该js文件下载并引入项目即可使用
如:<script src="js-to-latex.js"></script>

3.使用
它只有一个方法
js-to-latex();
输入一个字符串参数,他将返回转化后的latex代码

4.使用实例
js_to_latex("sqrt((x+y)/(x-y))");
输出:\sqrt{\frac{x+y}{x-y}}

5.注意事项:
概括目前只能完成乘法,加法，减法，除法,幂运算,根式.



Here is the translation of the provided content into English:
• Introduction
This JavaScript library can convert mathematical operators in JavaScript code into LaTeX code,such as:
(a)/(b)=>\frac{a}{b}
sqrt()=>\sqrt{}
ab=>a\cdot b

• Installation and Application
Simply download the JavaScript file and include it in your project to use it.
For example:
<script src="js/js-to-latex.js"></script>

• Usage
It has only one method:
js-to-latex();
Input a string parameter,and it will return the converted LaTeX code.

• Example of Use
js_to_latex("sqrt((x+y)/(x-y))");
Output:\sqrt{\frac{x+y}{x-y}}

• Notes:
Currently,it can only handle multiplication,addition,subtraction,division,exponentiation,and radicals.
