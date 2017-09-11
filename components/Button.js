const iconPayPal = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#fff"
  >
    <path d="M22 9.761c0 .536-.065 1.084-.169 1.627-.847 4.419-3.746 5.946-7.449 5.946h-.572c-.453 0-.838.334-.908.789l-.803 5.09c-.071.453-.456.787-.908.787h-2.736c-.39 0-.688-.348-.628-.732l1.386-8.88.062-.056h2.155c5.235 0 8.509-2.618 9.473-7.568.812.814 1.097 1.876 1.097 2.997zm-14.216 4.252c.116-.826.459-1.177 1.385-1.179l2.26-.002c4.574 0 7.198-2.09 8.023-6.39.8-4.134-2.102-6.442-6.031-6.442h-7.344c-.517 0-.958.382-1.038.901-2.304 14.835-2.97 18.607-3.038 19.758-.021.362.269.672.635.672h3.989l1.159-7.318z" />
  </svg>
);
const iconFacebook = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#fff"
  >
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);
const iconTwitter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#fff"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const Button = ({ value, social }) => (
  <button
    className={
      value === "Twitter" ? (
        "twitter"
      ) : value === "Facebook" ? (
        "facebook"
      ) : value === "PayPal" ? (
        "paypal"
      ) : (
        ""
      )
    }
  >
    {!social && <span>{value}</span>}

    {social && value === "PayPal" && iconPayPal}
    {social && value === "Facebook" && iconFacebook}
    {social && value === "Twitter" && iconTwitter}

    <style jsx>{`
      button {
        appearance: none;
        -webkit-appearance: none;
        padding: 15px 20px;
        border: none;
        background: #0095ff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        margin: 10px 0;
        cursor: pointer;
        transition: background 0.2s ease-out;
      }

      button:hover {
        background: #007bff;
      }

      .paypal {
        background: #005db2;
        padding: 10px 40px;
      }

      .paypal:hover {
        background: #003eb3;
      }

      .twitter {
        background: #00a1f9;
        padding: 10px 40px;
      }

      .twitter:hover {
        background: #0079fa;
      }

      .facebook {
        background: #3965b8;
        padding: 10px 40px;
      }

      .facebook:hover {
        background: #3950b8;
      }
    `}</style>
  </button>
);

export default Button;
