import {useState} from 'react'

export const Item = () => {

    const [info, setInfo] = useState('')

    const handleclick = () => {

    const Info = (info) => {

    }
    const ErrorInfo = () => {

    }

    let InfoItem = new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve ('id, title, description, price, pictureURL')
        }, 2000);
    })
    .then((info) => {
        setInfo(info)
        console.log('producto:', info)
    })
    .catch((e) => {
        console.log('ERROR', e)
    })
}

return (
    <div className='App'>
            <h1>promises</h1>
            <button onClick={handleclick}>INFO DEL ITEM</button>
            <h2>{info}</h2>
    </div>
)
}