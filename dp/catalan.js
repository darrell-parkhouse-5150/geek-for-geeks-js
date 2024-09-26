const catalan = (n) => {
    if (n <= 1)
        return n

    let result = 0

    for (let i = 0; i < n; i++)
        result += catalan(i) * catalan(n - i - 1)
    
    return result
}

for (let i = 0; i < n; i++) {
    document.write(catalan(i) + ' ')       
}