import './App.css';

function App() {
  const user = {
    name:"Thisi Igdir",
    age:23,
    email:"thierrymbaye@gmail.com",
    hobbies: ['jouer', 'lire', 'coder'],
    // ...

  };

  //Fonction pour varier le style selon l'age de l'utilisateur
  const getAgeStyle = (age) => {
    if ( age < 18) {
      return {background: "red"} //Style pour les mineurs
    } else if(age < 25)  {
      return {background: "green"} //Style pour les moins de 25 ans et plus de 18 ans ou egal a 18ans
    } else {
      return {background: "gray"} //Style pour les plus de 25 ans

    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Carte Utilisateur</h1>
        <div className="user-card" style= { getAgeStyle(user.age) }>
          <div>{user.name}</div>
          <div>{user.age} ans</div>
          <div>{user.email}</div>
          <div >{user.hobbies.map((hobby, index) => (
            <div key={index} className="hobby">
                {hobby}
            </div>
          ))}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
