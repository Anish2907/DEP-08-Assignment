function productExceptSelf(nums: number[]): number[] {
    let zeroCount:number=0;
    const product:number = nums.reduce((acc:number,current:number)=>{
        if(current===0){zeroCount++; return acc*1;}
        else return acc*current;
    },1);
    if(zeroCount===0) return nums.map(num=>product/num);
    else if(zeroCount===1) return nums.map(num=>{
        if(num!==0)return 0;
        else return product;
    });
    else return nums.map(num=>0);
};
