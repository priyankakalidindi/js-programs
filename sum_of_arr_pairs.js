function pairSum()
        {
            var str = document.getElementById('value').value;
            var givenSum = document.getElementById('sum').value;
            var a = str.split(",");
            var resultString="";
            for(var i=0;i<a.length;i++)
            {
                for(var j=i+1;j<a.length;j++)
                {
                    if(parseInt(a[i])+parseInt(a[j]) == givenSum)
                    {
                        // document.getElementById('result').innerHTML = ""+a[i]+","+a[j];
                        var temp = '"'+ a[i] + ','+ a[j]+'"<br>';
                        //console.log(rslt);
                        resultString = resultString + temp;
                    }
                }
            }
            document.getElementById('result').innerHTML = resultString;
        }