import download from '../assets/img/download-white.svg'
export default function NavBar(){

    return(
         <header>
        <nav>
            <section className="left-section"><p>YazidTach</p></section>
            <section className="mid-section">
                <ul>
                <li>about me</li>
                <li>skills</li>
                <li>projects</li>
                <li>contact me</li>
            </ul></section>
            <section className="right-section">
                <button>resume <img src={download} /></button>
            </section>
        </nav>
    </header>
    )

}