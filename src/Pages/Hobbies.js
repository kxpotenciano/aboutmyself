import Header from "../Component/Header";

export default function Hobbies(){
    return (
        <>
            <Header/>
            <div className="container flex flex-col flex-wrap block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700 vh-100 w-96">
                <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 text-4xl"><h2>Hobbies</h2></div>
                    <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        <p>Play Video Games</p>
                        <p>Listen to Music</p>
                        <p>Hang out with my friends</p>
                        <p>Watch Movies, YouTube, TikTok</p>
                        <p>Photography</p>
                        <p>Dancing</p>
                        <p>Arts and Crafts</p>
                    </div>
            </div>
        </>
    )
}