function fact()
        {
            var n=document.getElementById('value').value;
            var fact=1;
            if(n<0)
                alert('Number cannot be negative');
            else if(n==0)
                alert('1');
            else 
                for(var i=1;i<=n;i++)    
                    fact*=i;
            document.getElementById('result').innerHTML = fact;
        }