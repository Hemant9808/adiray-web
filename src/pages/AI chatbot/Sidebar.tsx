import { useState } from "react"
import { FaChevronRight } from "react-icons/fa"
import { FaChevronLeft } from "react-icons/fa6"
import { NavLink } from "react-router-dom"


const Sidebar = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <FaChevronRight className=" fixed top-1/2 left-4" onClick={() => setOpen(!open)} />
            {
                open && (
                    <aside className="absolute w-64 top-0 left-0 min-w-52 p-6 bg-[#EEE] h-screen resize-x overflow-auto border-2 border-[#d9d9d9]">
                        <FaChevronLeft className="absolute top-1/2 right-0 z-50" onClick={() => setOpen(!open)} />
                        <nav className="flex flex-col justify-between h-full">
                            <menu className="grid gap-4">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/chatbot/newchat">New Chat</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/chatbot/news">News</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/chatbot/p1">Parameter 1</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/chatbot/p2">Parameter 1</NavLink>
                                </li>
                            </menu>

                            <menu>
                                <button className="flex items-center gap-2">
                                    <div className="w-10 h-10 border-2 rounded-full border-purple-600">
                                        <img className="rounded-full" src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1545" alt="user" />
                                    </div>
                                    <span>username</span>
                                </button>
                            </menu>
                        </nav>
                    </aside>
                )
            }
        </>
    )
}

export default Sidebar