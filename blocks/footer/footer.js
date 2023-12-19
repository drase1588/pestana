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
    links[i].setAttribute('target', '_blank');

    links[i].addEventListener('click', function (event) {
      const linkDomainMatches = this.href.match(/^(https?:)?\/\/([^\/]+)/);
      if (linkDomainMatches[2] === "docs.google.com") {
        event.preventDefault();
        window.location.href = this.href;
      }
    });
  }

}
