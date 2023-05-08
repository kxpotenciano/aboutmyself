import Header from "../Component/Header";
import Jas from "./Jasmine.jpg"
export default function Home(){
    return(
        <>
        <Header/>
        <br/>
        <div class="inline-flex" role="group">
  <button
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
  </button>
</div> <br/> <br></br>
        <img src={Jas} className="inline-block h-[500px] w-[500px]"></img>
        </>
    )
}

