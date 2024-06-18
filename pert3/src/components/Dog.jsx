import axios from "axios"
import { useEffect, useState } from "react"

export function Dog () {

    const API = 'https://random.dog/woof.json'
    const [dog, setDog] = useState('')

    useEffect(() => {
      axios.get(API).then((res) => {
        setDog(res.data.url)
      })
    }, [])

    // console.log(dog)

    function renderDogImage() {
        if (dog) {
            return <img src={dog} alt="Dog Img" />
        } else {
            return <h1>Loading...</h1>
        }
    }
    
    return (
        <div>{renderDogImage()}</div>
    )
}