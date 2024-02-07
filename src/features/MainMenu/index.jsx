import { getUserLibrary } from '@/api/libraryApi';
import LibraryContext from '@/context/LibraryContext';
import './MainMenu.css';

import ExternalLinkInput from "@/features/ExternalLinkInput";
import CollectionPicker from "@/features/CollectionPicker";

const userLibrary = getUserLibrary();

const MainMenu = () => {
    return (
        <section id="main-menu">
            <header id="main-header">
                <div className="logo-holder">
                    <img src="src/assets/images/amm-logo-concise.svg" id="amm-logo" />
                </div>
                <div className="header-middle-section">
                    <h1>Audio Muse & Manager</h1>
                    <section className="acknowledgements">
					</section>
                </div>
                <button id="main-login-button" data-notice="(not implemented yet&#128517;)">
                    Sign up
                </button>
            </header>
            <main id="menu-contents-wrapper">
                <article className="about-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </article>
                <section className="collection-interface">
                    <ExternalLinkInput id="main-link-input" onSubmit={() => {}} placeholder="Link to playlist..." />
                    <LibraryContext.Provider value={userLibrary}>
						<CollectionPicker id="main-collection-picker" />
					</LibraryContext.Provider>
                </section>
            </main>
        </section>
    );
};

export default MainMenu;
