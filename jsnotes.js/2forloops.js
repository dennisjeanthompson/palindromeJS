let num1  = 9;
let num2 = 7
for(let i = 0 ; i < num1;i++)
    {
        //this shit would incriment 
        for(let j = 0; j < num2; j++)
            {
                // this shit would incriment first and 
                console.log(i, j+"j");
            }
    }
    let col  = 10 ;
    let row = 5;
    let pattern =new Array(row);


    console.log(pattern);

    for(let i = 0; i < row; i++)
        {
          
            pattern[i] = new Array(col).fill("*");
            console.log(pattern[i]);
        }
        const count = 2;
        const array= []
console.log("array");
console.log("");
console.log("----------------------------------------------------");
const sus = 9;
const susi= 5;
let kiss  = new Array(sus)

for(let i = 0; i <= sus ; i++)
    {
        kiss[i] = new Array(susi).fill(' ');
    }
for(let i = 0;i <=  sus; i++)
    {
        for(let j= 0;j<= susi;j++)
            {
                if((j === 2 && i >= 3)||(j=== 1 && i >= 6)||(j ===3 && i >=6))
                    {
                       kiss[i][j] = "*"; 
                    }
            }
    }

    function prints(kiss)
    {
       
        for(let i = 0  ; i< kiss.length ;i++)
            {
                let sok = "";
                for(let j = 0; j < kiss[i].length;j++)
                    {
                        sok += kiss[i][j];
                    }
                    console.log(sok);
            }   

        
    }

 prints(kiss);










        










        










        










        