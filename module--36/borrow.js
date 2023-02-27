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
const Badam={
    name:"Hello",
    salary:100000,
}

const result= Student.exam.call(Badam);
const result2=Student.treatDey.apply(Badam,[5000])

const result22= Student.treatDey.bind(Badam)//function hishabe
const h= result22(100000)
console.log(h);

console.log(result2);
