import { render } from '@testing-library/react';

import { TransliterationEditorComponent } from './react';

describe('TransliterationEditorComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TransliterationEditorComponent language="hindi" layout="stacked" />);
    expect(baseElement).toBeTruthy();
  });
});
