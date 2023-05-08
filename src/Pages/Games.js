import Header from "../Component/Header";

export default function Games(){
    return (
        <>
            <Header/> <br/><button
    type="button"
    class="inline-block rounded-l border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
    data-te-ripple-init
    data-te-ripple-color="light">
        <a href="http://localhost:3000/AboutMe">About Me</a>
  </button>
  <button
    type="button"
    class="-ml-0.5 inline-block border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
    data-te-ripple-init
    data-te-ripple-color="light">
    <a href="http://localhost:3000/Games">Games</a>
  </button>
  <button
    type="button"
    class="-ml-0.5 inline-block rounded-r border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
    data-te-ripple-init
    data-te-ripple-color="light">
    <a href="http://localhost:3000/LikesDislikes">Likes/Dislikes</a>
  </button>
  <button
    type="button"
    class="-ml-0.5 inline-block rounded-r border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
    data-te-ripple-init
    data-te-ripple-color="light">
    <a href="http://localhost:3000/Hobbies">Hobbies</a>
  </button>
  <button
    type="button"
    class="-ml-0.5 inline-block rounded-r border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
    data-te-ripple-init
    data-te-ripple-color="light">
    <a href="http://localhost:3000/Music">Music</a>
  </button> <br/> <br/>
            <div className="container inline-block block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-700 vh-100 w-96 place-content-center">
                <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 text-4xl"><h2>Games I Play</h2></div>
                    <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        <p>League of Legends</p>
                        <p>Genshin Impact</p>
                        <p>Arknights</p>
                        <p>Honkai Star Rail</p>
                        <p>Monster Hunter</p>
                        <p>Valorant</p>
                        <p>Apex Legends</p>
                        <p>Rainbow Six Siege</p>
                        <p>Risk of Rain 2</p>
                        <p>Valheim</p>
                        <p>Overwatch</p>
                    </div>
                    
            </div> <br/> <br/>
            <button
    type="button"
    class="-ml-0.5 inline-block rounded-r border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
    data-te-ripple-init
    data-te-ripple-color="light">
    <a href="http://localhost:3000/Home">Home</a>
  </button>
        </>
    )
}