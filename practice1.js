const student = 
{
    name:'dolon',
    roll: 181,
    sub: ['bangla','english','math','social'],
    tuition: 3000,
    daffodilian: true,
    position: function()
    {
       return (this.name,'is a student of ',this.daffodilian);
    },
    address:{
        street:'123 main ST',
        city: 'Dhaka',
        country:'Bangladesh'
    }
}

const myself = ` my name is ${student.name}. my id is ${student.roll}, my week subject is ${student.sub[1]}, i am a ${student.daffodilian}, my favoutire place is ${student.address.city}`;

// console.log(myself);

const zero =() =>
{
    return 89;
}
// console.log(zero());


const oneParaMeterArrow = (parameter) =>
{
   return parameter = parameter / 17;
}
// console.log(oneParaMeterArrow(34));

const twoparamterArrow = (one,two) =>
{
    const add = one + two;
    return add /2;
}
// console.log(twoparamterArrow(4,2));

const students = [7,14,21,28,35];
const dividedNum = students.map(num  => num /7);
console.log(dividedNum);
