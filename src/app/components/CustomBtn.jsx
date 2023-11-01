'use client'

function Button({onClick}){
    return(
        <button onClick={onClick} type="button">Click here</button>
    )
   
}

export default function CustomBtn() {
    const handler = (event) =>{
        console.log('button click',event)
    }
    return (
        <div>
            <Button onClick={handler}/>
        </div>
    );
}