function checkPalindrome() {
    var input = document.getElementById('value').value;
    input = input.toLowerCase();
    var a = input.split("");
    var i,j,f=0;
    for(var i=0, j=a.length-1; i<=j; i++, j--)
    {
        if(a[i]!=a[j])
        {
            f=1;
            break;
        }                
    }
    if(f==1)
        document.getElementById('result').innerHTML = input + ' is a not a palindrome';
    else
        document.getElementById('result').innerHTML = input + ' is a palindrome';
}