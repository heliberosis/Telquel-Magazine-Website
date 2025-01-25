export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">À propos</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Telquel est le magazine d'information indépendant de référence au Maroc.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Rubriques</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Politique</li>
              <li>Culture</li>
              <li>Économie</li>
              <li>International</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Abonnements</li>
              <li>Newsletter</li>
              <li>Publicité</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Suivez-nous</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Telquel. Tous droits réservés.
          </p>
          <p className="mt-2 text-sm text-muted-foreground italic">
            Made with ❤️ by Hamza El Obaydy
          </p>
        </div>
      </div>
    </footer>
  );
}