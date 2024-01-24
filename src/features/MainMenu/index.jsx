
import SearchBar from "@/features/SearchBar";
import Button from "@/components/Button";

const MainMenu = () => {
    return (
        <section id="main-menu">
            <header className="icon-header">
                <img src="" className="amm-logo loc-menu" />
                <div>
                    <h1>Audio Muse & Manager</h1>
                    <section className="acknowledgements">
                        {/* service logos go here for compliance */}
                    </section>
                </div>
                <Button className="log-in-button" text="Log In"/> {/* based on state, change to account label */}
            </header>
            <main id="menu-interface">
                <article className="about-text">

                </article>
                <section className="collection-interface">
                    <div>
                        <SearchBar />
                        <Button className="collection-search-button" text="Search" /> {/* pass search domain and user input, 
                        etc., and submit SearchBar state */}
                    </div>
                    
                </section>
            </main>
        </section>
    )
};

export default MainMenu;
