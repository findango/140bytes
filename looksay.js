f = n => {
    t = 1,     // tally
    i = 0,     // index
    s = '',    // result string
    n = s + n; // n as a string, save one char by re-using s
    for(;c = n[i];)  // c = digit (character)
        c != n[++i]  // if c not same as next digit
            ? (s += t + c) && (t = 1)  // append tally + char, reset tally
            : t++;     // else tally++
    return s  // sad use of 6 extra chars :(
}
