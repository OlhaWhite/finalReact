import React from 'react';
import './Footer.css';


export const Footer = () => {
  return (
<div class="container-footer">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="/about" class="nav-link px-2 text-muted">About</a></li>
      <li class="nav-item"><a href="/portfolio" class="nav-link px-2 text-muted">Portfolio</a></li>
      <li class="nav-item"><a href="/contact" class="nav-link px-2 text-muted">Contact</a></li>
    </ul>
    <p class="text-center text-muted">© 2023 Olha White, Inc</p>
  </footer>
</div>

  );
};

