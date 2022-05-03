import { render } from '@testing-library/react';

import ZdsCore from './zds-core';

describe('ZdsCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ZdsCore />);
    expect(baseElement).toBeTruthy();
  });
});
