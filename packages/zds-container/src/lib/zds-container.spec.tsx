import { render } from '@testing-library/react';

import ZdsContainer from './zds-container';

describe('ZdsContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ZdsContainer />);
    expect(baseElement).toBeTruthy();
  });
});
