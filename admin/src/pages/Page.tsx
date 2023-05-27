export default function Page() {
    const scrollElement = () => {
        const element = document.getElementById('conteudo');
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <header id="header">
                <div className="wrapper-nav">
                    <div className="wrapper-center">
                        <a
                            className="logo"
                            href="https://nwadv.com.br/pt/"
                            title="Nelson Wilians - Advogados"
                        >
                            <img
                                src="https://nwadv.com.br/wp-content/themes/nwadv/img/logo-nwadv.png"
                                alt=""
                            />
                        </a>

                        <ul>
                            <li>sobre nos</li>
                            <li>profissionais</li>
                            <li>areas de atuacao</li>
                            <li>filiais</li>
                            <li>missao</li>
                            <li>valores</li>
                            <li><a href="/admin">blog</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <div>
                <section
                    className="section section-billboard"
                    id="billboard">
                    <div className="wrapper-video">
                        <video
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsInline={true}
                            src="https://nwadv.com.br/wp-content/uploads/2022/08/VIDEO-SITE_fpv2-1.mp4"
                        // type="video/mp4"
                        ></video>
                    </div>

                    <div className="wrapper-center">
                        <div className="box custom-border w924">
                            <h5>Somos o <b>Nelson Wilians</b> Advogados</h5>
                            <div className="description">
                                <p>
                                    <strong>Nascemos de um grande, saudavel e ambicioso sonho:</strong>
                                    ser o maior escritorio de advocacia empresarial do pais.
                                </p>
                            </div>
                        </div>
                        <a onClick={scrollElement}
                            title="Proximo"
                            className="arrow-down">&nbsp;</a>
                    </div>

                    <div id="conteudo"><h1>outros elementos aqui</h1></div>
                </section>
            </div>
            <footer>
                <a href="/admin">admin</a>
            </footer>
        </>
    )
}