function Home() {
    return (
        <>
            <header>
                <div className="contenido-header">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">DataNasa</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    <a class="nav-link" href="/"> HOME </a>
                                    <a class="nav-link" href="#marspics"> MARS PICS </a>
                                    <a class="nav-link" href="#picotd"> PIC OF THE DAY </a>
                                    <a class="nav-link" href="#naturalevents"> NATURAL EVENTS </a>
                                    <a class="nav-link" href="/AboutUs"> ABOUT US</a>
                                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                </div>
                            </div>
                            <div>
                                <img alt="" style={{ height: "30px" }} src="recursos/data-nasa-logo.jpg" />
                            </div>
                        </div>
                    </nav>

                </div>
            </header>
            <section id="home">
                <main>
                    <div className="home-content">
                        <div className="text">
                            <h1> Explore the universe with NASA DATA</h1>
                            <h3> Where rocket science meets information in your hands</h3>
                        </div>
                        <div className="options">
                            <div className="fc">
                                <div className="overlay-container">
                                    <div className="overlay">
                                        <a href="#marspics">
                                            <img style={{ height: '150px' }} alt="mars" src="recursos/mars.jpg" />
                                        </a>
                                        <div className="info">
                                            <h4> Explore Mars </h4>
                                            <p> View pictures of Mars by the Curiosity Rover. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay-container">
                                    <div className="overlay">
                                        <a href="#naturalevents">
                                            <img style={{ height: '150px' }} alt="volcano" src="recursos/volcan.jpg"
                                            />
                                        </a>
                                        <div className="info">
                                            <h4> Natural Events </h4>
                                            <p> Stay update on all the volcanoes, wildfires, and Iceberg currently active. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sc">
                                <div className="overlay-container">
                                    <div className="overlay">
                                        <a href="#picotd">
                                            <img style={{ height: '150px' }} alt="" src="recursos/aurora-boreal.jpg" />
                                        </a>
                                        <div className="info">
                                            <h4> Pic Of The Day </h4>
                                            <p>Nasa publishes a Picture of the Day, every day.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Home;