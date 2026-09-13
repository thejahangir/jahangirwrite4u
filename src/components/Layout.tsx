import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TopProgressBar from './TopProgressBar';
import BackToTop from './BackToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopProgressBar />
      <Header />
      <main className="flex-grow flex flex-col print:block">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
