function fizzBuzz() {
    var n=document.getElementById('value').value;
    var ans=" ";
    for(var i=1;i<=n;i++)
    {
        if(i % 3 == 0 && i % 5 !=0 )
            ans+="Fizz,";
        else if(i % 5 == 0 && i % 3 !=0)
            ans+="Buzz,";
        else if(i % 3 == 0 && i % 5 == 0)
            ans+="FizzBuzz,";
        else 
            ans+=i+",";    
    }
    document.getElementById('result').innerHTML = ans;
}