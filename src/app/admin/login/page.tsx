'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError('Email ou mot de passe incorrect.');
      return;
    }

    router.push('/admin');
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="text-xs text-text-muted hover:text-text-primary transition-colors flex items-center gap-1.5"
        >
          <span>&larr;</span> Retour au site public
        </Link>
      </div>
      <Card className="w-full max-w-md border-card-border bg-card">
        <CardHeader className="text-center">
          <div className="w-12 h-12 bg-accent rounded flex items-center justify-center mx-auto mb-4 shadow-sm">
            <span className="text-white text-lg font-bold">MG</span>
          </div>
          <CardTitle className="text-text-primary text-xl font-bold">Portail Administration</CardTitle>
          <CardDescription className="text-text-muted">
            Connectez-vous pour accéder à la gestion du cabinet.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-text-muted text-xs">Adresse Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@cabinetguellaty.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-dark/50 border-card-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-text-muted text-xs">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-dark/50 border-card-border"
              />
            </div>
            {error && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 p-2.5 rounded text-center">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-semibold" disabled={loading}>
              {loading ? 'Connexion en cours...' : 'Se connecter'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
