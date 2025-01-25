import React from 'react';
import { Button } from '@/components/ui/button';

export default function AbonnementPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Abonnez-vous à Telquel</h1>
      
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {/* Basic Plan */}
        <div className="rounded-lg border bg-card p-8 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Digital</h2>
          <div className="text-3xl font-bold mb-2">99 MAD<span className="text-lg font-normal text-muted-foreground">/mois</span></div>
          <p className="text-muted-foreground mb-6">Accès illimité au contenu numérique</p>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-center">✓ Articles exclusifs</li>
            <li className="flex items-center">✓ Application mobile</li>
            <li className="flex items-center">✓ Newsletter premium</li>
          </ul>
          <Button className="w-full">Choisir</Button>
        </div>

        {/* Premium Plan */}
        <div className="rounded-lg border bg-primary text-primary-foreground p-8 flex flex-col relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm">
            Plus populaire
          </div>
          <h2 className="text-2xl font-semibold mb-4">Premium</h2>
          <div className="text-3xl font-bold mb-2">199 MAD<span className="text-lg font-normal opacity-85">/mois</span></div>
          <p className="opacity-85 mb-6">Le meilleur de Telquel en numérique et papier</p>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-center">✓ Tous les avantages Digital</li>
            <li className="flex items-center">✓ Magazine papier mensuel</li>
            <li className="flex items-center">✓ Éditions spéciales</li>
            <li className="flex items-center">✓ Événements exclusifs</li>
          </ul>
          <Button variant="secondary" className="w-full">Choisir</Button>
        </div>

        {/* Business Plan */}
        <div className="rounded-lg border bg-card p-8 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Entreprise</h2>
          <div className="text-3xl font-bold mb-2">499 MAD<span className="text-lg font-normal text-muted-foreground">/mois</span></div>
          <p className="text-muted-foreground mb-6">Solution pour les équipes</p>
          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-center">✓ 5 accès Premium</li>
            <li className="flex items-center">✓ Facturation entreprise</li>
            <li className="flex items-center">✓ Support dédié</li>
            <li className="flex items-center">✓ Analyse personnalisée</li>
          </ul>
          <Button className="w-full">Contacter</Button>
        </div>
      </div>
    </div>
  );
}