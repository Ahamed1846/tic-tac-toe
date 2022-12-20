let boxes=document.querySelectorAll('.box')
click=0
const xIndex=[]
const oIndex=[]
combinations=[
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [1,5,9],[3,5,7]
]
var count=0
cond=true
function rld(){
    window.location.reload()
}
function checker(){
    if (click%2!=0){
        for(let i=0;i<combinations.length;i++){
            count=0
            for(let j=0;j<combinations[i].length;j++){
                for(let k=0;k<xIndex.length;k++){
                    if(combinations[i][j]==xIndex[k]){
                        count+=1
                    }
                }
            }
            if (count==3){
                cond=false
                window.alert('Player X wins')
                rld()
            }
        }
    }else if(click%2==0){
        for(let i=0;i<combinations.length;i++){
            count=0
            for(let j=0;j<combinations[i].length;j++){
                for(let k=0;k<oIndex.length;k++){
                    if(combinations[i][j]==oIndex[k]){
                        count+=1
                    }
                }
            }
            if (count==3){
                cond=false
                window.alert('Player O wins')
                rld()
            }
        }
    }if(click==9 && cond==true){
        console.log('test')
        window.alert('Tie')
        rld()
    }
}
let button=document.getElementById('button')
button.onclick=()=>{
    rld()
}
function inputSelector(box,click){
    if (click%2!=0){
        box.innerHTML='X'
    }else{
        box.innerHTML='O'
    }
    console.log(click)
    checker()
}

boxes.forEach(box=>{
    box.onclick=(e)=>{
        click+=1
        if (click%2!=0){
            xIndex.push(Number(e.target.id))
        }else{
            oIndex.push(Number(e.target.id))
        }

        inputSelector(box,click)
    }
})
