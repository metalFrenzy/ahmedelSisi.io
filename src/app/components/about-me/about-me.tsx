import './about-me.scss'
import Image from 'next/image'
export default function AboutMe() {
    return (
        <div className="about-me-container">
            <Image alt='' src="assets/mee.svg" width={300} height={300} className='image'></Image>
            <div className="text">
                <h1>About me</h1>
                <p>
                    I’m a Software Engineer who enjoys building things from the ground up — especially when they’re complex or challenging. I’m most at home working full-stack with tools like NestJS, Angular, PostgreSQL, Flutter, and Figma.
                </p>
                <p>
                    I approach problems with structure: I break ideas down visually in my notes, plan them step by step, and then build with clean code and solid architecture. What sets me apart isn’t just my ability to code — it’s how I think. I bring real software engineering practices into everything I do — from user stories and Git workflows to testing and maintainability.
                </p>
                <p>
                    I’m also adaptable. I’ve taken on tasks in unfamiliar tech — like learning Docker from scratch and containerizing a full-stack app in just two days — because I’m always ready to figure things out and get the job done.
                </p>
            </div>
        </div>
    )
}