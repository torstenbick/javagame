import wor from "../scripts/java-words";
import {useEffect, useState} from "react";
export default function Landing() {
    const [words, setWords] = useState(wor)
    const [index, setIndex] = useState(0)
    const randomize = () => words.sort(() => Math.random() - 0.5)

    useEffect(() => {
        setWords(randomize())
    }, [])



    return (
        <div className="flex flex-col items-center min-h-screen gap-16 p-8 text-center md:p-16 md:py-24">
                <h1 className="text-4xl font-bold text-center text-white">Java</h1>
                <button className="px-4 py-2 text-2xl font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={() => {
                    setIndex(index + 1)
                    if(index === words.length - 1){
                        setWords(randomize())
                        setIndex(0)
                    }
                }}>Next word</button>
                <p className="text-4xl font-bold text-center text-white">{words[index].word}</p>
            <p className="text-4xl font-bold text-center text-white">{words[index].definition}</p>

        </div>
// <footer>
//     <p className="text-4xl font-bold text-center text-white">By Torsten Brickley</p>
// </footer>

    )

}