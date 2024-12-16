import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import App from '../index';

jest.mock('../../shared/DashboardLaunchButton', () => () => <div>Mocked DashboardLaunchButton Component</div>);

jest.mock('constants', () => ({
  mfeBaseUrl: '/base-url',
}));

describe('App Component', () => {
  it('renders DashboardLaunchButton component by default', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/base-url']}>
          <App />
        </MemoryRouter>,
      );
    });

    expect(screen.getByText('Mocked DashboardLaunchButton Component')).toBeInTheDocument();
  });
});
