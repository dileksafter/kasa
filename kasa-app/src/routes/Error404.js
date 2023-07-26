import { Link } from 'react-router-dom';
import "../styles/Error404.sass"

const App = () => {
    return (
        <div className='errorPage'>
            <h1 className="error404">404</h1>
            <p className="errorMessage">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="returnMain" to='/'> Retournez à la page d'Accueil</Link>
        </div>
    );
};

export default App;