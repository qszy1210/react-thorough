// fib一个模拟栈实现的方式
function fib(n) {
    let fiber = { arg: n, returnAddr: null, val: 0 };
    // 标记循环
    rec: while (true) {
        // 当展开完全后，开始计算
        if (fiber.arg <= 2) {
            let sum = 1;
            // 寻找父级
            while (fiber.returnAddr) {
                fiber = fiber.returnAddr;
                if (fiber.val === 0) {
                    fiber.val = sum;
                    fiber = { arg: fiber.arg - 2, returnAddr: fiber, val: 0 };
                    continue rec;
                }
                sum += fiber.val;
            }
            return sum;
        } else {
            // 先展开
            fiber = { arg: fiber.arg - 1, returnAddr: fiber, val: 0 };
        }
    }
}

function fibn(n) {
    if (n <=2) {
        return 1
    }
    return fibn(n-1) + fibn(n-2)
}

console.log(fib(11))
console.log(fibn(11))