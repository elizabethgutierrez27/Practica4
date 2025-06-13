import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <header style={{
        padding: '10px 20px',
        backgroundColor: '#f13710',
        color: '#fff'
      }}>
        <nav>
          <Link to="/" style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>Acerca de</Link>
        </nav>
      </header>

      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>

      <footer style={{
        padding: '10px 20px',
        backgroundColor: '#f13710',
        color: '#fff',
        textAlign: 'center'
      }}>
        <p>Derechos Reservados© 2025</p>
      </footer>
    </div>
  );
};

export default Layout;
