import './landing.scss'

export default function landing() {
    return (
        <div className="cover-page">
            <div className="text-overlay">
                <h1 className="title">
                    Ahmed El Sisi<br />
                    <span className="subtitle">Software Engineer</span>
                </h1>
                <p>I think like a designer, build like an engineer, and ship like I’ve got something to prove.</p>
                <div className="action-buttons">
                    <button className='view'>View projects</button>
                    <a href="/assets/Ahmed-El-Sisi_CV.pdf" download className="download">
                        Download resume
                    </a>
                </div>
            </div>
        </div>
    )

}