const Student={
    name:'Mostakem',
    age:22,
    salary:5000,
    subject:['math','physics','english'],
    exam: function(){
        console.log(this.name,' it is my name');
    },
    hello : function(){
        return this.age + ' this is my age';
    },
    treatDey:function(amount){
        this.salary-=amount;
        return this.salary;
    }
}
Student.exam();
const ret= Student.hello();
console.log(ret);
const amount=Student.treatDey(1000);
console.log(amount)