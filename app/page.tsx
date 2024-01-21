/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

import './styles.scss';

function ContentList() {
  const baseDuration = 0.4;

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.item1',
      { x: -50, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, ease: 'expo.easeIn', duration: baseDuration },
    )
      .fromTo(
        '.border1',
        { x: 0, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, ease: 'expo.easeIn', duration: baseDuration },
      )
      .fromTo(
        '.item2',
        { x: -50, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, ease: 'expo.easeIn', duration: baseDuration },
      )
      .fromTo(
        '.border2',
        { x: 0, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, ease: 'expo.easeIn', duration: baseDuration },
      )
      .fromTo(
        '.item3',
        { x: -50, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, ease: 'expo.easeIn', duration: baseDuration },
      )
      .fromTo(
        '.border3',
        { x: 0, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, ease: 'expo.easeIn', duration: baseDuration },
      );
  }, []);

  return (
    <ul className="itemList">
      <li className="item item1">
        <Link href="/first">INdex</Link>
      </li>
      <li className="borderItem border1" />
      <li className="item item2">
        <Link href="/modeling/first">Modeling</Link>
      </li>
      <li className="borderItem border2" />
      <li className="item item3">
        <Link href="/panorama/checker">Panorama</Link>
      </li>
      <li className="borderItem border3" />
    </ul>
  );
}

function Page() {
  return (
    <div className="main">
      <div className="title">Hello React THree Fiber</div>
      <div className="contentItems">
        <ContentList />
      </div>
    </div>
  );
}

export default Page;
