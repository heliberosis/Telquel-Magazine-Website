import React from 'react';

export default function InternationalPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">International</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder content */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Article international</h2>
            <p className="text-muted-foreground">
              Contenu à venir...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}