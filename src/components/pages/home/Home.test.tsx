import { fireEvent, render, screen } from '@testing-library/react';

import { provider } from '../../../provider/Provider';
import { Home } from './Home';

describe('Home', () => {
  it('input is rendered', async () => {
    render(provider(<Home />));

    const input = (await screen.findByLabelText(
      'Enter city'
    )) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'kyiv' } });
    expect(input.value).toBe('kyiv');
  });

  it('city is added', async () => {
    render(provider(<Home />));

    const input = (await screen.findByLabelText(
      'Enter city'
    )) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'kharkiv' } });

    setTimeout(async () => {
      const cityCardTitle = await screen.findByText('Kharkiv');
      expect(cityCardTitle).toBeVisible();
    }, 1000);
  });

  it('city is deleted', async () => {
    render(provider(<Home />));

    const input = (await screen.findByLabelText(
      'Enter city'
    )) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'kharkiv' } });

    setTimeout(async () => {
      const deleteButton = await screen.findByText('Delete');

      fireEvent.click(deleteButton);

      const cityCardTitle = await screen.findByText('Kharkiv');
      expect(cityCardTitle).not.toBeVisible();
    }, 1000);
  });
});

