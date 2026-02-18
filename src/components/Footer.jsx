import InstagramIcon from './InstagramIcon'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container-narrow">
        <div className="footer-content">
          <p className="footer-brand">Private practice therapist</p>
          <p className="footer-links">
            <a href="https://youralignedheart.com">youralignedheart.com</a>
            <span className="separator">&middot;</span>
            <a href="https://www.instagram.com/terra_artist_love/" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="Instagram (opens in new tab)"><InstagramIcon size={20} /></a>
          </p>
          <p className="footer-copyright">
            &copy; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
