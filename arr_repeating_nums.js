function repeatValues()
{
    var str = document.getElementById('value').value;
    var a = str.split(",").sort();
    var resultString="", count = 0,i,j,t,u;
    for(i=0;i<a.length-1;i++)
    {
        count = 0;
        t = parseInt(a[i]);
        for(j=i+1;j<a.length;j++)
        {
            u = parseInt(a[j])
            if(t == u)
                count++;
            else 
                break;
        }
        if(count>0)
        {
            resultString = resultString+ '"' + t +'"<br>';
            i=j-1;
        }
    }
    document.getElementById('result').innerHTML = resultString;
}