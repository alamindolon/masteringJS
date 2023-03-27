const karimAli =
{
    name: 'karim',
    tuitionFee: 3000,
    study: ['math' , 'science', 'islam'],
    position: function(){
      return( this.name ,'is a high school Teacher ');

    },

    improveExam : function(subject)
    {
        this.position();
        return ` ${this.name} is takeing improvement exam on ${subject}`
    },

    mainBalance: function(amount,tips)
    {
        this.tuitionFee = this.tuitionFee -amount - tips;
        let pay = 7000;
      const fee = pay - this.tuitionFee;
        return fee;
    },

    treatDey: function(amount,tips)
    {
        this.tuitionFee = this.tuitionFee -amount - tips;
       
        return this.tuitionFee;
       
    }
}

// const result2 = karimAli.improveExam.call(karimAli,'engilsh');
// // console.log(result2);

const bithdayTreat = karimAli.mainBalance.call(karimAli, 300,40);
console.log(bithdayTreat);

const pohelaboishak = karimAli.treatDey.apply(karimAli, [300,60]);
console.log(pohelaboishak);

const treat = karimAli.treatDey.bind(karimAli);
const remaining = treat(200, 30);
console.log(remaining);