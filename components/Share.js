import Link from "next/link";
import Button from "./Button";

const Share = () => (
  <section>
    <p>
      If your download doesn’t start automatically,{" "}
      <Link href="">
        <a>click here.</a>
      </Link>{" "}
      If you're liking the app feel free to share it with your friends or buy me
      a coffee.
    </p>
    <ul>
      <li>
        <Link href="https://www.paypal.me/gielcobben">
          <a target="_blank">
            <Button value="PayPal" social />
          </a>
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/intent/tweet?text=Hello%20world">
          <a>
            <Button value="Twitter" social />
          </a>
        </Link>
      </li>
      <li>
        <Button value="Facebook" social />
      </li>
    </ul>
    <style jsx>{`
      section {
        flex: 1;
        margin: 0;
      }

      p {
        color: rgba(0, 0, 0, 0.6);
        text-align: center;
        font-size: 26px;
        font-weight: 200;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 32px 0;
      }

      li {
        margin: 0 16px;
      }
    `}</style>
  </section>
);

export default Share;
