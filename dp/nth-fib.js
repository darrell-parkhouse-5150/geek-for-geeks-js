const nth_fib = (n) => {
    if (n  <= 1)
        return n

    return nth_fib(n - 1) + nth_fib(n - 2)
}

let n = 5
let result = nth_fib(n)
console.log(result)
