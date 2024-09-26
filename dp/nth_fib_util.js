const nth_fib_util = (n, memo) => {
    if (n <= 1)
        return n

    if (memo[n] !== -1) 
        return memo[n]

    memo[n] = nth_fib_util(n - 1, memo) + nth_fib_util(n - 2, memo)
}