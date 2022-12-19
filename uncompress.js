function uncompress(str) {
    let string = "";
    for (let i = 0; i < str.length; i+=2) {
        const num = Number(str[i+1])
        
        for (let j = 0; j < num; j++) {
            string += str[i]
        }
    }
    
    return string;
}




console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
console.log(uncompress('b1o2t1')); // 'boot'
