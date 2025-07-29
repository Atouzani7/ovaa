import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full border-b border-gray-200 bg-white100">
            <div className="flex justify-between items-center py-6 px-6">
                <div>
                    <Image
                        // className="dark:invert"
                        src="/logoOvaa.svg"
                        alt="Logo Ovaa"
                        width={180}
                        height={38}
                        priority
                    />
                </div>

                <div className="flex gap-4">
                    <button className="bg-detail text-foreground px-4 py-2 rounded">
                        Nouveau projet
                    </button>
                    <button className="bg-detail text-foreground px-4 py-2 rounded">
                        Login
                    </button>
                </div>
            </div>
        </div>

    );
}
import React from 'react';