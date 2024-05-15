import { Input } from "@/components/ui/input"

const News = () => {
    return (
        <>
            <h1 className='text-2xl font-bold text-center my-4'>Liste des News</h1>
            <Input className='mx-auto my-4 w-3/5 rounded-md border-gray-600 placeholder:text-opacity-80' />
            <div class="divide-y divide-dashed">
                <div className="mx-4 content-center mb-5">
                    <a href = "#">
                    <div>
                        <img className='size-1/4 float-left mr-3' alt="Site" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQU8ylKN8VWso8y8rr1so6bulaJerZr-YMcsYoBITfsg&s" />
                        <h1 className='text-2xl font-bold my-4 scroll-ml-96'><a href = "#">Site</a></h1>
                        <p className="scroll-ml-16">Ipnum</p>
                    </div>
                    </a>
                </div>
                <div className="mx-4 content-center mb-5">
                    <a href = "#">
                    <div>
                        <img className='size-1/4 float-left mr-3' alt="Site" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQU8ylKN8VWso8y8rr1so6bulaJerZr-YMcsYoBITfsg&s" />
                        <h1 className='text-2xl font-bold my-4 scroll-ml-96'><a href = "#">Site</a></h1>
                        <p className="scroll-ml-16">Ipnum</p>
                    </div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default News