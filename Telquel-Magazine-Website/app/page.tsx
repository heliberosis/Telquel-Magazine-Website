import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a"
          alt="Moroccan cityscape"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              L'actualité marocaine sous un nouveau jour
            </h1>
            <p className="mb-8 text-xl">
              Analyses approfondies, enquêtes exclusives et débats d'idées
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Découvrir nos articles
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="container py-16">
        <h2 className="mb-8 text-3xl font-bold">À la une</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1553659971-f01207815844' : i === 2 ? '1589829545697-d6d6bf5e9d67' : '1512336019214-b8f36e64f0ff'}`}
                  alt="Article thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">
                  {i === 1 ? "La transformation digitale du Maroc" : 
                   i === 2 ? "L'avenir de l'éducation au Maroc" :
                   "Les défis économiques post-pandémie"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground">
                  {i === 1 ? "Analyse approfondie des initiatives numériques qui transforment le pays" :
                   i === 2 ? "État des lieux et perspectives du système éducatif marocain" :
                   "Comment le Maroc fait face aux défis économiques actuels"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold">Nos rubriques</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {['Politique', 'Culture', 'Économie', 'International'].map((category) => (
              <Card key={category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Découvrez nos derniers articles dans la rubrique {category.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container py-16">
        <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground">
          <h2 className="mb-4 text-3xl font-bold">Restez informé</h2>
          <p className="mb-6">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles
          </p>
          <div className="mx-auto flex max-w-md gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 rounded-md border bg-white px-4 py-2 text-black"
            />
            <Button variant="secondary">S'inscrire</Button>
          </div>
        </div>
      </section>
    </div>
  );
}