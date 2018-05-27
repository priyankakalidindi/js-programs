function checkPalindromeArray() {
    var input = document.getElementById('value').value;
    var a = input.split(",");
    var b = [];
    var i,j,f=0,l=0;
    for(var k=0;k<a.length;k++)
    {
        f=0;
        temp = a[k].toLowerCase();
        for(i=0, j=temp.length-1; i<=j; i++, j--)
        {
            if(temp[i]!=temp[j])
            {
                f=1;
                break;
            }                
        }
        if(f==0)
            b[l++] = temp;
    }
    document.getElementById('result').innerHTML = '[' + b.join(", ") +']';
}