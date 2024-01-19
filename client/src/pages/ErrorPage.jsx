import { Link } from 'react-router-dom';
import warning from "../assets/warning.svg"
function ErrorPage() {
  return (
    <section className='error-page'>
      <div className="center">
        <Link to="/" className='btn primary'>Go back Home</Link>
        <h2>Page Not Found</h2>
        {/* <img src={warning} alt="" width={50} height={100}/> */}
      </div>
    </section>
  )
}

export default ErrorPage