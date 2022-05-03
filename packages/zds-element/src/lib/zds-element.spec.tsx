import { render } from '@testing-library/react';

import ZdsElement from './zds-element';

describe('ZdsElement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ZdsElement />);
    expect(baseElement).toBeTruthy();
  });
});
