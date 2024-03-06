import { Helmet } from 'react-helmet-async';
// sections
import { ElearningLandingView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

export default function ElearningLandingPage() {
  const title = `Erkesha's portfolio`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <ElearningLandingView />
    </>
  );
}
