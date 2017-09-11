export default ({ title }) => (
  <h1>
    {title}

    <style jsx>{`
      h1 {
        font-size: 80px;
        font-weight: bold;
        letter-spacing: -1px;
      }
    `}</style>
  </h1>
);
