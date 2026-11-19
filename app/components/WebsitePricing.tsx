import Link from "next/link";
import styles from "./WebsitePricing.module.css";

const monthlyHostingPrice = 15;

const items = [
  {
    name: "Promotional website design",
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
          <p className={styles.kicker}>Website pricing</p>
          <h2 id="pricing-title">Your next chapter.<br /><em>A clear price.</em></h2>
        </div>
        <p className={styles.intro}>
          A focused promotional website that helps customers find your business
          and order through WhatsApp.
        </p>
      </div>

      <div className={styles.package}>
        <div className={styles.offer}>
          <p className={styles.offerLabel}>Promotional website package</p>
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
            <caption className={styles.visuallyHidden}>Launch package costs and billing periods in US dollars</caption>
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
        <h3>A simple path to launch</h3>
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
    </section>
  );
}
