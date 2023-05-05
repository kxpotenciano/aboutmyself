import Header from "../Component/Header";

export default function AboutMe(){
    return (
        <>
            <Header/>
            <div className="container flex flex-col flex-wrap block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700 vh-100 w-96 place-content-center">
                <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 text-4xl"><h2>About Me</h2></div> 
                    <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        <p>Name: Kirk Xavier A. Potenciano</p>
                        <p>Address: Antipolo, Rizal | Sampaloc, Manila</p>
                        <p>Email: <a href="#">kxpotenciano@gmail.com</a></p>
                        <a href="https://www.facebook.com/kirkpotenciano">https://www.facebook.com/kirkpotenciano</a>
                    </div>
            </div>
        </>
    )
}