import Header from "../Component/Header";

export default function LikesDislikes(){
    return (
        <>
            <Header/>
            <div className="container flex flex-col flex-wrap block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700 vh-100 w-96 place-content-center">
            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 text-4xl"><h2>Likes/Dislikes</h2></div>
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Likes</h5>
            <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            <p>Video Games</p>
            <p>Music</p>
            <p>My Dog</p>
            <p>Coffee</p>
            <p>Rain</p>
            </div>
            <br/>
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">Dislikes</h5>
            <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            <p>Hot Weather</p>
            <p>Cakes</p>
            </div>
            </div>
        </>
    )
}