function topKFrequent(nums: number[], k: number): number[] {
    const map: Map<number,number> = new Map();
    nums.map((num:number)=>{
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1);
        }
    });

    const result=Array.from(map.entries())
                                .sort((a,b)=>b[1]-a[1])
                                .map(pair=>pair[0]);
                                
    return result.slice(0,k);
};
