f = n => {
    t = 1
    return ('' + n).split('').reduce((p,c,i,a) => {
        m = (a[i+1] != c)
        p += m ? (t + c) : ''
        t = m ? 1 : t+1
        return p
    },'')
}