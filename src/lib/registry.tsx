'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';
import { Themes } from '@/styles/Themes';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  return (
    <StyleSheetManager
      sheet={styledComponentsStyleSheet.instance}
      shouldForwardProp={(prop) => !prop.startsWith('$')}
    >
      <ThemeProvider theme={Themes}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
}
