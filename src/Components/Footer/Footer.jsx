import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__payments">
            <a href="#">
              <img src="./imgs/paymethods/visa.png" alt="Visa" loading="lazy" />
            </a>
            <a href="#">
              <img
                src="./imgs/paymethods/mastercard.svg"
                alt="Mastercard"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/paymethods/skrill.svg"
                alt="Skrill"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/paymethods/netteler.svg"
                alt="Neteller"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/paymethods/paysafecard.svg"
                alt="PaysafeCard"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/paymethods/btc.svg"
                alt="Bitcoin"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/paymethods/trx.svg"
                alt="Tron TRX"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/paymethods/litecoin.svg"
                alt="Litecoin"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/paymethods/etherium.svg"
                alt="Ethereum"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/paymethods/doge.svg"
                alt="Dogecoin"
                loading="lazy"
              />
            </a>
          </div>

          <div className="footer__providers">
            <a href="#">
              <img
                src="./imgs/bottomIcons/booongo.svg"
                alt="Booongo"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/bottomIcons/evoplay.svg"
                alt="Evoplay"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/bottomIcons/habanero.png"
                alt="Habanero"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/bottomIcons/pragmatic.svg"
                alt="Pragmatic Play"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/bottomIcons/game art.png"
                alt="GameArt"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/bottomIcons/thunderspin.svg"
                alt="Thunderspin"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/bottomIcons/endorphina.svg"
                alt="Endorphina"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/bottomIcons/playngo.svg"
                alt="Play’n GO"
                loading="lazy"
              />
            </a>
            <a href="#">
              <img
                src="./imgs/bottomIcons/hacksaw.svg"
                alt="Hacksaw"
                loading="lazy"
              />
            </a>
          </div>

          <div className="footer__links">
            <div>
              <h4>Our Products</h4>
              <ul>
                <li>
                  <a href="#">Sports Betting</a>
                </li>
                <li>
                  <a href="#">Virtual Sports</a>
                </li>
                <li>
                  <a href="#">E-Sport</a>
                </li>
                <li>
                  <a href="#">Mini Games</a>
                </li>
                <li>
                  <a href="#">Casino</a>
                </li>
                <li>
                  <a href="#">Live Casino</a>
                </li>
                <li>
                  <a href="#">Accounts & Bonuses</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Information</h4>
              <ul>
                <li>
                  <a href="#">Company Details</a>
                </li>
                <li>
                  <a href="#">Responsible Gaming</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Affiliate</a>
                </li>
                <li>
                  <a href="#">Sportsbook Terms</a>
                </li>
                <li>
                  <a href="#">Cosmobet News</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Help</h4>
              <ul>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">KYC/AML Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">Dispute Resolution</a>
                </li>
                <li>
                  <a href="#">Self Exclusion</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <a href="mailto:support@cosmobet.com">Support@Cosmobet.com</a>
                </li>
                <li>
                  <a href="#">Live Chat</a>
                </li>
                <li>
                  <a href="mailto:affiliates@cosmobet.com">
                    Affiliates@Cosmobet.com
                  </a>
                </li>
                <li>
                  <a href="#">VIP</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__bottom-icons" aria-hidden="true">
              <img
                src="./imgs/18plus.png"
                alt="18+"
                width="20"
                height="20"
                loading="lazy"
              />
              <img
                src="./imgs/ssl.png"
                alt="SSL"
                width="20"
                height="20"
                loading="lazy"
              />
            </div>
            <strong>Attention!</strong>
            <span>
              It is gambling advertising. Gambling is not suitable for solving
              financial problems. Please read terms and conditions and play
              responsibly. 18+
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
