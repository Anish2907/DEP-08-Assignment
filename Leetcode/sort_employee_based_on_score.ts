function sortEmployees(employeeObj:{name:string,dob:string,score:number}[]):{name:string,dob:string,score:number}[]{
    return employeeObj.sort((employee1,employee2)=>employee1.score - employee2.score);
}

console.log(sortEmployees([
    { name: 'John', dob: 'Dec 15, 2007', score: 80 },
    { name: 'Ana', dob: 'Jan 15, 2009', score: 75 },
    { name: 'Zion', dob: 'Feb 15, 2011', score: 90 }
]));