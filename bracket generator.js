function bracket(count, s='', left=0, right=0) {  
    if (left == count && right == count) alert(s)
    if (left < count) bracket(count, s + '(', left+1, right)
    if (right < left) bracket(count, s + ')', left, right+1)
}

bracket(2)
