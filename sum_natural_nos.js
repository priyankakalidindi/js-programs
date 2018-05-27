function sum()
        {
            var n=document.getElementById('value').value;
            var s1,s2,s3;
            s1=n;
            s2=parseInt(n)+parseInt(1);
            s3=s1*s2;

            document.getElementById('result').innerHTML = s3/2;
        }