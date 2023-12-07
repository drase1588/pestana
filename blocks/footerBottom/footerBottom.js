import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footerBottom
 * @param {Element} block The footerBottom block element
 */
export default async function decorate(block) {
  const footerBottomMeta = getMetadata('footerBottom');
  block.textContent = '';

  // load footer fragment
  const footerBottomPath = footerBottomMeta.footerBottom || '/footerBottom';
  const fragment = await loadFragment(footerBottomPath);

  // decorate footer DOM
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
}
