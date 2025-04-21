export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '2em', marginBottom: '0.5em' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.2em', color: '#666' }}>The page you are looking for does not exist.</p>
    </div>
  );
}