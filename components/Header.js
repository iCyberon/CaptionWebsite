import Link from "next/link";
import Title from "./Title";
import Button from "./Button";

const Header = ({ title, subtitle, download }) => (
  <header>
    <Title title={title} />
    {subtitle && <p>{subtitle}</p>}
    {download && (
      <div>
        <Link href="/thanks">
          <a>
            <Button value="Download for Mac" />
          </a>
        </Link>
        <small>Coming soon for Windows &amp; Linux.</small>
      </div>
    )}

    <style jsx>{`
      header {
        text-align: center;
      }

      p {
        font-size: 46px;
        font-weight: 200;
        color: rgba(0, 0, 0, 0.6);
      }

      small {
        display: block;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
      }
    `}</style>
  </header>
);

export default Header;
