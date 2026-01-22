'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon'; // Asegúrate que esta ruta sea correcta

export default function NotFound() {
    const router = useRouter();

    const handleGoHome = () => {
        // CAMBIO IMPORTANTE: No uses '/', usa '/homepage'
        // '/' te llevaría a la raíz de github.io, no a tu proyecto
        router.push('/homepage');
    };

    const handleGoBack = () => {
        if (typeof window !== 'undefined') {
            window.history?.back();
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
            <div className="text-center max-w-md">
                {/* ... (El resto de tu código visual igual) ... */}
                
                <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
                <h2 className="text-2xl font-medium text-onBackground mb-2">Page Not Found</h2>
                <p className="text-onBackground/70 mb-8">
                    The page you're looking for doesn't exist. Let's get you back!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={handleGoBack} className="bg-primary text-white px-6 py-3 rounded-lg">
                       Go Back
                    </button>

                    <button 
                        onClick={handleGoHome} 
                        className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}