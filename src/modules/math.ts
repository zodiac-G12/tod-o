export const minform = (a: number, n: number, xs: number[]) => {
    const b = a + 1 + Math.floor(n / 2);
    const us = xs.filter(i => i < b);
    const vs = xs.filter(i => i >= b);
    const m = us.length;

    if (n === 0) return a;
    if (m === b-a) return minform(b, n-m, vs);
    return minform(a, m, us);
};

// const g = [1,3,2,4,5,10,9,8,6];
//
// console.log(minform(0,g.length,g));
// > 0

// const s = [0,1,3,2,4,5,10,9,8,6];
//
// console.log(minform(0,s.length,s));
// > 7
