import Hero from "../../components/Hero";
import supplychain from "../../assets/supplychain crm.mp4"
import Blog from "../../components/Blog";
const Home = () => {
    return (
        <>
            <main className="pt-14 flex-auto gap-10 relative">
                <Hero />

                <section className="relative">
                    <video className="h-[400px] -z-50 w-full object-cover" src={supplychain} autoPlay muted loop />
                    <div className="absolute w-full h-full inset-0 flex justify-center items-center backdrop-blur-sm bg-[#7797bc69]">
                        <h2 className="text-white text-3xl">Chatbot Video Section</h2>
                    </div>
                </section>
                <section className="relative">
                   <Blog></Blog>
                </section>

            </main >
        </>
    )
}

export default Home;