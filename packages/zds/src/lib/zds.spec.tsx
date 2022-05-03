import { render } from '@testing-library/react';

import Zds from './zds';

describe('Zds', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Zds />);
    expect(baseElement).toBeTruthy();
  });
});
