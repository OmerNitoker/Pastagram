export function HomeIcon({ marginRight, active }) {
    const iconColor = active ? '#000' : 'currentColor';
    const iconWeight = active ? 600 : 'normal';

    if (active) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight, fontWeight: iconWeight }} aria-label="Home" className="x1lliihq x1n2onr6 x5n08af" fill={iconColor} height="24" role="img" viewBox="0 0 24 24" width="24">
                <title>Home</title>
                <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"/>
            </svg>
        );
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight, fontWeight: iconWeight }} aria-label="Accueil" className="x1lliihq x1n2onr6 x5n08af" fill={iconColor} height="24" role="img" viewBox="0 0 24 24" width="24">
            <title>Accueil</title>
            <path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"/>
        </svg>
    );
}
