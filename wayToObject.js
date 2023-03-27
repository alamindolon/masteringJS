const teacher =
{
    name: 'karim',
    tuitionFee: 3000,
    study: ['math' , 'science', 'islam'],
    position: function(){
       console.log( this.name ,'is a high school Teacher ');

    },

    improveExam: function(subject)
    {
        this.position();
        return ` ${this.name} is takeing improvement exam on ${subject}`
    },

    treatDey: function(amount)
    {
        this.tuitionFee = this.tuitionFee -amount;
        return this.tuitionFee;
    }
}
teacher.position();

const retack = teacher.improveExam('data Science');
console.log(retack);

const treatDayLunch = teacher.treatDey(700);
console.log('Lunch Treat:',treatDayLunch);

const treatDayDinner = teacher.treatDey(700);
console.log('Dinner Treat:',treatDayDinner);
