//将js数学运算(math.js)转化为latex
/*
(a)/(b)=>\frac{a}{b}
sqrt()=>\sqrt{}
a*b=>a \cdot b
*/
function js_to_latex(a) {
    //处理分式
    //frac_1 处理符号两边都有括号的方式
    function frac_1(a) {
        var t = a.indexOf("/");
        if (t == -1) return a;
        var result = "";
        if (a[t - 1] === ")" && a[t + 1] === "(") {
            result = a.substring(0, bracketright(a, t - 1)) + "\\frac{" + a.substring(bracketright(a, t - 1) + 1, t - 1) + "}{" + a.substring(t + 2, bracketleft(a, t + 1)) + "}" + a.substring(bracketleft(a, t + 1) + 1, a.length);
            return frac_1(result);
        }
    }
    //处理除号两边都没有括号的分数
    function frac_2(a) {
        var t = a.indexOf("/");
        if (t == -1) return a;
        var result = "";
        if (a[t - 1] !== ")" && a[t + 1] !== "(") {
            result = a.substring(0, t - 1) + "\\frac{" + a[t - 1] + "}{" + a[t + 1] + "}" + a.substring(t + 2, a.length);
            return frac_2(result);
        }
    }
    //处理根式
    function sqrt(f) {
        //预处理函数,将所有括号替换为大括号
        function pre(a) {
            if (a.indexOf("sqrt") == -1) return a;
            var t = a.indexOf("sqrt");
            var tt = bracketleft(a, t + 4);
            var result = a.substring(0, t) + "¥{" + a.substring(t + 5, tt) + "}" + a.substring(tt + 1, a.length); //此处使用特殊符号,是因为sqrt4个字母不会被替换，会导致递归无限循环
            return sqrt(result);
        }
        return pre(f).replaceAll("¥", "\\sqrt");
    }
    //处理乘法
    function times(a) {
        return a.replaceAll("*", " \\cdot ");
    }
    a = frac_1(a);
    a = frac_2(a);
    a = sqrt(a);
    a = times(a);
    return a;
              }
