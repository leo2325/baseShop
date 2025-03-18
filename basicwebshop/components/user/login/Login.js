const Login = () => {
    return (
      <div>
        <h2>Connexion</h2>
        <form>
          <input type="email" placeholder="Votre email" />
          <input type="password" placeholder="Votre mot de passe" />
          <button type="submit">Se connecter</button>
        </form>
        <p>Pas de compte ? <a href="/inscription">S'inscrire</a></p>
      </div>
    );
  };
  export default Login;
  