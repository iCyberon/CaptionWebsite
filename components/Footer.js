import Link from "next/link";

const Footer = () => (
  <footer>
    <ul>
      <li>
        <Link href="">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a target="_blank">Press</a>
        </Link>
      </li>
      <li>
        <Link href="">
          <a>Support</a>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/gielcobben/Caption" prefetch>
          <a target="_blank">Github</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      footer {
        font-size: 13px;
        color: #fff;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      li {
        margin: 0 32px;
      }

      a {
        text-decoration: none;
        color: #fff;
        transition: opacity 0.2s ease;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </footer>
);

export default Footer;
