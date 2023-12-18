import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  block.textContent = '';

  // load footer fragment
  const footerPath = footerMeta.footer || '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);

  const links = footer.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      event.preventDefault();
      
      const linkDomainMatches = this.href.match(/^(https?:)?\/\/([^\/]+)/);

      //Index 0 contains the entire matched substring.
      //Index 1, if it exists, contains the matched "https:" or "http:" part (optional).
      //Index 2 contains the matched domain.
      if (linkDomainMatches[2] === "docs.google.com") {
        window.location.href = this.href;
      } else {
        window.open(this.href, '_blank');
      }
    });
  }
  
}
