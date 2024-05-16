import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

const News = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5174/api/news')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(e => console.error(e))
    }, [])

    return (
        <>
            <h1 className='text-2xl font-bold text-center my-4'>Liste des News</h1>
            <Input className='mx-auto my-4 w-3/5 rounded-md border-gray-600 placeholder:text-opacity-80' />
            <div className="divide-y divide-dashed">
            {
                data.length > 0 ? data.map((news, index) => (
                    <div className="mx-4 content-center mb-5" id={index}>
                        <a href = "#">
                        <div>
                            <img className='size-1/4 float-left mr-3' alt={news.title} src={news.image} />
                            <h1 className='text-2xl font-bold my-4 scroll-ml-96'>{news.title}</h1>
                            <p className="scroll-ml-16">{news.description}</p>
                        </div>
                        </a>
                    </div>
                ))
                :
                <p className="text-center">Aucune donnée disponible</p>
            }
            </div>
        </>
    );
}

export default News