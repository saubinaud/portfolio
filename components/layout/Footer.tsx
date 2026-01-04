const Footer = () => {
    return (
        <footer className="py-8 bg-bg-secondary border-t border-bg-tertiary mt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-text-muted text-sm">
                    © {new Date().getFullYear()} Sebastien Aubinaud
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-text-muted hover:text-accent-primary text-sm transition-colors">Volver arriba ↑</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
