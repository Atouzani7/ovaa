import Image from "next/image";

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-foreground p-8 w-2/3 mx-auto ">
            <div className="flex flex-col items-center mb-12">
                <Image
                    src="/ovaa.png"
                    alt="Logo Ovaa"
                    width={180}
                    height={38}
                    className="mb-6"
                    priority
                />
                <h2 className=" italic" >Des projets clairs, des clients ravis </h2>
                <p className=" text-gray-700 mb-8">Votre solution de gestion de projet.</p>
            </div>
            <div>
                <h1 className="text-4xl font-bold mb-4 italic">Welcome to Ovaa</h1>

                <p className=" text-gray-700 mb-8">La gestion de projet client ne devrait pas être compliquée.
                    Tu jongles entre Trello, Notion, WhatsApp, et des mails sans fin ?
                    Tes clients sont perdus, toi aussi. Tu veux juste un endroit clair, beau et simple pour collaborer.
                </p>
            </div>
            {/* <div className="flex flex-col items-center text-center mb-12">
                <Image
                    src="/ovaa.png"
                    alt="Landing Image"
                    width={180}
                    height={30}
                    className="mb-8 "
                />
            </div> */}
            <div>
                <div>
                    <p className=" text-gray-700 mb-8">Ovaa est là pour ça. Un outil de gestion de projet client qui te permet de tout centraliser, de la planification à la communication, le tout dans une interface intuitive.</p>
                    <p>Ovaa, ton espace projet stylé. <br />
                        •    Une interface client claire, minimaliste et brandée à ton image <br />
                        •    Partage l’avancement étape par étape <br />
                        •    Ajoute des commentaires, des fichiers, et garde le fil du projet <br />
                        •    Pensé pour les freelances, pas pour les grosses boîtes</p>
                </div>

                <div className="mt-8 flex flex-row items-center  gap-40 ">
                    <p>Pour qui ? <br />
                        •    Designers & Webdesigners <br />
                        •    Développeurs freelances <br />
                        •    Photographes & vidéastes <br />
                        •    Créateurs, artisans, makers <br />
                        •    Consultants & coachs</p>
                    <p>Pourquoi Ovaa ? <br />
                        •    Design minimaliste <br />
                        •    Rapide à mettre en place <br />
                        •    Zéro friction pour ton client <br />
                        •    100% orienté relation humaine</p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <h2 className="text-2xl font-semibold mb-4">Prêt à simplifier vos projets ?</h2>
                <p className="text-gray-700 mb-6">Rejoignez Ovaa et transformez votre façon de gérer les projets clients.</p>
            </div>
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                Get Started
            </button>

        </div>
    );
}