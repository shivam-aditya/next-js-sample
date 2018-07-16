// This is the Link API
import Link from 'next/link'

const linkStyle = {
  marginRight: 5
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <p/>
        Click to read more about us: {' '}
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        {/* <Link href="/about">
         <button>Go to About Page using button</button>
        </Link> */}
    </div>
)

export default Header