'use client';

import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g90">
        <TutorialHeader />
        <Content>{children}</Content>
      </Theme>
    </div>
  );
}
