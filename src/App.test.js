import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import BoxComponent from './boxes';
import MyFooter from './footer';
import Banner from './banner';

test('Boxcompoent test', () => {
  render(<BoxComponent/>);
  const boxComp = screen.getByAltText('Box image'); 
  expect(boxComp).toBeInTheDocument();
});
test('Footer Id text', () => {
  render(<MyFooter/>);
  const footerid = screen.getByTestId('footer'); 
  expect(footerid).toBeInTheDocument();
})
test('renders Welcome to our App in the banner', () => {
  render(<Banner />);
  const bannerText = screen.getByText('Welcome to our App', { selector: '.welcom-text-app' });
  expect(bannerText).toHaveTextContent('Welcome to our App');
});
