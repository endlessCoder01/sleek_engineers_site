import Link from "next/link";
import styles from "./WebsitePricing.module.css";

const monthlyHostingPrice = 15;

const items = [
  {
    name: "Static website design",
    description:
      "A fast, responsive single page with a custom layout and WhatsApp click-to-order integration.",
    price: 50,
    billing: "one-time",
  },
  {
    name: "Your own domain",
    description: "One year of registration for a .co.zw or .com web address.",
    price: 15,
    billing: "first year",
  },
  {
    name: "Cloud hosting & setup",
    description:
      "Monthly cloud hosting, with an SSL security certificate (HTTPS) and DNS setup. The first month is included in the launch price.",
    price: monthlyHostingPrice,
    billing: "per month",
  },
];

const total = items.reduce((sum, item) => sum + item.price, 0);

const backendEstimates = [
  {
    name: "Simple backend",
    price: "$300–$800",
    description: "CRUD, authentication and basic APIs.",
  },
  {
    name: "Moderate backend",
    price: "$800–$1,800",
    description: "SaaS MVPs, dashboards and payments.",
  },
  {
    name: "Complex backend",
    price: "$1,900–$2,500+",
    description: "Marketplaces and multi-tenant SaaS.",
  },
];

const stages = [
  {
    title: "Upfront deposit",
    amount: 55,
    description:
      `$15 for the first year of domain registration, $${monthlyHostingPrice} for the first month of hosting, and a $25 design deposit.`,
  },
  {
    title: "Testing & live demo",
    amount: 0,
    description:
      "Your live preview is ready within 48–72 hours of the deposit. Test your site and WhatsApp ordering on your phone.",
  },
  {
    title: "Approval & launch",
    amount: 25,
    description:
      "Pay the final balance once you are satisfied and approve the demo. We then launch on your domain.",
  },
];

export default function WebsitePricing() {
  return (
    <section
      className={`section-frame ${styles.section}`}
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className={styles.heading}>
        <div>
          <p className={styles.kicker}>Services &amp; pricing</p>
          <h2 id="pricing-title">Your next chapter.<br /><em>A clear price.</em></h2>
        </div>
        <p className={styles.intro}>
          Websites, custom software and apps built around your requirements.
          All prices are in USD; starting prices and estimates depend on your project&apos;s scope.
        </p>
      </div>

      <div className={styles.serviceGrid}>
        <article className={`${styles.serviceCard} ${styles.serviceCardFeatured}`}>
          <h3 className={styles.serviceName}>Static websites</h3>
          <p className={styles.servicePrice}>
            <strong>${total}</strong><span className={styles.currency}>USD</span>
          </p>
          <p className={styles.serviceDescription}>
            A responsive one-page website, your domain and the first month of hosting.
            Then ${monthlyHostingPrice}/month for hosting.
          </p>
          <Link className={styles.serviceCta} href="/contact">Start your website</Link>
        </article>
        <article className={styles.serviceCard}>
          <h3 className={styles.serviceName}>Dynamic websites</h3>
          <p className={styles.servicePrice}>
            <span className={styles.pricePrefix}>From</span>
            <strong>$150</strong><span className={styles.currency}>USD</span>
          </p>
          <p className={styles.serviceDescription}>
            A website priced around the features and functionality you need.
          </p>
          <Link className={styles.serviceCta} href="/contact">Discuss your website</Link>
        </article>
        <article className={styles.serviceCard}>
          <h3 className={styles.serviceName}>Custom software</h3>
          <p className={styles.servicePrice}>
            <span className={styles.pricePrefix}>From</span>
            <strong>$550</strong><span className={styles.currency}>USD</span>
          </p>
          <p className={styles.serviceDescription}>
            Software shaped around your business requirements and workflows.
          </p>
          <Link className={styles.serviceCta} href="/contact">Discuss your software</Link>
        </article>
        <article className={styles.serviceCard}>
          <h3 className={styles.serviceName}>PWA &amp; mobile apps</h3>
          <p className={`${styles.servicePrice} ${styles.quotePrice}`}>
            <strong>Custom quote</strong>
          </p>
          <p className={styles.serviceDescription}>
            Progressive web apps and mobile apps priced to your requirements.
          </p>
          <Link className={styles.serviceCta} href="/contact">Request a quote</Link>
        </article>
      </div>

      <section className={styles.backendSection} aria-labelledby="backend-pricing-title">
        <div className={styles.backendHeading}>
          <h3 id="backend-pricing-title">Backend development</h3>
          <p className={styles.backendIntro}>
            Zimbabwe estimates in USD. Final pricing depends on your requirements.
          </p>
        </div>
        <div className={styles.backendGrid}>
          {backendEstimates.map((backend) => (
            <article className={styles.backendCard} key={backend.name}>
              <h4>{backend.name}</h4>
              <p className={styles.backendPrice}>{backend.price}</p>
              <p>{backend.description}</p>
            </article>
          ))}
        </div>
      </section>

      <details className={styles.packageDetails}>
        <summary className={styles.packageSummary}>Static website package: what&apos;s included</summary>
        <div className={styles.packageDetailsBody}>
          <div className={styles.package}>
            <div className={styles.offer}>
              <p className={styles.offerLabel}>Static website package</p>
              <p className={styles.price}><strong>${total}</strong><span>USD to launch</span></p>
              <p className={styles.billingNote}>
                <strong>Then ${monthlyHostingPrice}/month for hosting.</strong>
                <span>The first month is included in your launch price.</span>
              </p>
              <p className={styles.offerDescription}>
                One page. Your own web address.<br />Ready to connect with customers.
              </p>
              <ul className={styles.highlights}>
                <li>Responsive design for mobile and desktop</li>
                <li>WhatsApp click-to-order button</li>
                <li>First year of domain registration included</li>
                <li>First month of hosting included</li>
              </ul>
              <Link className={styles.cta} href="/contact">Start your website</Link>
              <p className={styles.support}>
                Includes basic technical assistance and setup verification.
              </p>
            </div>

            <div className={styles.breakdown}>
              <h3>What&apos;s included</h3>
              <table className={styles.table}>
                <caption className={styles.visuallyHidden}>Static website launch package costs and billing periods in US dollars</caption>
                <thead className={styles.visuallyHidden}>
                  <tr><th scope="col">Item</th><th scope="col">Price (USD)</th></tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.name}>
                      <th scope="row">
                        <span className={styles.itemName}>{item.name}</span>
                        <span className={styles.itemDescription}>{item.description}</span>
                      </th>
                      <td>
                        ${item.price.toFixed(2)}
                        <span className={styles.priceTerm}>{item.billing}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr><th scope="row">Launch total</th><td>${total.toFixed(2)}</td></tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className={styles.paymentHeading}>
            <h3>A simple path to your static website</h3>
            <p>All amounts are in USD.</p>
          </div>
          <ol className={styles.stages}>
            {stages.map((stage) => (
              <li key={stage.title}>
                <div className={styles.stageHeading}>
                  <h4>{stage.title}</h4>
                  <strong>${stage.amount.toFixed(2)}</strong>
                </div>
                <p>{stage.description}</p>
              </li>
            ))}
          </ol>
          <p className={styles.paymentMethods}>
            <strong>Accepted payments</strong> USD cash, EcoCash, InnBucks or Mukuru.
          </p>
        </div>
      </details>
    </section>
  );
}