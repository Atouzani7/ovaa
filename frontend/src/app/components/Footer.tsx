export default function Footer() {
    return (
        <footer className=" py-4">
            <div className="  text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} My Application. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
import React from 'react';