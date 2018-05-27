function count() {
    var n=document.getElementById('value').value;
    var c=0,d=1,e=0;
    for(var i=1;d<n;i++)
    {
        d=Math.pow(2,i);
        if(d<n) 
        c=i; 
        
    }
    document.getElementById('result').innerHTML = c;
}