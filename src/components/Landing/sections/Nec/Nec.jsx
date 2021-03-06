import React from 'react';
import './Nec.scss';

export default function Nec() {
  return (
    <section className="landing__section">
      <h1 className="nec__header">
        Welcome to the <span>home of Nectar</span>
      </h1>
      <p className="landing__section-content">
        Nectar ($NEC) is a deflationary governance and utility token serving the DeversiFi exchange.
      </p>
      <p className="landing__section-content">
        Holders of $NEC enjoy voting rights in necDAO, trading fee discounts on DeversiFi, and a
        host of ever-improving features designed to boost the utility, adoption and value of $NEC,
        DeversiFi and the wider ecosystem.
      </p>

      <p className="landing__section-content primary">
        DeversiFi is a professional-grade,<br /> self-custodial exchange built for serious traders.
      </p>
    </section>
  );
}
