import Btn from './button'

export default function Footer(){
    return(
        <>
        <section className="w-full h-[589px] bg-gray-400">
            <div className="w-[1240px] h-[180px] bg-black rounded-2xl flex m-auto">
                <div className="w-[551px] bg-green-300">
                    <h1 className="text-white font-extrabold uppercase text-4xl">stay upto date about our latest offers</h1>
                </div>
                <div className="w-[349px] bg-green-300">
                    <form action="">
                        <input type="text" placeholder="Enter Your Email Address" />
                        <Btn name='Subscribe to Newsletter' classname='bg-white'/>
                    </form>
                </div>
            </div>

        </section>
        </>
    )
}