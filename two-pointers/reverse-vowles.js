const reverse_vowles = (s) => {
    const vowles = 'aeiouAEUIU'
    s = s.split('')

    let left = 0, right = s.length - 1

    while (left < right) {
        if (!vowles.includes(s[left]))
            left++

        else if (!vowles.includes(s[right]))
            right --

        else {
            [s[left], s[right]] = [s[right], s[left]]
            left++
            right--
        }
    }

    return s.join('')
}