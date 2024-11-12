'use client';

import { useEffect, useState } from 'react';
import Providers from "@/components/ProgressBarProvider";

const ClientProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <Providers>{children}</Providers> : null;
};

export default ClientProviders;